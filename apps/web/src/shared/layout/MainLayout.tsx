import type { ReactNode } from "react";

import { Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import MobileMenuButton from "./MobileMenuButton";
import Sidebar from "./Sidebar";

type Props = {
  children?: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!sidebarOpen) {
      return;
    }

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlBackground = document.documentElement.style.backgroundColor;
    const previousBodyBackground = document.body.style.backgroundColor;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.backgroundColor = "var(--sidebar)";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "var(--sidebar)";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.backgroundColor = previousHtmlBackground;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.backgroundColor = previousBodyBackground;
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-72 bg-linear-to-b from-primary/8 via-accent/6 to-transparent lg:hidden" />
      <div className="pointer-events-none fixed inset-x-0 top-20 z-0 h-40 bg-[radial-gradient(circle_at_top,rgba(120,140,75,0.14),transparent_68%)] lg:hidden" />

      <div className="relative z-10 flex">
        <MobileMenuButton setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="min-h-screen flex-1 pt-24 lg:pt-0">
          <div className="px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:py-8 xl:px-10 xl:py-10">
            {children ?? <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
}
