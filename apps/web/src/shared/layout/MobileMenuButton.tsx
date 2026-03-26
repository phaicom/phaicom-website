import { useLocation } from "@tanstack/react-router";
import MdiMenu from "~icons/mdi/menu";

import { NAV_LINKS } from "@/config/navigation";

type Props = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
};

export default function MobileMenuButton({ isSidebarOpen, openSidebar }: Props) {
  const location = useLocation();
  const activeLink = NAV_LINKS.find((link) => link.to === location.pathname);

  return (
    <div className="fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6 lg:hidden">
      <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-[0_12px_30px_-24px_rgba(42,53,22,0.35)] backdrop-blur-md sm:px-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openSidebar}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Open menu"
            aria-controls="site-sidebar"
            aria-expanded={isSidebarOpen}
          >
            <MdiMenu className="h-5 w-5 text-current" />
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground/80">
              {activeLink?.label ?? "Portfolio"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
