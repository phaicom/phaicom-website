import { SectionCard, TimelineItem } from "@/shared/components";

import { education } from "../data/education";

export default function EducationSection() {
  return (
    <SectionCard
      title="Education"
      description="Presented as standalone mobile cards so the timeline keeps its shape without feeling cramped."
    >
      <div className="space-y-6">
        {education.map((item, index) => (
          <TimelineItem
            key={index}
            period={item.period}
            title={item.title}
            organization={item.institution}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </SectionCard>
  );
}
