import { createFileRoute } from "@tanstack/react-router";

import ContactPage from "@/features/contact/ContactPage";

export const Route = createFileRoute("/(public)/contact")({
  head: () => ({
    meta: [
      {
        title: `Contact | Reawpai Chunsoi - Senior Full Stack Engineer`,
      },
      {
        name: "description",
        content: `Get in touch with Reawpai Chunsoi for full stack engineering opportunities, consulting, or collaboration on scalable web applications and distributed systems.`,
      },
    ],
  }),
  component: ContactPage,
});
