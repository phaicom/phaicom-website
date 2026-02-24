import { useEffect, useRef } from "react";

import { Image } from "@/shared/components/Image";

export function ParallaxProfile() {
  const animationRef = useRef({
    target: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
    frameId: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Global mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to component center
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize to -1 to 1 range based on viewport
      // Clamp values to prevent extreme movements
      const normalizedX = (e.clientX - centerX) / window.innerWidth;
      const normalizedY = (e.clientY - centerY) / window.innerHeight;

      animationRef.current.target.x = Math.max(-1, Math.min(1, normalizedX));
      animationRef.current.target.y = Math.max(-1, Math.min(1, normalizedY));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const animate = () => {
      const { target, current } = animationRef.current;
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;

      element.style.setProperty("--parallax-x", `${current.x}`);
      element.style.setProperty("--parallax-y", `${current.y}`);

      animationRef.current.frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current.frameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto h-50 w-50 select-none">
      {/* Body - slowest layer */}
      <Image
        src="/images/profile/body.webp"
        alt="Body"
        layout="fullWidth"
        className="absolute inset-0 w-full transform-[translate(calc(var(--parallax-x)*5px),calc(var(--parallax-y)*5px))] object-contain transition-transform duration-75"
      />
      {/* Face - middle layer */}
      <Image
        src="/images/profile/face.webp"
        alt="Face"
        layout="fullWidth"
        className="absolute inset-0 m-auto w-[80%] transform-[translate(calc(var(--parallax-x)*8px),calc(var(--parallax-y)*8px))] object-contain transition-transform duration-75"
      />
      {/* Glasses - fastest/top layer */}
      <Image
        src="/images/profile/glasses.webp"
        alt="Glasses"
        layout="fullWidth"
        className="absolute inset-0 m-auto mt-[23%] w-[60%] transform-[translate(calc(var(--parallax-x)*12px),calc(var(--parallax-y)*12px))] object-contain transition-transform duration-75"
      />
    </div>
  );
}
