import type { ReactNode } from "react";
import type { Components } from "react-markdown";

import { Link } from "@tanstack/react-router";
import { isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

      return (
        <Image
          src={src}
          alt={alt || ""}
          width={800}
          height={600}
          layout="constrained"
          loading="lazy"
          className="rounded-lg shadow-md"
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
