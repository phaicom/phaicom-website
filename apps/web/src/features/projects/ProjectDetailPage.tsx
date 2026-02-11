import { Route } from "@/routes/(public)/projects/$slug";

import { projects } from "./data/projects";

export default function ProjectDetailPage() {
  const { slug } = Route.useParams();

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-4 text-4xl">{project.title}</h1>
      <p className="mb-6 text-gray-400">{project.description}</p>

      <div className="flex flex-wrap gap-3">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-gray-800 bg-[#1a1a1a] px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
