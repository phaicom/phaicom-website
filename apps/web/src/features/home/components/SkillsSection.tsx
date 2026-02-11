import { motion } from "motion/react";

import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <>
      <h2 className="mb-6 text-3xl">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-2 rounded-lg border border-gray-800 bg-[#1a1a1a] px-4 py-3"
          >
            <skill.icon className="h-5 w-5 text-yellow-500" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
