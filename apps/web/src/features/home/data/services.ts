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
      "Building scalable web applications using Vue, Nuxt, React, Next.js, and Node.js with modern architecture.",
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
      "Designing RESTful APIs and microservices using client-preferred frameworks such as Fastify, Express or NestJS",
  },
  {
    icon: MdiCloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications with AWS, CI/CD pipelines, containerization, and agile workflows.",
  },
];
