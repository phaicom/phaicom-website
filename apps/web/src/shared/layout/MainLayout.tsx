import type { ReactNode } from "react";

import { Outlet } from "@tanstack/react-router";

import { useDisclosure } from "@/shared/hooks/useDisclosure";

import { Sidebar } from "./sidebar";

type Props = {
  children?: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const mobileSidebar = useDisclosure();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar
        isOpen={mobileSidebar.isOpen}
        onClose={mobileSidebar.close}
        onOpen={mobileSidebar.open}
      />
      <main
        id="main-content"
        className="min-h-[calc(100vh-8rem)] pt-[calc(6rem+env(safe-area-inset-top))] sm:pt-[calc(7rem+env(safe-area-inset-top))]"
      >
        {children ?? <Outlet />}
      </main>
      <footer className="section-shell pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-14 sm:pb-[max(3.5rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Reawpai Chunsoi</p>
          <p className="font-mono text-xs tracking-wider uppercase">
            Built with React + TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
}
