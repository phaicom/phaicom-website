import { TimelineItem } from "@/shared/components";

import { education } from "../data/education";

export default function EducationSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl">Education</h2>

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
    </section>
  );
}
