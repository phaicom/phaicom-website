import { motion } from "motion/react";

import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section className="rounded-[2rem] border border-border/70 bg-card/78 px-5 py-6 shadow-[0_18px_45px_-38px_rgba(42,53,22,0.42)] sm:px-8 sm:py-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-primary uppercase">
          Services
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl">Core expertise for product teams</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Mobile now leads with compact, high-signal cards so capabilities are easier to scan while
          still feeling premium.
        </p>
      </div>

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
    </section>
  );
}
