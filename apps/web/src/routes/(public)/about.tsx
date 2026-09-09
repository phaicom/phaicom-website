import { createFileRoute } from "@tanstack/react-router";

import AboutPage from "@/features/about/AboutPage";

export const Route = createFileRoute("/(public)/about")({
  head: () => ({
    meta: [
      { title: "Experience | Reawpai Chunsoi - Senior Full-Stack Developer" },
      {
        name: "description",
        content:
          "Nine-plus years of professional experience across React, Next.js, Vue, Nuxt, Node.js, architecture, performance, localization, and CI/CD.",
      },
    ],
  }),
  component: AboutPage,
});
