import { allProjects } from "content-collections";

import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  // Sort: featured first, then by startDate (newest first)
  const sortedProjects = [...allProjects].sort((a, b) => {
    // Featured projects always come first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Within same featured status, sort by startDate (newest first)
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedProjects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
