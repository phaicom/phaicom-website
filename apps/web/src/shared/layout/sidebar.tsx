import { Link } from "@tanstack/react-router";
import MdiClose from "~icons/mdi/close";
import MdiGithub from "~icons/mdi/github";
import MdiLinkedin from "~icons/mdi/linkedin";

import { CONTACT } from "@/config/contact";
import { NAV_LINKS } from "@/config/navigation";
import { ParallaxProfile } from "@/shared/components/ParallaxProfile";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const socialLinks = [
  {
    href: CONTACT.linkedin,
    icon: MdiLinkedin,
    label: "LinkedIn profile",
  },
  {
    href: CONTACT.github,
    icon: MdiGithub,
    label: "GitHub profile",
  },
] as const;

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className={`fixed inset-0 z-40 h-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Close navigation menu"
      />

      <aside id="site-sidebar" aria-label="Primary" className={`
          fixed top-0 left-0 z-50 flex h-screen max-h-screen w-[84vw] max-w-72 flex-col overflow-hidden border-r
          border-sidebar-border bg-sidebar/95 shadow-[0_16px_40px_-28px_rgba(42,53,22,0.35)]
          backdrop-blur-xl transition-transform duration-300
          lg:sticky lg:top-0 lg:left-auto lg:h-screen lg:max-h-screen lg:w-64 lg:bg-sidebar lg:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 lg:px-8 lg:pt-6 lg:pb-5">
          <SidebarHeader onClose={onClose} />
          <SidebarNavigation onNavigate={onClose} />
          <SidebarFooter />
        </div>
      </aside>
    </>
  );
}

function SidebarHeader({ onClose }: Pick<SidebarProps, "onClose">) {
  return (
    <div className="mb-6 border-b border-sidebar-border pb-5">
      <div className="mb-4 flex items-start justify-end lg:hidden">
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-sidebar-border bg-sidebar text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          aria-label="Close menu"
        >
          <MdiClose className="h-5 w-5 text-current" />
        </button>
      </div>
      <h1 className="text-lg font-semibold text-sidebar-foreground">Reawpai Chunsoi</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Senior Full-Stack <span className="whitespace-nowrap">Web Developer</span>
      </p>
    </div>
  );
}

function SidebarNavigation({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav className="mb-6">
      <ul className="space-y-1">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-muted-foreground transition-colors duration-200 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
              activeProps={{
                className: "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
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
  );
}

function SidebarFooter() {
  return (
    <div className="border-t border-sidebar-border pt-4">
      <div className="mb-5 hidden rounded-2xl bg-sidebar-accent/30 p-4 lg:block">
        <ParallaxProfile />
      </div>

      <a
        href={`mailto:${CONTACT.email}`}
        className="block truncate text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {CONTACT.email}
      </a>

      <div className="mt-4 flex items-center gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-sidebar-border bg-transparent text-muted-foreground transition-colors duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
