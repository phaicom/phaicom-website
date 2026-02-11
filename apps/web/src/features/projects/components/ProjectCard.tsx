import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import type { Project } from "../types";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <Link to="/projects/$slug" params={{ slug: project.id }} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group overflow-hidden rounded-xl border border-gray-800 bg-[#1a1a1a]"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5">
          <p className="mb-2 text-sm text-yellow-500">{project.category}</p>
          <h3 className="text-lg">{project.title}</h3>
        </div>
      </motion.div>
    </Link>
  );
}
