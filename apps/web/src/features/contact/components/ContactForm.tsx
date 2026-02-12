import { motion } from "motion/react";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm">Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">Email</label>
        <input
          type="email"
          placeholder="your.email@example.com"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">Message</label>
        <textarea
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 focus:border-primary focus:outline-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
