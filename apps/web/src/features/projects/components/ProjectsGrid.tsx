import { motion } from "motion/react";

import { getSortedProjects } from "@/features/projects/lib/projects";
import { SectionCard } from "@/shared/components";

import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const sortedProjects = getSortedProjects();
  const categories = [...new Set(sortedProjects.map((project) => project.category))];

  return (
    <div className="space-y-8">
      <SectionCard
        title="Selected work"
        description="Case studies are stacked as larger mobile cards with quicker scan points and cleaner tap targets."
      >
        <div className="max-w-2xl">
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="rounded-full border border-border bg-background/70 px-3 py-1 text-sm text-muted-foreground"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
