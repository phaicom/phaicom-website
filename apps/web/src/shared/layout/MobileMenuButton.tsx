import { Menu, X } from "lucide-react";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export default function MobileMenuButton({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="fixed top-4 left-4 z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-[#1a1a1a] lg:hidden"
    >
      {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
