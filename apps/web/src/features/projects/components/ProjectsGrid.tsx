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
        title="Case studies"
        description="Scan the full set or search by product, domain, or technology. The strongest production work is prioritized first."
      >
        <div className="grid gap-6 border-y border-border py-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] md:items-end">
          <div>
            <p className="eyebrow">Domains represented</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
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
          </div>

          <ProjectSearchField
            value={query}
            onChange={setQuery}
            resultCount={filteredProjects.length}
          />
        </div>

        <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
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
