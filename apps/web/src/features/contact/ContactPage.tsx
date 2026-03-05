import { motion } from "motion/react";
import MdiDownload from "~icons/mdi/download";
import MdiFileDocumentOutline from "~icons/mdi/file-document-outline";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <ContactHero />

      <div className="grid gap-10 lg:grid-cols-2">
        <ContactInfo />
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm lg:max-w-md lg:justify-self-end"
        >
          <div className="pointer-events-none absolute -top-12 -right-10 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-accent/45 blur-2xl" />

          <div className="relative space-y-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <MdiFileDocumentOutline className="h-6 w-6" />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                Resume
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Download a concise PDF version of my experience, selected case studies, and core
                technical strengths.
              </p>
            </div>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              href="/files/fullstack-resume.pdf"
              download="fullstack-resume.pdf"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:brightness-95"
            >
              <MdiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </motion.a>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
