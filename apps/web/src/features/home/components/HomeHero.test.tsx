import { render, screen } from "@testing-library/react";

import HomeHero from "./HomeHero";

describe("HomeHero", () => {
  it("renders the core positioning copy and stats", () => {
    render(<HomeHero />);

    expect(
      screen.getByRole("heading", {
        name: /senior full stack developer/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Bangkok, Thailand")).toBeInTheDocument();
    expect(screen.getByText("9+")).toBeInTheDocument();
    expect(screen.getByText("React + Vue + TS")).toBeInTheDocument();
    expect(screen.getByText(/internationalized production platforms/i)).toBeInTheDocument();
  });
});
