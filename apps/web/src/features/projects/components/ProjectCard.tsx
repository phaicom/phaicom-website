import type { CSSProperties } from "react";

import { Link } from "@tanstack/react-router";
import MdiArrowUpRight from "~icons/mdi/arrow-up-right";

import { formatProjectDateRange, getProjectSummary } from "@/features/projects/lib/projects";
import { cn } from "@/lib/utils";
import { Image } from "@/shared/components/Image";

type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  techStack: string[];
  featured: boolean;
  headerImage?: string;
  description?: string;
  excerpt?: string;
  startDate: string;
  endDate?: string;
  websiteUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLeadProject = project.featured && index === 0;

  return (
    <article
      style={{ "--enter-delay": `${index * 40}ms` } as CSSProperties}
      className={cn("enter-fade-up group", isLeadProject && "md:col-span-2")}
    >
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="block">
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden bg-muted",
            isLeadProject && "md:aspect-[2/1] lg:aspect-[12/5]",
          )}
        >
          <Image
            src={project.headerImage || "/apple-touch-icon.png"}
            alt=""
            layout="fullWidth"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        </div>
        <div className="border-b border-border py-5">
          <div className="flex items-start justify-between gap-5">
            <div className={cn(isLeadProject && "max-w-3xl")}>
              <p className="font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
                {project.category} · {formatProjectDateRange(project.startDate, project.endDate)}
              </p>
              <h3
                className={cn(
                  "mt-2 text-2xl font-semibold tracking-[-0.04em] [overflow-wrap:anywhere] transition-colors group-hover:text-primary sm:text-3xl",
                  isLeadProject && "md:text-4xl lg:text-5xl",
                )}
              >
                {project.title}
              </h3>
            </div>
            <MdiArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          {project.subtitle && (
            <p className="mt-2 text-sm font-medium text-foreground/80">{project.subtitle}</p>
          )}
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {getProjectSummary(project)}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.65rem] tracking-wide text-muted-foreground uppercase">
            {project.techStack.slice(0, 4).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
