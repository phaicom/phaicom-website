import type { CSSProperties } from "react";

import { Link } from "@tanstack/react-router";
import MdiArrowRight from "~icons/mdi/arrow-right";
import MdiCalendarBlankOutline from "~icons/mdi/calendar-blank-outline";
import MdiLinkVariant from "~icons/mdi/link-variant";
import MdiStar from "~icons/mdi/star";

import { formatProjectDateRange, getProjectSummary } from "@/features/projects/lib/projects";
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
  excerpt?: string;
  startDate: string;
  endDate?: string;
  websiteUrl?: string;
  githubUrl?: string;
};

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const summary = getProjectSummary(project);
  const visibleTech = project.techStack.slice(0, 3);
  const hasExternalLink = Boolean(project.websiteUrl || project.githubUrl);

  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="block h-full">
      <div
        style={{ "--enter-delay": `${index * 40}ms` } as CSSProperties}
        className="enter-fade-up group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/90 shadow-[0_16px_40px_-34px_rgba(42,53,22,0.42)] transition-colors duration-200 hover:border-primary/30"
      >
        <div className="relative h-56 overflow-hidden border-b border-border/80 sm:h-52">
          <Image
            src={project.headerImage || "/apple-touch-icon.png"}
            alt={project.title}
            layout="fixed"
            height={200}
            width={300}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Pill variant="category" className="px-3 py-1 text-xs">
              {project.category}
            </Pill>
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                <MdiStar className="h-3.5 w-3.5" />
                Featured
              </span>
            )}
          </div>

          <div className="mt-4 min-h-[5rem]">
            <h3 className="line-clamp-2 text-[1.65rem] font-semibold tracking-[-0.04em] text-foreground sm:text-2xl">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-foreground/80">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1.5 text-sm text-muted-foreground">
            <MdiCalendarBlankOutline className="h-4 w-4" />
            {formatProjectDateRange(project.startDate, project.endDate)}
          </div>

          <p className="mt-4 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
            {summary}
          </p>

          <div className="mt-5 flex min-h-10 flex-wrap content-start gap-2">
            {visibleTech.map((tech, techIndex) => (
              <Pill key={tech} index={techIndex} animate className="px-3 py-1 text-xs">
                {tech}
              </Pill>
            ))}
            {project.techStack.length > visibleTech.length && (
              <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs text-muted-foreground">
                +{project.techStack.length - visibleTech.length} more
              </span>
            )}
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between gap-4 border-t border-border/70 pt-4 text-sm">
              <span className="inline-flex items-center gap-2 font-medium text-foreground">
                Read case study
                <MdiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>

              {hasExternalLink && (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <MdiLinkVariant className="h-4 w-4" />
                  External links
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
