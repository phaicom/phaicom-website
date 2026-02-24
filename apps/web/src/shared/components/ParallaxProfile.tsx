import { useCallback, useRef } from "react";

import { Image } from "@/shared/components/Image";

export function ParallaxProfile() {
  const animationRef = useRef({
    target: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
    frameId: 0,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    animationRef.current.target.x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    animationRef.current.target.y = (e.clientY - rect.top - rect.height / 2) / rect.height;
  }, []);

  const containerRef = useCallback((element: HTMLDivElement | null) => {
    if (!element) {
      cancelAnimationFrame(animationRef.current.frameId);
      return;
    }

    const animate = () => {
      const { target, current } = animationRef.current;
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;

      element.style.setProperty("--parallax-x", `${current.x}`);
      element.style.setProperty("--parallax-y", `${current.y}`);

      animationRef.current.frameId = requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mx-auto h-50 w-50 select-none"
    >
      {/* Body - slowest layer */}
      <Image
        src="/images/profile/body.webp"
        alt="Body"
        layout="fullWidth"
        className="absolute inset-0 w-full transform-[translate(calc(var(--parallax-x)*15px),calc(var(--parallax-y)*15px))] object-contain transition-transform duration-75"
      />
      {/* Face - middle layer */}
      <Image
        src="/images/profile/face.webp"
        alt="Face"
        layout="fullWidth"
        className="absolute inset-0 m-auto w-[80%] transform-[translate(calc(var(--parallax-x)*25px),calc(var(--parallax-y)*25px))] object-contain transition-transform duration-75"
      />
      {/* Glasses - fastest/top layer */}
      <Image
        src="/images/profile/glasses.webp"
        alt="Glasses"
        layout="fullWidth"
        className="absolute inset-0 m-auto w-[60%] transform-[translate(calc(var(--parallax-x)*40px),calc(var(--parallax-y)*40px))] object-contain transition-transform duration-75"
      />
    </div>
  );
}
