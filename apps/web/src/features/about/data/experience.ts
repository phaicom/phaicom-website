import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    period: "Aug 2025 - Present",
    title: "Front-End Developer",
    company: "HFM (HF Markets) · Full-time",
    description:
      "Develop and maintain production campaign, careers, and corporate websites for an international financial-services company.",
    highlights: [
      "Translate Figma designs into responsive, reusable React and Next.js components for mobile, tablet, and desktop.",
      "Implement country- and regulator-specific routing, localization, campaign timing, CTA visibility, redirects, and content.",
      "Integrate CMS content and REST APIs, contribute to shared frontend libraries, and support production quality with CI/CD, Docker, and AWS-hosted services.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "CMS",
      "i18n",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    period: "Mar 2022 - Jul 2025",
    title: "Freelance Full-Stack Developer",
    company: "Independent · Freelance",
    description:
      "Built and delivered full-stack platforms for startups and client products using Next.js, Nuxt, and Node.js APIs.",
    highlights: [
      "Integrated Auth0 OAuth2 SSO, reducing login-related support issues by approximately 40%.",
      "Implemented CI/CD with GitHub Actions, reducing deployment time from approximately 15 to 4 minutes.",
      "Wrote 120+ unit and integration tests with Vitest and Cypress, achieving approximately 92% coverage.",
    ],
    technologies: [
      "Next.js",
      "Nuxt",
      "Node.js",
      "Auth0",
      "OAuth2",
      "GitHub Actions",
      "Vitest",
      "Cypress",
    ],
  },
  {
    period: "Jul 2021 - Mar 2022",
    title: "Front-End Developer",
    company: "Zrch (Hjem.no) · Full-time",
    description:
      "Developed customer-facing marketplace features and internal advertising and administrative tools for Hjem.no.",
    highlights: [
      "Delivered map-based property discovery, search, and dynamic filtering.",
      "Built internal dashboards used by marketplace operators.",
      "Refactored a monolithic frontend into modular micro-frontends, improving page load speed by 55% and reducing bundle size by 40%.",
    ],
    technologies: ["Vue 3", "Vite", "TypeScript", "REST APIs", "Map integration"],
  },
  {
    period: "Oct 2020 - Jun 2021",
    title: "Full-Stack Developer",
    company: "Apar Technologies (The 1 Central Team) · Contract",
    description:
      "Delivered customer experiences and backend-for-frontend services for an enterprise loyalty and customer-engagement platform.",
    highlights: [
      "Developed Nuxt-based customer experiences and Node.js/Express BFF services.",
      "Built campaign and loyalty features that supported promotional program delivery.",
    ],
    technologies: ["Nuxt", "Vuex", "Vuetify", "Node.js", "Express", "BFF", "Docker", "Jenkins"],
  },
  {
    period: "Jan 2019 - Oct 2020",
    title: "Contract / Freelance Developer",
    company: "Client Projects · Contract / Freelance",
    description:
      "Built CRM, back-office, and logistics-booking workflows across Vue frontends and backend integrations.",
    highlights: [
      "Developed production business modules for inventory, sales, and operational tools.",
      "Delivered frontend workflows and supporting backend integrations for client products.",
    ],
    technologies: ["Vue", "JavaScript", "REST APIs", "Backend integrations"],
  },
];
