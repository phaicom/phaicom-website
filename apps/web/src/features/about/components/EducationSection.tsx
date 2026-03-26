import { TimelineItem } from "@/shared/components";

import { education } from "../data/education";

export default function EducationSection() {
  return (
    <section className="rounded-[2rem] border border-border/70 bg-card/78 px-5 py-6 shadow-[0_18px_45px_-38px_rgba(42,53,22,0.42)] sm:px-8 sm:py-8">
      <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl">Education</h2>
      <p className="mb-8 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        Presented as standalone mobile cards so the timeline keeps its shape without feeling
        cramped.
      </p>

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
