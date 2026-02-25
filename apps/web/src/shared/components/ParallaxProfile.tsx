import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { Image } from "@/shared/components/Image";

interface ImageConfig {
  body: string;
  face: string;
  glasses?: string;
}

const routeImageMap: Record<string, ImageConfig> = {
  "/": {
    body: "/images/profile/body.webp",
    face: "/images/profile/face.webp",
    glasses: "/images/profile/glasses.webp",
  },
  "/about": {
    body: "/images/profile/body-dev.webp",
    face: "/images/profile/face.webp",
  },
  "/projects": {
    body: "/images/profile/body-chill.webp",
    face: "/images/profile/face.webp",
    glasses: "/images/profile/glasses-chill.webp",
  },
  "/contact": {
    body: "/images/profile/body-jacket.webp",
    face: "/images/profile/face.webp",
  },
};

const defaultConfig: ImageConfig = {
  body: "/images/profile/body.webp",
  face: "/images/profile/face.webp",
  glasses: "/images/profile/glasses.webp",
};

export function ParallaxProfile() {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  const imageConfig = routeImageMap[location.pathname] || defaultConfig;

  const animationRef = useRef({
    target: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
    frameId: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = containerRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normalizedX = (e.clientX - centerX) / window.innerWidth;
      const normalizedY = (e.clientY - centerY) / window.innerHeight;

      animationRef.current.target.x = Math.max(-1, Math.min(1, normalizedX));
      animationRef.current.target.y = Math.max(-1, Math.min(1, normalizedY));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const animate = () => {
      const { target, current } = animationRef.current;

      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      element.style.setProperty("--parallax-x", `${current.x}`);
      element.style.setProperty("--parallax-y", `${current.y}`);

      animationRef.current.frameId = requestAnimationFrame(animate);
    };

    animationRef.current.frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current.frameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative mx-auto aspect-square w-full max-w-[200px]
        cursor-pointer overflow-hidden
        rounded-2xl bg-gradient-to-br from-primary/5
        to-primary/10 ring-1
        ring-border/50 transition-all
        duration-300 select-none
        hover:shadow-lg hover:shadow-primary/5 hover:ring-primary/30
      "
    >
      {/* Body */}
      <Image
        src={imageConfig.body}
        alt="Body"
        layout="fullWidth"
        className="absolute inset-0 transform-[translate(calc(var(--parallax-x)*4px),calc(var(--parallax-y)*4px))]
        object-contain
        transition-transform duration-75"
      />

      {/* Face */}
      <Image
        src={imageConfig.face}
        alt="Face"
        layout="fullWidth"
        className="absolute inset-0 m-auto w-[78%] transform-[translate(calc(var(--parallax-x)*7px),calc(var(--parallax-y)*7px))]
        object-contain
        transition-transform duration-75"
      />

      {/* Glasses */}
      {imageConfig.glasses && (
        <Image
          src={imageConfig.glasses}
          alt="Glasses"
          layout="fullWidth"
          className="absolute inset-0 m-auto mt-[22%] w-[58%] transform-[translate(calc(var(--parallax-x)*10px),calc(var(--parallax-y)*10px))]
          object-contain
          transition-transform duration-75"
        />
      )}
    </div>
  );
}
