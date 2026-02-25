import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import MdiGithub from "~icons/mdi/github";
import MdiLinkedin from "~icons/mdi/linkedin";

import { CONTACT } from "@/config/contact";
import { NAV_LINKS } from "@/config/navigation";
import { ParallaxProfile } from "@/shared/components/ParallaxProfile";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const contacts = [
    {
      icon: MdiLinkedin,
      link: CONTACT.linkin,
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
          fixed top-0 z-50 flex h-screen w-75 flex-col
          border-r border-sidebar-border bg-sidebar p-6
          transition-transform duration-300
          lg:sticky lg:w-64
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 h-0.5 w-10 rounded-full bg-sidebar-primary/60" />
          <h1 className="text-xl font-bold text-sidebar-foreground">Reawpai Chunsoi</h1>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  activeProps={{
                    className: "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
                  }}
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile + Social */}
        <div className="mt-auto flex flex-col items-center rounded-xl bg-sidebar-accent/30 p-4">
          <ParallaxProfile />

          <div className="mt-4 flex w-full justify-center gap-3">
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground transition-all duration-200 hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
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
