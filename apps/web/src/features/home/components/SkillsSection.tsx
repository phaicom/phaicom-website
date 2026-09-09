import { SectionCard } from "@/shared/components";

import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  return (
    <SectionCard
      eyebrow="Technical range"
      title="Tools, kept in proportion."
      description="The work leads; the stack supports it. These are the technologies and practices I use most often in production."
      className="pb-6 lg:pb-10"
    >
      <div className="border-t border-border">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid gap-2 border-b border-border py-4 sm:grid-cols-[10rem_1fr] sm:gap-5"
          >
            <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="text-sm text-foreground/85">
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
