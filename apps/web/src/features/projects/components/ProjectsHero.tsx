import { allProjects } from "content-collections";

import { PageHero } from "@/shared/components";

const numberFormatter = new Intl.NumberFormat("en-US");

export default function ProjectsHero() {
  const featuredCount = allProjects.filter((project) => project.featured).length;
  const categories = new Set(allProjects.map((project) => project.category));
  const years = allProjects
    .map((project) => new Date(project.startDate).getFullYear())
    .filter((year) => !Number.isNaN(year));
  const earliestYear = years.length ? Math.min(...years) : undefined;
  const latestYear = years.length ? Math.max(...years) : undefined;
  const timelineLabel = earliestYear && latestYear ? `${earliestYear}-${latestYear}` : "Ongoing";

  const stats = [
    { label: "Case studies", value: numberFormatter.format(allProjects.length) },
    { label: "Featured builds", value: numberFormatter.format(featuredCount) },
    { label: "Domains", value: numberFormatter.format(categories.size) },
    { label: "Timeline", value: timelineLabel },
  ];

  return (
    <PageHero
      eyebrow="Projects"
      title="Product and platform work, presented without the noise."
      description="A concise set of case studies covering frontend delivery, internal systems, backend services, and full-stack product work."
      stats={stats}
    />
  );
}
