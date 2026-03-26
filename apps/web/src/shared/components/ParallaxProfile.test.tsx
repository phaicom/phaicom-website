import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { ParallaxProfile } from "./ParallaxProfile";

vi.mock("@tanstack/react-router", () => ({
  useLocation: () => ({ pathname: "/" }),
}));

vi.mock("@/shared/components/Image", () => ({
  Image: ({ alt, className, src }: { alt: string; className?: string; src: string }) => (
    <img alt={alt} className={className} src={src} />
  ),
}));

function mockMatchMedia(matches: boolean) {
  const addEventListener = vi.fn();
  const removeEventListener = vi.fn();

  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    writable: true,
    value: vi.fn().mockReturnValue({
      matches,
      media: "(prefers-reduced-motion: reduce)",
      addEventListener,
      removeEventListener,
    }),
  });
}

describe("ParallaxProfile", () => {
  it("updates the parallax variables from local pointer movement and resets on leave", () => {
    mockMatchMedia(false);

    render(<ParallaxProfile />);

    const profile = screen.getByRole("img", { name: /illustrated profile body/i }).parentElement;

    expect(profile).not.toBeNull();

    vi.spyOn(profile!, "getBoundingClientRect").mockReturnValue({
      bottom: 200,
      height: 200,
      left: 0,
      right: 200,
      top: 0,
      width: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });

    fireEvent.pointerMove(profile!, { clientX: 150, clientY: 50 });

    expect(profile).toHaveStyle({
      "--parallax-x": "0.25",
      "--parallax-y": "-0.25",
    });

    fireEvent.pointerLeave(profile!);

    expect(profile).toHaveStyle({
      "--parallax-x": "0",
      "--parallax-y": "0",
    });
  });

  it("keeps the profile static when reduced motion is preferred", () => {
    mockMatchMedia(true);

    render(<ParallaxProfile />);

    const profile = screen.getByRole("img", { name: /illustrated profile body/i }).parentElement;
    const bodyImage = screen.getByRole("img", { name: /illustrated profile body/i });

    expect(profile).not.toBeNull();

    vi.spyOn(profile!, "getBoundingClientRect").mockReturnValue({
      bottom: 200,
      height: 200,
      left: 0,
      right: 200,
      top: 0,
      width: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });

    fireEvent.pointerMove(profile!, { clientX: 180, clientY: 20 });

    expect(profile).toHaveStyle({
      "--parallax-x": "0",
      "--parallax-y": "0",
    });
    expect(bodyImage.className).not.toContain("transition-transform");
  });
});
