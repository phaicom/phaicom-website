import { Outlet } from "@tanstack/react-router";
import { useState } from "react";

import MobileMenuButton from "./MobileMenuButton";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-72 bg-linear-to-b from-primary/8 via-accent/6 to-transparent lg:hidden" />
      <div className="pointer-events-none fixed inset-x-0 top-20 z-0 h-40 bg-[radial-gradient(circle_at_top,rgba(120,140,75,0.14),transparent_68%)] lg:hidden" />

      <div className="relative z-10 flex">
        <MobileMenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="min-h-screen flex-1 pt-24 lg:pt-0">
          <div className="px-4 pb-8 sm:px-6 sm:pb-10 lg:p-8 xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
