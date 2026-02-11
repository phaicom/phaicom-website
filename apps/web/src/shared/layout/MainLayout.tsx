import { Outlet } from "@tanstack/react-router";
import { useState } from "react";

import MobileMenuButton from "./MobileMenuButton";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <MobileMenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="min-h-screen flex-1">
          <Navbar closeSidebar={() => setSidebarOpen(false)} />

          <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
