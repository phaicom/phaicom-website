import { motion } from "motion/react";

import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <>
      <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl">Core Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { delay: index * 0.05, duration: 0.3 },
              y: { delay: index * 0.05, duration: 0.3 },
            }}
            whileHover={{ scale: 1.05 }}
            className="group relative flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
          >
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon with background */}
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
              <skill.icon className="h-4 w-4 text-primary" />
            </div>
            <span className="relative text-sm text-foreground select-none">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
