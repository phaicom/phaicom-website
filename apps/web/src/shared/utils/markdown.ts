import { toString } from "hast-util-to-string";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export type MarkdownHeading = {
  id: string;
  text: string;
  level: number;
};

export type MarkdownResult = {
  markup: string;
  headings: Array<MarkdownHeading>;
};

type HastNode = Parameters<typeof toString>[0];

type HeadingElement = {
  tagName: string;
  properties: {
    id?: unknown;
  };
};

export function renderMarkdown(content: string): MarkdownResult {
  const headings: Array<MarkdownHeading> = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["anchor"] },
    })
    .use(() => (tree) => {
      visit(tree, "element", (node: HeadingElement) => {
        if (node.tagName && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)) {
          headings.push({
            id: typeof node.properties.id === "string" ? node.properties.id : "",
            text: toString(node as HastNode),
            level: Number(node.tagName.charAt(1)),
          });
        }
      });
    })
    .use(rehypeStringify);

  const result = processor.processSync(content);

  return {
    markup: String(result),
    headings,
  };
}
