import { render, screen } from "@testing-library/react";

import HomeHero from "./HomeHero";

describe("HomeHero", () => {
  it("renders the core positioning copy and stats", () => {
    render(<HomeHero />);

    expect(
      screen.getByRole("heading", {
        name: /senior full-stack web developer/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Bangkok, Thailand")).toBeInTheDocument();
    expect(screen.getByText("7+")).toBeInTheDocument();
    expect(screen.getByText("Vue + React + JS")).toBeInTheDocument();
    expect(screen.getByText(/performance-aware frontend experiences/i)).toBeInTheDocument();
  });
});
