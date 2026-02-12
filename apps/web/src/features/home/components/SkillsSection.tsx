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
              scale: { duration: 0.15 },
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 rounded-lg border border-gray-800 bg-[#1a1a1a] px-4 py-3 transition-colors hover:border-yellow-500"
          >
            <skill.icon className="h-5 w-5 text-yellow-500" />
            <span className="text-sm text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
