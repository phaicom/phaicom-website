import { SectionCard } from "@/shared/components";

import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <SectionCard
      eyebrow="What I do"
      title="Engineering that supports the product, not the other way around."
      description="I work across the stack, with a particular strength in frontend architecture and translating complex requirements into clear, durable experiences."
    >
      <ol className="grid border-t border-border md:grid-cols-2">
        {services.map((service, index) => (
          <li
            key={service.title}
            className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-border py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"
          >
            <span className="font-mono text-xs text-primary">0{index + 1}</span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
