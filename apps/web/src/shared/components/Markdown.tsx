import type { ReactNode } from "react";
import type { Components } from "react-markdown";

import { Link } from "@tanstack/react-router";
import { isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";
import { Image } from "@/shared/components/Image";

type MarkdownProps = {
  content: string;
  className?: string;
};

type MarkdownNode = {
  type?: string;
  value?: string;
  children?: MarkdownNode[];
};

const projectImageDimensions: Record<string, { width: number; height: number }> = {
  "backoffice-1.webp": { width: 1600, height: 900 },
  "backoffice-2.webp": { width: 1067, height: 446 },
  "backoffice-3.webp": { width: 1067, height: 601 },
  "backoffice-4.webp": { width: 1068, height: 601 },
  "hfm-1.webp": { width: 1236, height: 705 },
  "hfm-2.webp": { width: 1236, height: 705 },
  "hfm-3.webp": { width: 1236, height: 705 },
  "hfm-4.webp": { width: 1236, height: 705 },
  "hjem-1.webp": { width: 1236, height: 705 },
  "hjem-2.webp": { width: 1236, height: 705 },
  "hjem-3.webp": { width: 1236, height: 705 },
  "hjem-4.webp": { width: 1236, height: 705 },
  "picross-1.webp": { width: 390, height: 799 },
  "picross-2.webp": { width: 388, height: 794 },
  "picross-3.webp": { width: 385, height: 796 },
  "picross-g-1.gif": { width: 240, height: 426 },
  "skywalk-1.webp": { width: 1023, height: 575 },
  "skywalk-2.webp": { width: 1018, height: 574 },
  "skywalk-3.webp": { width: 1017, height: 572 },
  "skywalk-4.webp": { width: 1013, height: 571 },
  "the1-1.webp": { width: 1236, height: 705 },
  "the1-2.webp": { width: 1236, height: 705 },
  "the1-3.webp": { width: 1236, height: 705 },
  "the1-4.webp": { width: 1236, height: 705 },
  "tribe-1.webp": { width: 1600, height: 900 },
  "tribe-2.webp": { width: 1600, height: 900 },
  "tribe-3.webp": { width: 1600, height: 900 },
  "tribe-4.webp": { width: 1600, height: 900 },
  "tribe-5.webp": { width: 1600, height: 900 },
  "tribe-6.webp": { width: 755, height: 589 },
};

function getProjectImageDimensions(src: string) {
  const filename = src.split("/").at(-1) ?? "";
  return projectImageDimensions[filename] ?? { width: 1200, height: 675 };
}

function getTextContent(node: MarkdownNode): string {
  if (typeof node.value === "string") {
    return node.value;
  }

  if (Array.isArray(node.children)) {
    return node.children.map(getTextContent).join("");
  }

  return "";
}

function slugifyHeading(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getCodeTextContent(children: ReactNode): string | null {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    const parts = children
      .map(getCodeTextContent)
      .filter((value): value is string => value !== null);

    return parts.length > 0 ? parts.join("") : null;
  }

  if (isValidElement<{ children?: ReactNode }>(children)) {
    return getCodeTextContent(children.props.children);
  }

  return null;
}

export function Markdown({ content, className }: MarkdownProps) {
  const components: Components = {
    a: ({ href, children, ...props }) => {
      if (href?.startsWith("/")) {
        return (
          <Link to={href} {...props}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target={href?.startsWith("#") ? undefined : "_blank"}
          rel={href?.startsWith("#") ? undefined : "noopener noreferrer"}
          {...props}
        >
          {children}
        </a>
      );
    },
    h1: ({ node, children, ...props }) => {
      const id = slugifyHeading(getTextContent(node as MarkdownNode));
      return (
        <h1 id={id} {...props}>
          <a href={`#${id}`} className="anchor">
            {children}
          </a>
        </h1>
      );
    },
    h2: ({ node, children, ...props }) => {
      const id = slugifyHeading(getTextContent(node as MarkdownNode));
      return (
        <h2 id={id} {...props}>
          <a href={`#${id}`} className="anchor">
            {children}
          </a>
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => {
      const id = slugifyHeading(getTextContent(node as MarkdownNode));
      return (
        <h3 id={id} {...props}>
          <a href={`#${id}`} className="anchor">
            {children}
          </a>
        </h3>
      );
    },
    img: ({ src, alt }) => {
      if (!src) return null;

      const dimensions = getProjectImageDimensions(src);
      const isPortrait = dimensions.height > dimensions.width;

      return (
        <Image
          src={src}
          alt={alt || ""}
          width={dimensions.width}
          height={dimensions.height}
          layout="constrained"
          loading="lazy"
          className={cn("project-image", isPortrait && "project-image--portrait")}
        />
      );
    },
    code: ({ className: codeClassName, children, ...props }) => {
      if (!codeClassName) {
        return (
          <code className={codeClassName} {...props}>
            {children}
          </code>
        );
      }

      const isMermaid = codeClassName.includes("language-mermaid");
      const codeText = getCodeTextContent(children)?.replace(/\n$/, "");

      return (
        <code className={codeClassName} {...props}>
          {isMermaid && codeText ? codeText : children}
        </code>
      );
    },
  };

  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
