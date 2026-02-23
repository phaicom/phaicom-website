import { Link } from "@tanstack/react-router";
import parse, {
  domToReact,
  type HTMLReactParserOptions,
  type DOMNode,
  Element,
} from "html-react-parser";
import { useMemo } from "react";

import { Image } from "@/shared/components/Image";
import { renderMarkdown } from "@/shared/utils/markdown";

type MarkdownProps = {
  content: string;
  className?: string;
};

export function Markdown({ content, className }: MarkdownProps) {
  const { markup } = useMemo(() => renderMarkdown(content), [content]);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === "a") {
          const href = domNode.attribs.href;

          if (href?.startsWith("/")) {
            return <Link to={href}>{domToReact(domNode.children as DOMNode[], options)}</Link>;
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
