import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import MdiGithub from "~icons/mdi/github";
import MdiLinkedin from "~icons/mdi/linkedin";

import { CONTACT } from "@/config/contact";
import { NAV_LINKS } from "@/config/navigation";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const contacts = [
    {
      icon: MdiLinkedin,
      link: CONTACT.linkedin,
    },
    {
      icon: MdiGithub,
      link: CONTACT.github,
    },
  ];

  return (
    <>
      {/* Overlay (mobile) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`
          fixed top-0 z-50 flex h-screen w-[84vw] max-w-72 flex-col overflow-y-auto overscroll-contain
          border-r border-sidebar-border bg-sidebar/95 px-4 pt-20 pb-5 shadow-[0_16px_40px_-28px_rgba(42,53,22,0.35)]
          backdrop-blur-xl transition-transform
          duration-300 sm:px-6
          lg:sticky lg:w-64 lg:bg-sidebar lg:px-8 lg:pt-6 lg:shadow-none
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
        {/* Header */}
        <div className="mb-6 border-b border-sidebar-border pb-5">
          <h1 className="text-lg font-semibold text-sidebar-foreground">Reawpai Chunsoi</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Senior Full-Stack <span className="whitespace-nowrap">Web Developer</span>
          </p>
        </div>

        {/* Navigation */}
        <nav className="mb-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-muted-foreground transition-colors duration-200 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
                  activeProps={{
                    className: "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
                  }}
                >
                  {link.icon && (
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent/40 text-current">
                      <link.icon className="h-4.5 w-4.5" />
                    </span>
                  )}
                  <span className="flex-1">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t border-sidebar-border pt-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="block truncate text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {CONTACT.email}
          </a>

          <div className="mt-4 flex items-center gap-2">
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-sidebar-border bg-transparent text-muted-foreground transition-colors duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <contact.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
