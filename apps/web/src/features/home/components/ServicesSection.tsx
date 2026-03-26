import type { CSSProperties } from "react";

import { SectionCard } from "@/shared/components";

import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <SectionCard
      eyebrow="Services"
      title="Core expertise for product teams"
      description="The areas where I contribute most often across product teams, from UI delivery to architecture and SEO."
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            style={{ "--enter-delay": `${index * 50}ms` } as CSSProperties}
            className="enter-fade-up group relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-background/82 p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15 sm:h-12 sm:w-12">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
