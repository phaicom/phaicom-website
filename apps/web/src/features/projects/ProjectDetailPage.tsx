import type { CSSProperties } from "react";

import MdiGithub from "~icons/mdi/github";
import MdiStar from "~icons/mdi/star";
import MdiWeb from "~icons/mdi/web";

import { formatProjectDateRange } from "@/features/projects/lib/projects";
import { Route } from "@/routes/(public)/projects/$slug";
import { BackLink, Image, Markdown, Pill } from "@/shared/components";

export default function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const externalLinkClass =
    "inline-flex h-11 w-11 items-center justify-center border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary";

  return (
    <article className="section-shell max-w-6xl">
      <div className="enter-fade-up mb-8">
        <BackLink to="/projects" label="Back to Projects" />
      </div>

      <header
        style={{ "--enter-delay": "100ms" } as CSSProperties}
        className="enter-fade-up mb-12 border-b border-border pb-10 sm:pb-14"
      >
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Pill variant="category" className="py-1.5">
            {project.category}
          </Pill>
          {project.featured && (
            <Pill variant="featured" className="py-1.5">
              <span className="inline-flex items-center gap-2">
                <MdiStar className="h-4 w-4 text-primary-foreground" />
                <span>Featured Project</span>
              </span>
            </Pill>
          )}
        </div>

        <h1 className="mb-6 tracking-tight">
          <div className="text-[clamp(2.5rem,7vw,6.25rem)] leading-[0.95] font-semibold tracking-[-0.055em] [overflow-wrap:anywhere] text-foreground">
            {project.title}
          </div>
          {project.subtitle && (
            <div className="mt-4 max-w-4xl text-xl leading-tight font-medium [overflow-wrap:anywhere] text-muted-foreground sm:text-2xl md:text-3xl">
              {project.subtitle}
            </div>
          )}
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech: string, index: number) => (
            <Pill key={tech} index={index} animate className="px-3 py-1 text-xs">
              {tech}
            </Pill>
          ))}
        </div>

        {(project.websiteUrl || project.githubUrl) && (
          <div className="mt-7 border-t border-border/70 pt-4">
            <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              External Links
            </p>
            <div className="flex flex-wrap gap-3">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit project website"
                  title="Visit project website"
                  className={externalLinkClass}
                >
                  <MdiWeb className="h-5 w-5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View project GitHub repository"
                  title="View project GitHub repository"
                  className={externalLinkClass}
                >
                  <MdiGithub className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        )}
      </header>

      {project.headerImage && (
        <div
          style={{ "--enter-delay": "200ms" } as CSSProperties}
          className="enter-fade-up mb-14 overflow-hidden border border-border bg-muted"
        >
          <Image
            src={project.headerImage}
            alt={project.title}
            width={896}
            height={504}
            layout="constrained"
            className="aspect-video w-full object-cover"
          />
        </div>
      )}

      <div
        style={{ "--enter-delay": "300ms" } as CSSProperties}
        className="enter-fade-up grid gap-10 lg:grid-cols-[10rem_minmax(0,48rem)] lg:justify-center lg:gap-16"
      >
        <aside className="border-t border-border pt-4 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Case study</p>
          <dl className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-1">
            <div>
              <dt className="font-mono text-[0.62rem] tracking-wider text-muted-foreground uppercase">
                Discipline
              </dt>
              <dd className="mt-1 text-sm font-semibold">{project.category}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] tracking-wider text-muted-foreground uppercase">
                Timeline
              </dt>
              <dd className="mt-1 text-sm font-semibold">
                {formatProjectDateRange(project.startDate, project.endDate)}
              </dd>
            </div>
          </dl>
        </aside>
        <Markdown content={project.content} className="project-prose" />
      </div>

      <div style={{ "--enter-delay": "400ms" } as CSSProperties} className="enter-fade-up mt-16">
        <div className="h-px bg-border" />
        <div className="mt-8 flex items-center justify-between">
          <BackLink to="/projects" label="View All Projects" variant="button" />
        </div>
      </div>
    </article>
  );
}
