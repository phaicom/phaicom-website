import type { CSSProperties } from "react";

import MdiGithub from "~icons/mdi/github";
import MdiStar from "~icons/mdi/star";
import MdiWeb from "~icons/mdi/web";

import { Route } from "@/routes/(public)/projects/$slug";
import { BackLink, Image, Markdown, Pill } from "@/shared/components";

export default function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const externalLinkClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

  return (
    <article className="mx-auto max-w-5xl">
      <div className="enter-fade-left mb-8">
        <BackLink to="/projects" label="Back to Projects" />
      </div>

      <header style={{ "--enter-delay": "100ms" } as CSSProperties} className="enter-fade-up mb-12">
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
          <div className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {project.title}
          </div>
          {project.subtitle && (
            <div className="mt-2 text-2xl font-medium text-muted-foreground md:text-3xl lg:text-4xl">
              {project.subtitle}
            </div>
          )}
        </h1>

        <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>

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
          className="enter-fade-up mb-12 overflow-hidden rounded-2xl border border-border shadow-lg"
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

      <div className="mb-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div
        style={{ "--enter-delay": "300ms" } as CSSProperties}
        className="enter-fade-up prose prose-lg max-w-none prose-invert
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
          prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h2:first:mt-0
          prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-xl
          prose-h4:mt-4 prose-h4:mb-2 prose-h4:text-lg
          prose-p:mb-4 prose-p:leading-relaxed prose-p:text-muted-foreground
          prose-a:font-medium prose-a:text-primary prose-a:no-underline
          prose-blockquote:border-l-primary prose-blockquote:bg-accent/50
          prose-blockquote:py-1 prose-blockquote:not-italic
          prose-strong:font-semibold prose-strong:text-foreground
          prose-code:rounded-md prose-code:bg-accent prose-code:px-1.5 prose-code:py-0.5
          prose-code:text-sm prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none
          prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-card prose-pre:shadow-lg
          prose-ol:my-4 prose-ul:my-4
          prose-li:my-0.5 prose-li:text-muted-foreground
          prose-table:overflow-hidden prose-table:rounded-lg prose-table:border prose-table:border-border
          prose-th:bg-accent prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-foreground
          prose-td:border-t prose-td:border-border prose-td:p-3 prose-td:text-muted-foreground
          prose-img:mx-auto prose-img:w-auto prose-img:max-w-full
          prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-lg
          prose-hr:my-10 prose-hr:border-border
        "
      >
        <Markdown content={project.content} />
      </div>

      <div style={{ "--enter-delay": "400ms" } as CSSProperties} className="enter-fade-up mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-8 flex items-center justify-between">
          <BackLink to="/projects" label="View All Projects" variant="button" />
        </div>
      </div>
    </article>
  );
}
