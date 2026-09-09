import { createFileRoute } from "@tanstack/react-router";

import ContactPage from "@/features/contact/ContactPage";

export const Route = createFileRoute("/(public)/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact | Reawpai Chunsoi - Senior Full Stack Developer",
      },
      {
        name: "description",
        content:
          "Contact Reawpai Chunsoi, a Senior Full Stack Developer with 9+ years of production web platform experience.",
      },
    ],
  }),
  component: ContactPage,
});
