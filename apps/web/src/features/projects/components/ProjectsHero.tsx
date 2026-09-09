import { PageHero } from "@/shared/components";

export default function ProjectsHero() {
  const heroStats = [
    { label: "Page load", value: "55% faster" },
    { label: "Bundle size", value: "40% smaller" },
    { label: "Accessibility", value: "96 / 100" },
    { label: "Deployment", value: "75% less manual" },
  ];

  return (
    <PageHero
      eyebrow="Projects"
      title="Work, decisions, and outcomes."
      description="Case studies from production platforms, internal systems, and full-stack products—focused on my role, the engineering decisions, and the result."
      stats={heroStats}
    />
  );
}
