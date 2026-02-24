import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Route } from "@/routes/(public)/projects/$slug";
import { Image } from "@/shared/components/Image";
import { Markdown } from "@/shared/components/Markdown";
import Pill from "@/shared/components/Pill";

export default function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-5xl">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        {/* Meta Tags */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Pill variant="category" className="py-1.5">
            {project.category}
          </Pill>
          {project.featured && (
            <Pill variant="featured" className="py-1.5">
              ⭐ Featured Project
            </Pill>
          )}
        </div>

        {/* Title */}
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

        {/* Description */}
        <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>

        {/* Tech Stack Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech: string, index: number) => (
            <Pill key={tech} index={index} animate>
              {tech}
            </Pill>
          ))}
        </div>
      </motion.header>

      {/* Hero Image */}
      {project.headerImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 overflow-hidden rounded-2xl border border-border shadow-lg"
        >
          <Image
            src={project.headerImage}
            alt={project.title}
            width={896}
            height={504}
            layout="constrained"
            className="aspect-video w-full object-cover"
          />
        </motion.div>
      )}

      {/* Content Divider */}
      <div className="mb-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Markdown Content with Prose Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="prose prose-lg max-w-none prose-invert
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
          prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-lg
          prose-hr:my-10 prose-hr:border-border
        "
      >
        <Markdown content={project.content} />
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-8 flex items-center justify-between">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary hover:bg-accent hover:shadow-md"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            View All Projects
          </Link>
        </div>
      </motion.div>
    </article>
  );
}
