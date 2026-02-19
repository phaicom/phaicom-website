import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "backmarket-clone",
    title: "BackMarket-Inspired E-Commerce Platform",
    category: "Full Stack",
    image: "https://placehold.co/600x400",
    description:
      "A production-grade e-commerce platform inspired by Back Market, built with a microservices architecture. Features product catalog, seller management, order processing, and full-text search.",
    techStack: ["Nuxt 4", "Vue 3", "NestJS", "Golang", "PostgreSQL", "Meilisearch", "Docker"],
  },
  {
    id: "go-ecom-api",
    title: "Go E-Commerce API",
    category: "Backend",
    image: "https://placehold.co/600x400",
    description:
      "High-performance REST API built with Gin, PostgreSQL, and sqlc. Implements JWT authentication, order workflows, and scalable service design following clean architecture principles.",
    techStack: ["Golang", "Gin", "PostgreSQL", "sqlc", "JWT", "Docker"],
  },
  {
    id: "search-microservice",
    title: "Search Microservice",
    category: "Backend",
    image: "https://placehold.co/600x400",
    description:
      "Dedicated search service written in Go using Meilisearch. Provides high-speed full-text product search and indexing within a distributed microservices ecosystem.",
    techStack: ["Golang", "Fiber", "Meilisearch", "REST API", "Microservices"],
  },
  {
    id: "portfolio-2026",
    title: "Personal Portfolio (2026)",
    category: "Frontend",
    image: "https://placehold.co/600x400",
    description:
      "Modern developer portfolio built with TanStack Start, React, and Tailwind CSS. Focused on performance, SEO optimization, and clean UI system design.",
    techStack: ["React", "TanStack Start", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
];
