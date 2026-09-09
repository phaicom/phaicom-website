import type { AnchorHTMLAttributes } from "react";

import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import HomeHero from "./HomeHero";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }) => (
    <a {...props}>{children}</a>
  ),
}));

describe("HomeHero", () => {
  it("renders the core positioning copy and stats", () => {
    render(<HomeHero />);

    expect(
      screen.getByRole("heading", {
        name: /full-stack systems that hold up in production/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Bangkok, Thailand/i)).toBeInTheDocument();
    expect(screen.getByText("9+ years")).toBeInTheDocument();
    expect(screen.getByText("55% faster load")).toBeInTheDocument();
    expect(
      screen.getByText(/backend services, data, and automated deployment/i),
    ).toBeInTheDocument();
  });
});
