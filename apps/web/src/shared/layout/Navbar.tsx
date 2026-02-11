import { Link } from "@tanstack/react-router";

type Props = {
  closeSidebar: () => void;
};

const links = [
  { label: "About", to: "/" },
  { label: "Resume", to: "/resume" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ closeSidebar }: Props) {
  return (
    <nav className="sticky top-0 z-30 border-b border-gray-800 bg-[#0a0a0a]/90 px-6 py-4 backdrop-blur-md">
      <div className="flex justify-center gap-6 lg:justify-end">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={closeSidebar}
            activeProps={{
              className: "text-yellow-500",
            }}
            className="text-gray-400 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
