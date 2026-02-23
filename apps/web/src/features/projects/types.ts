export type ProjectFrontmatter = {
  title: string;
  category: string;
  techStack: string[];
  featured?: boolean;
  description?: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  placeholder: string;
  description: string;
  techStack: string[];
  /** Path to markdown content file (relative to content folder) */
  contentPath?: string;
  /** Whether this project should be featured/highlighted */
  featured?: boolean;
};

export type ProjectWithContent = Project & {
  /** Raw markdown content */
  content: string;
  /** Parsed frontmatter from markdown */
  frontmatter: ProjectFrontmatter;
};
