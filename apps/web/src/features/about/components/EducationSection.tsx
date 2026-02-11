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
            className="relative rounded-xl border border-gray-800 bg-[#1a1a1a] p-6 pl-10"
          >
            <div className="absolute top-6 left-0 h-16 w-1 rounded-r bg-yellow-500"></div>

            <p className="mb-2 text-sm text-yellow-500">{item.period}</p>

            <h3 className="mb-1 text-xl">{item.title}</h3>

            <p className="mb-2 text-gray-400">{item.institution}</p>

            <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
