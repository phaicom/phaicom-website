import type { AnchorHTMLAttributes } from "react";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import { Markdown } from "./Markdown";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }) => (
    <a {...props}>{children}</a>
  ),
}));

vi.mock("yet-another-react-lightbox", () => ({
  default: ({
    open,
    index,
    slides,
  }: {
    open: boolean;
    index: number;
    slides: Array<{ src: string; alt?: string }>;
  }) =>
    open ? <div data-testid="lightbox">{slides[index]?.alt || slides[index]?.src}</div> : null,
}));

vi.mock("yet-another-react-lightbox/plugins/zoom", () => ({
  default: {},
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

  it("opens markdown images in a lightbox when enabled", () => {
    render(
      <Markdown
        enableImageLightbox
        content={`![First screenshot](/images/projects/first.webp)

![Second screenshot](/images/projects/second.webp)`}
      />,
    );

    expect(screen.queryByTestId("lightbox")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open image: Second screenshot" }));

    return waitFor(() => {
      expect(screen.getByTestId("lightbox")).toHaveTextContent("Second screenshot");
    });
  });
});
