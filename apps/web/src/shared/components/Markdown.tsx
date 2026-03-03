import { Link } from "@tanstack/react-router";
import parse, {
  domToReact,
  type HTMLReactParserOptions,
  type DOMNode,
  Element,
} from "html-react-parser";
import mermaid from "mermaid";
import { useEffect, useMemo, useRef, useState } from "react";
import MdiClose from "~icons/mdi/close";

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

type LightboxMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
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
  const [lightboxMedia, setLightboxMedia] = useState<LightboxMedia | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomWidth, setZoomWidth] = useState<number | null>(null);
  const lightboxImageRef = useRef<HTMLImageElement | null>(null);

  const closeLightbox = () => {
    setLightboxMedia(null);
    setIsZoomed(false);
    setZoomWidth(null);
  };

  const toggleImageZoom = () => {
    if (isZoomed) {
      setIsZoomed(false);
      setZoomWidth(null);
      return;
    }

    const currentWidth = lightboxImageRef.current?.getBoundingClientRect().width;
    if (currentWidth) {
      setZoomWidth(Math.round(currentWidth * 2));
    }
    setIsZoomed(true);
  };

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

  useEffect(() => {
    if (!lightboxMedia) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxMedia]);

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
            <button
              type="button"
              onClick={() => setLightboxMedia({ type: "image", src, alt: alt || "" })}
              className="block cursor-zoom-in border-0 bg-transparent p-0 text-left"
              aria-label={`Open image${alt ? `: ${alt}` : ""}`}
            >
              <Image
                src={src}
                alt={alt || ""}
                width={width ? Number(width) : 800}
                height={height ? Number(height) : 600}
                layout="constrained"
                loading="lazy"
                className="rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.01]"
              />
            </button>
          );
        }

        if (domNode.name === "video") {
          const { src } = domNode.attribs;
          if (!src) return null;

          return (
            <button
              type="button"
              onClick={() => setLightboxMedia({ type: "video", src })}
              className="block w-full border-0 bg-transparent p-0 text-left"
              aria-label="Open video"
            >
              <video
                src={src}
                controls
                playsInline
                className="w-full cursor-pointer rounded-lg border border-border shadow-md"
              />
            </button>
          );
        }
      }
    },
  };

  return (
    <>
      <div className={className}>{parse(markup, options)}</div>

      {lightboxMedia && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            aria-label="Close media viewer"
          >
            <MdiClose className="h-5 w-5" />
          </button>

          <div
            className="max-h-[88vh] max-w-[92vw] overflow-auto"
            role="presentation"
            onClick={(event) => event.stopPropagation()}
          >
            {lightboxMedia.type === "image" ? (
              <img
                ref={lightboxImageRef}
                src={lightboxMedia.src}
                alt={lightboxMedia.alt}
                onClick={toggleImageZoom}
                style={
                  isZoomed && zoomWidth
                    ? { width: `${zoomWidth}px`, maxWidth: "none", maxHeight: "none" }
                    : undefined
                }
                className={`rounded-lg object-contain shadow-2xl transition-all duration-200 ${
                  isZoomed ? "h-auto cursor-zoom-out" : "max-h-[88vh] max-w-[92vw] cursor-zoom-in"
                }`}
              />
            ) : (
              <video
                src={lightboxMedia.src}
                controls
                autoPlay
                playsInline
                className="max-h-[88vh] max-w-[92vw] rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
