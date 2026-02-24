import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Image } from "@/shared/components/Image";

type Project = {
  slug: string;
  title: string;
  category: string;
  techStack: string[];
  featured: boolean;
  headerImage?: string;
  description?: string;
};

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          },
          y: {
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          },
        }}
        className="group overflow-hidden rounded-xl border border-border bg-card will-change-transform"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.headerImage || "https://placehold.co/600x400"}
            alt={project.title}
            layout="fixed"
            height={200}
            width={300}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        <div className="p-5">
          <p className="mb-2 text-sm text-primary">{project.category}</p>
          <h3 className="text-lg">{project.title}</h3>
        </div>
      </motion.div>
    </Link>
  );
}
