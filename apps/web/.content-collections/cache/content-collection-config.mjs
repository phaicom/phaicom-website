// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import matter from "gray-matter";
import { z } from "zod";
function extractFrontMatter(content) {
  const { data, content: body, excerpt } = matter(content, { excerpt: true });
  return { data, body, excerpt: excerpt || "" };
}
var projects = defineCollection({
  name: "projects",
  directory: "./src/features/projects/content",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    techStack: z.string().array(),
    featured: z.boolean(),
    content: z.string()
  }),
  transform: ({ content, ...project }) => {
    const frontMatter = extractFrontMatter(content);
    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const headerImage = headerImageMatch ? headerImageMatch[2] : void 0;
    return {
      ...project,
      slug: project._meta.path,
      excerpt: frontMatter.excerpt,
      description: frontMatter.data.description,
      headerImage,
      content: frontMatter.body
    };
  }
});
var content_collections_default = defineConfig({
  content: [projects]
});
export {
  content_collections_default as default
};
