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
      {/* Overlay */}
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
          fixed top-0 z-50 flex
          h-screen w-75 flex-col border-r border-border bg-card p-6
          transition-transform duration-300 lg:sticky lg:w-64
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
        <div className="mt-12 mb-8 text-center lg:mt-0">
          <h1 className="text-xl font-bold text-foreground">Reawpai Chunsoi</h1>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 flex-1">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  activeProps={{
                    className: "bg-accent text-accent-foreground",
                  }}
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* My paralax photo */}
        <div className="opacity-90 contrast-95 saturate-90 transition duration-500 hover:opacity-100">
          <ParallaxProfile />
        </div>

        <div className="mt-6 flex gap-3 border-t border-border pt-6">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:bg-accent/80"
            >
              <contact.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
