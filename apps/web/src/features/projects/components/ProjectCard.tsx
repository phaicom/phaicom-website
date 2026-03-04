import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import MdiStar from "~icons/mdi/star";

import { Image } from "@/shared/components/Image";
import Pill from "@/shared/components/Pill";

type Project = {
  slug: string;
  title: string;
  subtitle?: string;
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
        className={`group overflow-hidden rounded-xl border bg-card will-change-transform ${
          project.featured ? "border-2 border-primary ring-4 ring-primary/30" : "border-border"
        }`}
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

          {/* Darken image slightly for consistent readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Pill variant="featured" className="py-1 text-xs shadow-lg">
                <span className="inline-flex items-center gap-1.5">
                  <MdiStar className="h-3.5 w-3.5 text-primary-foreground" />
                  <span>Featured</span>
                </span>
              </Pill>
            </div>
          )}

          {/* Title and category on image */}
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5">
            <div className="flex min-h-[6.75rem] flex-col justify-end">
              <p className="mb-1.5 text-sm font-semibold tracking-wide text-white/95 uppercase">
                {project.category}
              </p>
              <h3 className="truncate text-xl leading-tight font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-1.5 h-10 overflow-hidden text-sm leading-5 font-medium text-white/90">
                {project.subtitle ?? ""}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
