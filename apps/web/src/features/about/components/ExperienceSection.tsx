import { SectionCard, TimelineItem } from "@/shared/components";

import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <SectionCard
      title="Experience"
      description="Roles spanning product delivery, platform work, and internal tooling across frontend and full-stack teams."
    >
      <div className="space-y-6">
        {experience.map((item, index) => (
          <TimelineItem
            key={`${item.company}-${item.period}-${item.title}`}
            period={item.period}
            title={item.title}
            organization={item.company}
            description={item.description}
            highlights={item.highlights}
            index={index}
          />
        ))}
      </div>
    </SectionCard>
  );
}
