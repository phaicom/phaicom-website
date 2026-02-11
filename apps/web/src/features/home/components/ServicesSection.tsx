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
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex gap-4 rounded-xl border border-gray-800 bg-[#1a1a1a] p-6"
          >
            <div className="text-4xl">{service.icon}</div>
            <div>
              <h3 className="mb-2 text-lg">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
