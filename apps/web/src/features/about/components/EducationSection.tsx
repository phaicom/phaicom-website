import { motion } from "motion/react";

import { education } from "../data/education";

export default function EducationSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl">Education</h2>

      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative rounded-xl border border-border bg-card p-6 pl-10"
          >
            <div className="absolute top-6 left-0 h-16 w-1 rounded-r bg-primary"></div>

            <p className="mb-2 text-sm text-primary">{item.period}</p>

            <h3 className="mb-1 text-xl">{item.title}</h3>

            <p className="mb-2 text-muted-foreground">{item.institution}</p>

            <p className="text-sm leading-relaxed text-muted-foreground/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
