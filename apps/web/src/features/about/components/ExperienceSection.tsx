import { TimelineItem } from "@/shared/components";

import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section className="rounded-[2rem] border border-border/70 bg-card/78 px-5 py-6 shadow-[0_18px_45px_-38px_rgba(42,53,22,0.42)] sm:px-8 sm:py-8">
      <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl">Experience</h2>
      <p className="mb-8 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        Career highlights now sit in roomier stacked panels with improved readability on smaller
        screens.
      </p>

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
    </section>
  );
}
