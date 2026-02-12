import MdiAws from "~icons/mdi/aws";
import MdiDatabase from "~icons/mdi/database";
import MdiDocker from "~icons/mdi/docker";
import MdiLanguageTypescript from "~icons/mdi/language-typescript";
import MdiLightningBolt from "~icons/mdi/lightning-bolt"; // for Bun
import MdiNodejs from "~icons/mdi/nodejs";
import MdiNuxt from "~icons/mdi/nuxt";
import MdiReact from "~icons/mdi/react";
import MdiRocketLaunch from "~icons/mdi/rocket-launch"; // for Astro
import MdiTailwind from "~icons/mdi/tailwind";
import MdiVuejs from "~icons/mdi/vuejs";

import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "Vue.js", icon: MdiVuejs },
  { name: "Nuxt.js", icon: MdiNuxt },
  { name: "React", icon: MdiReact },
  { name: "Next.js", icon: MdiReact },
  { name: "Astro", icon: MdiRocketLaunch },
  { name: "TypeScript", icon: MdiLanguageTypescript },
  { name: "Tailwind CSS", icon: MdiTailwind },
  { name: "Node.js (Express, Fastify, NestJS)", icon: MdiNodejs },
  { name: "Bun", icon: MdiLightningBolt },
  { name: "SQL & NoSQL Databases", icon: MdiDatabase },
  { name: "Docker", icon: MdiDocker },
  { name: "AWS", icon: MdiAws },
];
