import { createFileRoute } from "@tanstack/react-router";

import AboutPage from "@/features/about/AboutPage";

export const Route = createFileRoute("/(public)/about")({
  head: () => ({
    meta: [
      { title: "Resume | Reawpai Chunsoi - Senior Full-Stack Web Developer" },
      {
        name: "description",
        content:
          "Professional experience, technical depth, and project impact of Reawpai Chunsoi, a Senior Full-Stack Web Developer with hands-on delivery across React, Vue, Node.js, and Golang.",
      },
    ],
  }),
  component: AboutPage,
});
