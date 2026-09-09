import { SectionCard, TimelineItem } from "@/shared/components";

import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <SectionCard
      eyebrow="Career history"
      title="Roles and measurable contributions."
      description="Responsibilities are useful context; outcomes and the systems behind them are the stronger signal."
    >
      <div>
        {experience.map((item, index) => (
          <TimelineItem
            key={`${item.company}-${item.period}-${item.title}`}
            period={item.period}
            title={item.title}
            organization={item.company}
            description={item.description}
            highlights={item.highlights}
            technologies={item.technologies}
            index={index}
          />
        ))}
      </div>
    </SectionCard>
  );
}
