import { allProjects } from "content-collections";
import { motion } from "motion/react";

import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const sortedProjects = [...allProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });
  const categories = [...new Set(sortedProjects.map((project) => project.category))];

  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
            Selected work
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
