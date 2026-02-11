import { createFileRoute } from "@tanstack/react-router";

import ProjectsPage from "@/features/projects/ProjectsPage";

export const Route = createFileRoute("/(public)/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Reawpai Chunsoi - Full Stack Applications & System Architecture" },
      {
        name: "description",
        content:
          "Explore full stack projects built with React, Vue, Golang, and modern cloud architecture. Production-grade applications, scalable backend systems, and performance-focused engineering.",
      },
    ],
  }),
  component: ProjectsPage,
});
