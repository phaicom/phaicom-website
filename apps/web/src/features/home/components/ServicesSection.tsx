import { motion } from "motion/react";

import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <>
      <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl">What I'm Doing</h2>

      <div className="mb-16 grid gap-6 sm:grid-cols-2">
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
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-[border-color,box-shadow] duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex gap-4">
              {/* Colored icon container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
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
    </>
  );
}
