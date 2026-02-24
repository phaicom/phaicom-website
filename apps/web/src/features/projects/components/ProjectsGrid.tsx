import { allProjects } from "content-collections";

import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  // Sort: featured first, then by title
  const sortedProjects = [...allProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedProjects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
