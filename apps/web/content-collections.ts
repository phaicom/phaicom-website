import { defineCollection, defineConfig } from "@content-collections/core";
import matter from "gray-matter";
import { z } from "zod";

function extractFrontMatter(content: string) {
  const { data, content: body, excerpt } = matter(content, { excerpt: true });
  return { data, body, excerpt: excerpt || "" };
}

const optionalUrl = z.preprocess((value) => (value === "" ? undefined : value), z.url().optional());

const projects = defineCollection({
  name: "projects",
  directory: "./src/features/projects/content",
  include: "**/*.md",

  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    category: z.string(),
    role: z.string().optional(),
    impact: z.string().optional(),
    techStack: z.string().array(),
    featured: z.boolean(),
    startDate: z.string(),
    endDate: z.string().optional(),
    websiteUrl: optionalUrl,
    githubUrl: optionalUrl,
    content: z.string(),
  }),

  transform: ({ content, ...project }) => {
    const frontMatter = extractFrontMatter(content);

    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const headerImage = headerImageMatch ? headerImageMatch[2] : undefined;
    const bodyWithoutHeaderImage = headerImageMatch
      ? frontMatter.body.replace(headerImageMatch[0], "").replace(/\n{3,}/, "\n\n")
      : frontMatter.body;

    return {
      ...project,
      slug: project._meta.path,
      excerpt: frontMatter.excerpt,
      description: frontMatter.data.description,
      headerImage,
      content: bodyWithoutHeaderImage,
    };
  },
});

export default defineConfig({
  content: [projects],
});
