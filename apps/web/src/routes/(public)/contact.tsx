import { createFileRoute } from "@tanstack/react-router";

import ContactPage from "@/features/contact/ContactPage";

export const Route = createFileRoute("/(public)/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact | Reawpai Chunsoi - Senior Full-Stack Web Developer",
      },
      {
        name: "description",
        content:
          "Get in touch with Reawpai Chunsoi for Senior Full-Stack Web Developer roles, product engineering consulting, and full-stack delivery across modern web platforms.",
      },
    ],
  }),
  component: ContactPage,
});
