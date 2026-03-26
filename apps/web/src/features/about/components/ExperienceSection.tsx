import { SectionCard, TimelineItem } from "@/shared/components";

import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <SectionCard
      title="Experience"
      description="Career highlights now sit in roomier stacked panels with improved readability on smaller screens."
    >
      <div className="space-y-6">
        {experience.map((item, index) => (
          <TimelineItem
            key={index}
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
