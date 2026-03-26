import type { ReactNode } from "react";
import type { Components } from "react-markdown";
import type { SlideImage } from "yet-another-react-lightbox";

import { Link } from "@tanstack/react-router";
import { isValidElement, lazy, Suspense, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Image } from "@/shared/components/Image";

type MarkdownProps = {
  content: string;
  className?: string;
  enableImageLightbox?: boolean;
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

function extractMarkdownImages(content: string): SlideImage[] {
  const imagePattern = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;

  return Array.from(content.matchAll(imagePattern), ([, alt, src]) => ({
    alt,
    src,
  }));
}

function getSlideIndex(slides: SlideImage[], src: string, alt?: string) {
  const exactMatchIndex = slides.findIndex(
    (slide) => slide.src === src && slide.alt === (alt || ""),
  );

  if (exactMatchIndex >= 0) {
    return exactMatchIndex;
  }

  return slides.findIndex((slide) => slide.src === src);
}

// Keep the lightbox UX, but load the package only after image intent so it stays out of the
// initial markdown/client bundle for visitors who never open a gallery image.
const loadMarkdownLightbox = () => import("./MarkdownLightbox");
const MarkdownLightbox = lazy(loadMarkdownLightbox);

export function Markdown({ content, className, enableImageLightbox = false }: MarkdownProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [hasRequestedLightbox, setHasRequestedLightbox] = useState(false);
  const slides = useMemo(() => extractMarkdownImages(content), [content]);
  const isLightboxOpen = lightboxIndex >= 0;

  function prepareLightbox() {
    if (!enableImageLightbox || slides.length === 0) {
      return;
    }

    void loadMarkdownLightbox();
  }

  function openLightbox(index: number) {
    setHasRequestedLightbox(true);
    setLightboxIndex(index);
    prepareLightbox();
  }

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

      if (enableImageLightbox) {
        const currentIndex = getSlideIndex(slides, src, alt);

        if (currentIndex < 0) {
          return null;
        }

        return (
          <button
            type="button"
            onClick={() => openLightbox(currentIndex)}
            onPointerEnter={prepareLightbox}
            onFocus={prepareLightbox}
            onTouchStart={prepareLightbox}
            className="group block w-full cursor-zoom-in rounded-lg text-left"
            aria-label={`Open image${alt ? `: ${alt}` : ""}`}
          >
            <Image
              src={src}
              alt={alt || ""}
              width={800}
              height={600}
              layout="constrained"
              loading="lazy"
              className="rounded-lg shadow-md transition-transform duration-200 group-hover:scale-[1.01]"
            />
          </button>
        );
      }

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
      {enableImageLightbox && slides.length > 0 && hasRequestedLightbox && (
        <Suspense fallback={null}>
          <MarkdownLightbox
            open={isLightboxOpen}
            onClose={() => setLightboxIndex(-1)}
            index={isLightboxOpen ? lightboxIndex : 0}
            slides={slides}
          />
        </Suspense>
      )}
    </div>
  );
}
