import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ecommerce-app",
    title: "E-Commerce Platform",
    category: "Full Stack",
    image: "https://placehold.co/600x400",
    description: "A scalable e-commerce system with microservices architecture.",
    techStack: ["React", "Go", "PostgreSQL"],
  },
  {
    id: "portfolio-site",
    title: "Developer Portfolio",
    category: "Frontend",
    image: "https://placehold.co/600x400",
    description: "Modern portfolio built with React and Tailwind.",
    techStack: ["React", "Tailwind"],
  },
];
