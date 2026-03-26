import { useLocation } from "@tanstack/react-router";
import MdiClose from "~icons/mdi/close";
import MdiMenu from "~icons/mdi/menu";

import { NAV_LINKS } from "@/config/navigation";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export default function MobileMenuButton({ sidebarOpen, setSidebarOpen }: Props) {
  const location = useLocation();
  const activeLink = NAV_LINKS.find((link) => link.to === location.pathname);

  return (
    <div className="fixed inset-x-0 top-0 z-60 px-4 pt-4 lg:hidden">
      <div className="rounded-2xl border border-border/70 bg-background/90 px-3 py-3 shadow-[0_12px_30px_-24px_rgba(42,53,22,0.35)] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground/80">
              {activeLink?.label ?? "Portfolio"}
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? (
              <MdiClose className="h-5 w-5 text-current" />
            ) : (
              <MdiMenu className="h-5 w-5 text-current" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
