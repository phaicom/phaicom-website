import { createFileRoute } from "@tanstack/react-router";

import AboutPage from "@/features/about/AboutPage";

export const Route = createFileRoute("/(public)/about")({
  head: () => ({
    meta: [
      { title: "About | Reawpai Chunsoi - Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Professional experience, technical expertise, and career highlights of Reawpai Chunsoi. Senior Full Stack Engineer with experience in React, Vue, Golang, and scalable system architecture.",
      },
    ],
  }),
  component: AboutPage,
});
