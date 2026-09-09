import { Link, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import MdiClose from "~icons/mdi/close";
import MdiMenu from "~icons/mdi/menu";

import { CONTACT } from "@/config/contact";
import { NAV_LINKS } from "@/config/navigation";

type Props = { isOpen: boolean; onClose: () => void; onOpen: () => void };

export function Sidebar({ isOpen, onClose, onOpen }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen) return;

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isOpen, onClose]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="section-shell flex h-18 items-center justify-between sm:h-20">
        <Link to="/" onClick={onClose} className="group flex min-w-0 items-center gap-3 rounded-sm">
          <span className="flex h-9 w-9 items-center justify-center bg-foreground font-mono text-xs font-medium text-background">
            RC
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm leading-tight font-semibold">
              Reawpai Chunsoi
            </span>
            <span className="block truncate text-[0.68rem] text-muted-foreground">
              Senior Full Stack Developer
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-sm px-3 py-2 text-sm transition-colors hover:text-primary lg:px-4 ${active ? "text-primary" : "text-muted-foreground"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${CONTACT.email}`}
            className="ml-2 rounded-sm bg-foreground px-3 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary lg:ml-3 lg:px-4"
          >
            Get in touch
          </a>
        </nav>
        <button
          type="button"
          onClick={isOpen ? onClose : onOpen}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-card md:hidden"
        >
          {isOpen ? <MdiClose className="h-5 w-5" /> : <MdiMenu className="h-5 w-5" />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`max-h-[calc(100dvh-4.5rem-env(safe-area-inset-top))] overflow-y-auto overscroll-contain border-t border-border bg-background md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <nav className="section-shell py-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="block border-b border-border py-3 text-base last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-4 flex justify-center bg-foreground px-4 py-3 text-sm font-semibold text-background"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
