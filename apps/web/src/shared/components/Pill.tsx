import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "category" | "featured";
  className?: string;
  index?: number;
  animate?: boolean;
};

const variantStyles = {
  default:
    "rounded-lg border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-accent",
  category: "rounded-full bg-primary/10 text-primary",
  featured:
    "rounded-full bg-amber-500/80 backdrop-blur-sm text-white border border-amber-400/50 shadow-lg",
};

export default function Pill({
  children,
  variant = "default",
  className = "",
  index = 0,
  animate = false,
}: Props) {
  const baseClasses = `select-none px-4 py-2 text-sm font-medium ${variantStyles[variant]}`;

  if (animate) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { delay: index * 0.05, duration: 0.3 },
          y: { delay: index * 0.05, duration: 0.3 },
        }}
        className={`${baseClasses} ${className}`}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={`${baseClasses} ${className}`}>{children}</span>;
}
