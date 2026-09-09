import { createFileRoute } from "@tanstack/react-router";

import ProjectsPage from "@/features/projects/ProjectsPage";

export const Route = createFileRoute("/(public)/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Reawpai Chunsoi - Senior Full-Stack Case Studies" },
      {
        name: "description",
        content:
          "Full-stack case studies covering production interfaces, backend services, APIs, data, testing, CI/CD, and performance optimization.",
      },
    ],
  }),
  component: ProjectsPage,
});
