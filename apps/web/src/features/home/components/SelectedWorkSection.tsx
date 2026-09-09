import { Link } from "@tanstack/react-router";
import MdiArrowRight from "~icons/mdi/arrow-right";

import { getSortedProjects } from "@/features/projects/lib/projects";
import { Image, SectionCard } from "@/shared/components";

export default function SelectedWorkSection() {
  const projects = getSortedProjects()
    .filter((project) => project.featured)
    .slice(0, 3);
  return (
    <SectionCard
      eyebrow="Selected work"
      title="Evidence over claims."
      description={
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary"
        >
          View all case studies <MdiArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <div className="border-t border-border">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group grid gap-5 border-b border-border py-7 sm:grid-cols-[3rem_minmax(0,1fr)_12rem] sm:items-center lg:grid-cols-[4rem_minmax(0,1fr)_22rem]"
          >
            <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
            <div>
              <p className="eyebrow">
                {project.role || project.category} · {project.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] [overflow-wrap:anywhere] group-hover:text-primary sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                {project.subtitle || project.description}
              </p>
              {project.impact && (
                <p className="mt-3 text-sm font-semibold text-foreground">{project.impact}</p>
              )}
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={project.headerImage || "/apple-touch-icon.png"}
                alt=""
                layout="fullWidth"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        ))}
      </div>
    </SectionCard>
  );
}
