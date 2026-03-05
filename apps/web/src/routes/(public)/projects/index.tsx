import { createFileRoute } from "@tanstack/react-router";

import ProjectsPage from "@/features/projects/ProjectsPage";

export const Route = createFileRoute("/(public)/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Reawpai Chunsoi - Senior Web Engineering Case Studies" },
      {
        name: "description",
        content:
          "Case studies covering production web delivery, frontend architecture, backend APIs, and performance optimization across React, Vue, Node.js, and Golang projects.",
      },
    ],
  }),
  component: ProjectsPage,
});
