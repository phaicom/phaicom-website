import { SectionCard } from "@/shared/components";

import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  return (
    <SectionCard
      eyebrow="Capabilities"
      title="A practical, product-minded stack."
      description="Tools are selected for the problem. The through-line is typed code, clear boundaries, and software that is easy to operate and evolve."
    >
      <div className="border-t border-border">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 border-b border-border py-5 sm:grid-cols-[10rem_1fr]"
          >
            <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="text-sm font-medium sm:text-base">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
