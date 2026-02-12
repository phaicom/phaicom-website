import { Outlet } from "@tanstack/react-router";
import { useState } from "react";

import MobileMenuButton from "./MobileMenuButton";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <MobileMenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="min-h-screen flex-1 pt-16 lg:pt-0">
          <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
