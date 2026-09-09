import type { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "category" | "featured";
  className?: string;
  index?: number;
  animate?: boolean;
};

const variantStyles = {
  default: "border border-border bg-card text-foreground transition-colors hover:border-primary",
  category: "border border-primary/25 bg-accent text-primary",
  featured: "border border-primary bg-primary text-primary-foreground",
};

export default function Pill({
  children,
  variant = "default",
  className = "",
  index = 0,
  animate = false,
}: Props) {
  const baseClasses = `inline-flex max-w-full items-center px-4 py-2 text-sm font-medium break-words select-none [overflow-wrap:anywhere] ${variantStyles[variant]}`;

  if (animate) {
    return (
      <span
        style={{ "--enter-delay": `${index * 50}ms` } as CSSProperties}
        className={`enter-fade-up ${baseClasses} ${className}`}
      >
        {children}
      </span>
    );
  }

  return <span className={`${baseClasses} ${className}`}>{children}</span>;
}
