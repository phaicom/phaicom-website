import { Link } from "@tanstack/react-router";

import { NAV_LINKS } from "@/config/navigation";

type Props = {
  closeSidebar: () => void;
};

export default function Navbar({ closeSidebar }: Props) {
  return (
    <nav className="sticky top-0 z-30 hidden border-b border-gray-800 bg-[#0a0a0a]/90 px-6 py-4 backdrop-blur-md lg:flex">
      <div className="flex justify-center gap-6 lg:justify-end">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={closeSidebar}
            activeProps={{ className: "text-yellow-500" }}
            className="text-gray-400 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
