import { motion } from "motion/react";

import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <section className="rounded-[2rem] border border-border/70 bg-card/78 px-5 py-6 shadow-[0_18px_45px_-38px_rgba(42,53,22,0.42)] sm:px-8 sm:py-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-primary uppercase">
          Stack
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl">Core skills</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Grouped into a tighter mobile cloud so the stack reads quickly without becoming a dense
          wall of tags.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
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
            className="group relative flex items-center gap-2 rounded-2xl border border-border/80 bg-background/82 px-4 py-3 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
          >
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon with background */}
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
              <skill.icon className="h-4 w-4 text-primary" />
            </div>
            <span className="relative text-sm text-foreground select-none">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
