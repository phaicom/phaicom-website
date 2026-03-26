import type { AnchorHTMLAttributes } from "react";

import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { searchProjects } from "@/features/projects/lib/projects";

import ProjectsGrid from "./ProjectsGrid";

const { mockProjects } = vi.hoisted(() => ({
  mockProjects: [
    {
      slug: "alpha-dashboard",
      title: "Alpha Dashboard",
      subtitle: "Trading analytics workspace",
      category: "Fintech",
      techStack: ["React", "TypeScript", "TanStack Router"],
      featured: true,
      startDate: "2025-01-01",
      description: "Portfolio analytics for trading teams.",
      excerpt: "React dashboard for regional trading insights.",
    },
    {
      slug: "retail-ops-suite",
      title: "Retail Ops Suite",
      subtitle: "Back-office tools for store operations",
      category: "Retail",
      techStack: ["Vue", "TypeScript", "Node.js"],
      featured: false,
      startDate: "2024-02-01",
      description: "Operations tooling for merchandising and service teams.",
      excerpt: "Store operations platform with inventory and service workflows.",
    },
    {
      slug: "orbit-api",
      title: "Orbit API",
      subtitle: "Backend services for partner integrations",
      category: "Platform",
      techStack: ["Go", "PostgreSQL", "Kafka"],
      featured: false,
      startDate: "2023-06-01",
      description: "Integration services for partner data exchange.",
      excerpt: "Event-driven backend services for partner integrations.",
    },
  ],
}));

vi.mock("content-collections", () => ({
  allProjects: mockProjects,
}));

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }) => (
    <a {...props}>{children}</a>
  ),
}));

vi.mock("./ProjectCard", () => ({
  default: ({
    project,
  }: {
    project: {
      title: string;
      category: string;
      techStack: string[];
    };
  }) => (
    <article>
      <h3>{project.title}</h3>
      <p>{project.category}</p>
      <p>{project.techStack.join(", ")}</p>
    </article>
  ),
}));

describe("searchProjects", () => {
  it("matches title, category, and technology keywords case-insensitively", () => {
    expect(searchProjects(mockProjects, "alpha")).toHaveLength(1);
    expect(searchProjects(mockProjects, "retail")).toHaveLength(1);
    expect(searchProjects(mockProjects, "postgresql")).toHaveLength(1);
    expect(searchProjects(mockProjects, "tanstack")).toHaveLength(1);
  });
});

describe("ProjectsGrid", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("debounces search input before updating the rendered results", () => {
    render(<ProjectsGrid />);

    const input = screen.getByRole("searchbox", { name: /search projects/i });
    expect(screen.getByText("3 projects matched")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Retail" } });

    expect(screen.getByText("3 projects matched")).toBeInTheDocument();
    expect(screen.getByText("Alpha Dashboard")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(199);
    });

    expect(screen.getByText("3 projects matched")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(screen.getByText("1 project matched")).toBeInTheDocument();
    expect(screen.getByText("Retail Ops Suite")).toBeInTheDocument();
    expect(screen.queryByText("Alpha Dashboard")).not.toBeInTheDocument();
  });

  it("shows an empty state when no case studies match the debounced query", () => {
    render(<ProjectsGrid />);

    fireEvent.change(screen.getByRole("searchbox", { name: /search projects/i }), {
      target: { value: "Rust" },
    });

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.getByText("0 projects matched")).toBeInTheDocument();
    expect(
      screen.getByText(
        /No case studies matched "Rust"\. Try a project name, domain, or technology\./i,
      ),
    ).toBeInTheDocument();
  });
});
