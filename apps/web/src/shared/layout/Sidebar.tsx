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
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`
          fixed top-0 z-50 flex
          h-screen w-75 flex-col border-r border-gray-800 bg-[#1a1a1a] p-6
          transition-transform duration-300 lg:sticky lg:w-64
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
        <div className="mt-12 mb-8 text-center lg:mt-0">
          <h1 className="text-xl font-bold">Reawpai Chunsoi</h1>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 flex-1">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-colors hover:bg-[#252525] hover:text-white"
                  activeProps={{
                    className: "bg-[#252525] text-yellow-500",
                  }}
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex gap-3 border-t border-gray-800 pt-6">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#252525] transition-colors hover:bg-[#333] hover:text-yellow-500"
            >
              <contact.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
