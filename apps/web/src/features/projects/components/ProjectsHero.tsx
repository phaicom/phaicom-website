import { getProjectStats } from "@/features/projects/lib/projects";
import { PageHero } from "@/shared/components";

const numberFormatter = new Intl.NumberFormat("en-US");

export default function ProjectsHero() {
  const stats = getProjectStats();

  const heroStats = [
    { label: "Case studies", value: numberFormatter.format(stats.totalCount) },
    { label: "Featured builds", value: numberFormatter.format(stats.featuredCount) },
    { label: "Domains", value: numberFormatter.format(stats.categoryCount) },
    { label: "Timeline", value: stats.timelineLabel },
  ];

  return (
    <PageHero
      eyebrow="Projects"
      title="Product and platform work, presented without the noise."
      description="A concise set of case studies covering frontend delivery, internal systems, backend services, and full-stack product work."
      stats={heroStats}
    />
  );
}
