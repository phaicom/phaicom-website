import type { AnchorHTMLAttributes } from "react";

import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Markdown } from "./Markdown";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }) => (
    <a {...props}>{children}</a>
  ),
}));

describe("Markdown", () => {
  it("renders markdown content while skipping raw HTML", () => {
    render(
      <Markdown
        content={`# Secure Heading

<script>alert("xss")</script>

**Safe content**

[External link](https://example.com)`}
      />,
    );

    expect(screen.getByRole("heading", { name: "Secure Heading" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Secure Heading" })).toHaveAttribute(
      "href",
      "#secure-heading",
    );
    expect(screen.getByText("Safe content")).toBeInTheDocument();
    expect(screen.queryByText('alert("xss")')).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "External link" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  it("renders markdown images as regular content", () => {
    render(
      <Markdown
        content={`![First screenshot](/images/projects/first.webp)

![Second screenshot](/images/projects/second.webp)`}
      />,
    );

    expect(screen.getByAltText("First screenshot")).toBeInTheDocument();
    expect(screen.getByAltText("Second screenshot")).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
