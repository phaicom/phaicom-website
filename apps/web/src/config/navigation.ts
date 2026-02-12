import type { ComponentType } from "react";
import MdiAccount from "~icons/mdi/account";
import MdiBriefcase from "~icons/mdi/briefcase";
import MdiEmail from "~icons/mdi/email";
import MdiHome from "~icons/mdi/home";

export type NavItem = {
  label: string;
  to: string;
  icon?: ComponentType<{ className?: string }>;
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", to: "/", icon: MdiHome },
  { label: "About", to: "/about", icon: MdiAccount },
  { label: "Projects", to: "/projects", icon: MdiBriefcase },
  { label: "Contact", to: "/contact", icon: MdiEmail },
];
