import { motion } from "motion/react";

import { SectionCard } from "@/shared/components";

import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <SectionCard
      eyebrow="Services"
      title="Core expertise for product teams"
      description="Mobile now leads with compact, high-signal cards so capabilities are easier to scan while still feeling premium."
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{
              opacity: { delay: index * 0.05, duration: 0.4 },
              y: { delay: index * 0.05, duration: 0.4 },
              scale: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="group relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-background/82 p-5 transition-[border-color,box-shadow] duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex gap-4">
              {/* Colored icon container */}
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
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
}
