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
              scale: { duration: 0.15 },
            }}
            className="flex gap-4 rounded-xl border border-border bg-card p-6"
          >
            <div className="text-4xl">{service.icon}</div>
            <div>
              <h3 className="mb-2 text-lg">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
