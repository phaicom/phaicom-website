import MdiCloud from "~icons/mdi/cloud";
import MdiLightningBolt from "~icons/mdi/lightning-bolt";
import MdiLinkVariant from "~icons/mdi/link-variant";
import MdiPuzzle from "~icons/mdi/puzzle";

import type { Service } from "../types";

export const services: Service[] = [
  {
    icon: MdiLightningBolt,
    title: "Full Stack Web Development",
    description:
      "Building scalable web applications using React, Vue, Next.js, and backend services with Node.js or Golang.",
  },
  {
    icon: MdiPuzzle,
    title: "Frontend Engineering",
    description:
      "Crafting performant and maintainable interfaces with Vue ecosystem, React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: MdiLinkVariant,
    title: "Backend & API Development",
    description:
      "Designing REST APIs and service layers with Node.js, Express/Fastify/NestJS, and Go for performance-critical workflows.",
  },
  {
    icon: MdiCloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications with AWS, CI/CD pipelines, containerization, and agile workflows.",
  },
];
