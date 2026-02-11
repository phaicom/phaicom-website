import { motion } from "motion/react";

import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <>
      <h2 className="mb-6 text-3xl">What I'm Doing</h2>

      <div className="mb-16 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-gray-800 bg-[#1a1a1a] p-6"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="mt-4 text-lg">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
