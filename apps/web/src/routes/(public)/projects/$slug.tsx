import { createFileRoute } from "@tanstack/react-router";

import { siteConfig } from "@/config/site";
import ProjectDetailPage from "@/features/projects/ProjectDetailPage";

export const Route = createFileRoute("/(public)/projects/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} | Project Case Study - Reawpai Chunsoi` },
      {
        name: "description",
        content: `Technical case study of ${params.slug}. Architecture decisions, performance optimization, and scalable system design.`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `${siteConfig.domain}/posts/${params.slug}`,
      },
    ],
  }),
  component: ProjectDetailPage,
});
