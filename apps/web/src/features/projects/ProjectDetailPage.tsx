import { Route } from "@/routes/(public)/projects/$slug";
import { Markdown } from "@/shared/components/Markdown";

export default function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-8 border-b border-gray-800 pb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
            {project.category}
          </span>

          {project.featured && (
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
              Featured
            </span>
          )}
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight">{project.title}</h1>

        <p className="text-lg text-gray-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="rounded-lg border border-gray-800 bg-[#1a1a1a] px-3 py-1 text-sm text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Markdown */}
      <Markdown content={project.content} />
    </article>
  );
}
