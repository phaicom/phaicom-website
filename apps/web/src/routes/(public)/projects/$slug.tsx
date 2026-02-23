import { createFileRoute, notFound } from "@tanstack/react-router";
import { allProjects } from "content-collections";

import { siteConfig } from "@/config/site";
import ProjectDetailPage from "@/features/projects/ProjectDetailPage";

export const Route = createFileRoute("/(public)/projects/$slug")({
  loader: ({ params }) => {
    const project = allProjects.find((p) => p.slug === params.slug);

    if (!project) {
      throw notFound();
    }

    return { project };
  },

  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `${params.slug} | Project - Reawpai Chunsoi` }],
      };
    }

    return {
      meta: [
        {
          title: `${loaderData.project.title} | Project Case Study - Reawpai Chunsoi`,
        },
        {
          name: "description",
          content: loaderData.project.description,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `${siteConfig.domain}/projects/${loaderData.project.slug}`,
        },
      ],
    };
  },

  component: ProjectDetailPage,
});
