import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["TypeScript", "JavaScript", "SQL", "Go"] },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vue 3",
      "Nuxt",
      "Tailwind CSS",
      "Material UI",
      "Vuetify",
      "CSS / SCSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Fastify", "REST APIs", "GraphQL", "gRPC"],
  },
  { category: "Data", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"] },
  { category: "Testing", skills: ["Vitest", "Jest", "Testing Library", "Cypress"] },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "ECS",
      "S3",
      "CloudFront",
      "RDS",
      "Docker",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Monorepos",
      "Microservices",
      "BFF",
      "SSR / ISR / SSG",
      "CMS-driven development",
      "Localization / i18n",
      "SEO",
      "Performance optimization",
    ],
  },
];
