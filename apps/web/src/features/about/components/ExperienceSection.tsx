import { TimelineItem } from "@/shared/components";

import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section>
      <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl">Experience</h2>

      <div className="space-y-6">
        {experience.map((item, index) => (
          <TimelineItem
            key={index}
            period={item.period}
            title={item.title}
            organization={item.company}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
