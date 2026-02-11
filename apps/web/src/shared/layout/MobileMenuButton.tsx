import { Menu, X } from "lucide-react";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export default function MobileMenuButton({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="fixed top-4 left-4 z-60 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 bg-[#1a1a1a] shadow-lg transition-colors hover:bg-[#252525] lg:hidden"
      aria-label={sidebarOpen ? "Close menu" : "Open menu"}
    >
      {sidebarOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
    </button>
  );
}
