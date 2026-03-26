import { useLocation } from "@tanstack/react-router";
import { type CSSProperties, type PointerEvent, useEffect, useRef, useState } from "react";

import { Image } from "@/shared/components/Image";

type ImageConfig = {
  body: string;
  face: string;
  glasses?: string;
};

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

const PARALLAX_BOUNDS = { min: -1, max: 1 };

function clampParallax(value: number) {
  return Math.max(PARALLAX_BOUNDS.min, Math.min(PARALLAX_BOUNDS.max, value));
}

export function ParallaxProfile() {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const imageConfig = routeImageMap[location.pathname] ?? defaultConfig;

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const updateParallax = (x: number, y: number) => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    element.style.setProperty("--parallax-x", `${x}`);
    element.style.setProperty("--parallax-y", `${y}`);
  };

  const resetParallax = () => {
    updateParallax(0, 0);
  };

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    resetParallax();
  }, [prefersReducedMotion]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) {
      return;
    }

    const element = containerRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normalizedX = clampParallax((event.clientX - centerX) / rect.width);
    const normalizedY = clampParallax((event.clientY - centerY) / rect.height);

    updateParallax(normalizedX, normalizedY);
  };

  return (
    <div
      ref={containerRef}
      onPointerLeave={resetParallax}
      onPointerMove={handlePointerMove}
      className="
        relative mx-auto aspect-square w-full max-w-[200px]
        overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10
        ring-1 ring-border/50 transition-all duration-300 select-none
        hover:shadow-lg hover:shadow-primary/5 hover:ring-primary/30
      "
      style={
        {
          "--parallax-x": 0,
          "--parallax-y": 0,
        } as CSSProperties
      }
    >
      <Image
        src={imageConfig.body}
        alt="Illustrated profile body"
        layout="fullWidth"
        className={`absolute inset-0 [transform:translate(calc(var(--parallax-x)*4px),calc(var(--parallax-y)*4px))] object-contain ${prefersReducedMotion ? "" : "transition-transform duration-75"}`}
      />

      <Image
        src={imageConfig.face}
        alt="Illustrated profile face"
        layout="fullWidth"
        className={`absolute inset-0 m-auto w-[78%] [transform:translate(calc(var(--parallax-x)*7px),calc(var(--parallax-y)*7px))] object-contain ${prefersReducedMotion ? "" : "transition-transform duration-75"}`}
      />

      {imageConfig.glasses ? (
        <Image
          src={imageConfig.glasses}
          alt="Illustrated profile glasses"
          layout="fullWidth"
          className={`absolute inset-0 m-auto mt-[22%] w-[58%] [transform:translate(calc(var(--parallax-x)*10px),calc(var(--parallax-y)*10px))] object-contain ${prefersReducedMotion ? "" : "transition-transform duration-75"}`}
        />
      ) : null}
    </div>
  );
}
