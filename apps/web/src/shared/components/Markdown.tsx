import { Link } from "@tanstack/react-router";
import parse, {
  domToReact,
  type HTMLReactParserOptions,
  type DOMNode,
  Element,
} from "html-react-parser";
import mermaid from "mermaid";
import { useEffect, useMemo } from "react";

import { Image } from "@/shared/components/Image";
import { renderMarkdown } from "@/shared/utils/markdown";

// Initialize mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
});

type MarkdownProps = {
  content: string;
  className?: string;
};

// Helper to extract text content from a node
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTextContent(node: any): string {
  if (node.data) {
    return node.data;
  }
  if (node.children) {
    return node.children.map(getTextContent).join("");
  }
  return "";
}

export function Markdown({ content, className }: MarkdownProps) {
  const { markup } = useMemo(() => renderMarkdown(content), [content]);

  // Render all mermaid diagrams after markup changes
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      mermaid
        .run({
          querySelector: ".mermaid",
        })
        .catch(console.error);
    }, 0);

    return () => clearTimeout(timer);
  }, [markup]);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === "a") {
          const href = domNode.attribs.href;

          if (href?.startsWith("/")) {
            return <Link to={href}>{domToReact(domNode.children as DOMNode[], options)}</Link>;
          }
        }

        if (domNode.name === "pre") {
          // Check pre element for mermaid code blocks
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const codeElement = domNode.children?.find((child: any) => child.name === "code");
          if (codeElement) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const className = (codeElement as any).attribs?.class || "";
            if (className.includes("language-mermaid")) {
              const codeContent = getTextContent(codeElement);
              return <div className="mermaid">{codeContent}</div>;
            }
          }
        }

        if (domNode.name === "img") {
          const { src, alt, width, height } = domNode.attribs;

          if (!src) return null;

          return (
            <Image
              src={src}
              alt={alt || ""}
              width={width ? Number(width) : 800}
              height={height ? Number(height) : 600}
              layout="constrained"
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          );
        }
      }
    },
  };

  return <div className={className}>{parse(markup, options)}</div>;
}
