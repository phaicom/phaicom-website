import { SectionCard, TimelineItem } from "@/shared/components";

import { education } from "../data/education";

export default function EducationSection() {
  return (
    <SectionCard
      title="Education"
      description="Formal education and language study that supported my transition into professional software development."
    >
      <div className="space-y-6">
        {education.map((item, index) => (
          <TimelineItem
            key={`${item.institution}-${item.period}-${item.title}`}
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
