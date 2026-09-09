import type { CSSProperties } from "react";

import { useMemo, useState } from "react";

import { getSortedProjects, searchProjects } from "@/features/projects/lib/projects";
import { SectionCard } from "@/shared/components";
import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";

import ProjectCard from "./ProjectCard";
import { ProjectSearchField } from "./ProjectSearchField";

export default function ProjectsGrid() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 200);
  const sortedProjects = useMemo(() => getSortedProjects(), []);
  const categories = useMemo(
    () => [...new Set(sortedProjects.map((project) => project.category))],
    [sortedProjects],
  );
  const filteredProjects = useMemo(
    () => searchProjects(sortedProjects, debouncedQuery),
    [debouncedQuery, sortedProjects],
  );

  return (
    <div>
      <SectionCard
        title="Selected work"
        description="A curated set of case studies covering frontend delivery, platform work, and full-stack product development."
      >
        <div className="max-w-2xl">
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {categories.map((category, index) => (
              <span
                key={category}
                style={{ "--enter-delay": `${index * 30}ms` } as CSSProperties}
                className="enter-fade-up font-mono text-[0.68rem] tracking-wide text-muted-foreground uppercase"
              >
                {category}
              </span>
            ))}
          </div>

          <ProjectSearchField
            value={query}
            onChange={setQuery}
            resultCount={filteredProjects.length}
          />
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 border border-dashed border-border px-5 py-6 text-sm text-muted-foreground">
            No case studies matched "{debouncedQuery}". Try a project name, domain, or technology.
          </div>
        )}
      </SectionCard>
    </div>
  );
}
