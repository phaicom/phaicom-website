import { allProjects } from "content-collections";

type ProjectSummarySource = {
  excerpt?: string;
  description?: string;
  subtitle?: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function getSortedProjects() {
  return [...allProjects].sort((left, right) => {
    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    return getProjectTimestamp(right.startDate) - getProjectTimestamp(left.startDate);
  });
}

export function getProjectStats() {
  const projects = getSortedProjects();
  const featuredCount = projects.filter((project) => project.featured).length;
  const categories = new Set(projects.map((project) => project.category));
  const years = projects
    .map((project) => new Date(project.startDate).getFullYear())
    .filter((year) => !Number.isNaN(year));
  const earliestYear = years.length ? Math.min(...years) : undefined;
  const latestYear = years.length ? Math.max(...years) : undefined;

  return {
    totalCount: projects.length,
    featuredCount,
    categoryCount: categories.size,
    timelineLabel: earliestYear && latestYear ? `${earliestYear}-${latestYear}` : "Ongoing",
  };
}

export function formatProjectDateRange(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : undefined;

  if (Number.isNaN(start.getTime())) {
    return "Date unavailable";
  }

  if (!end || Number.isNaN(end.getTime())) {
    return `${dateFormatter.format(start)} - Present`;
  }

  return `${dateFormatter.format(start)} - ${dateFormatter.format(end)}`;
}

export function getProjectSummary(project: ProjectSummarySource, maxLength = 120) {
  const value = stripMarkdown(project.excerpt ?? project.description ?? project.subtitle ?? "");

  if (value.length <= maxLength) {
    return value;
  }

  const firstSentence = value.match(/^.*?[.!?](\s|$)/)?.[0]?.trim();
  if (firstSentence && firstSentence.length <= maxLength) {
    return firstSentence;
  }

  return `${value.slice(0, maxLength).trimEnd()}...`;
}

export function searchProjects<
  T extends {
    title: string;
    subtitle?: string;
    description?: string;
    excerpt?: string;
    category: string;
    techStack: string[];
  },
>(projects: T[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return projects;
  }

  return projects.filter((project) => {
    const searchIndex = [
      project.title,
      project.subtitle,
      project.description,
      project.excerpt,
      project.category,
      project.techStack.join(" "),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchIndex.includes(normalizedQuery);
  });
}

function getProjectTimestamp(value: string) {
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function stripMarkdown(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*>\s+/gm, "")
    .replace(/[*_~]+/g, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
