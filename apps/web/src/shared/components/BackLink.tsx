import { Link } from "@tanstack/react-router";
import MdiArrowLeft from "~icons/mdi/arrow-left";

type Props = {
  to: string;
  label: string;
  variant?: "text" | "button";
};

export function BackLink({ to, label, variant = "text" }: Props) {
  if (variant === "button") {
    return (
      <Link
        to={to}
        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary hover:bg-accent hover:shadow-md"
      >
        <MdiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      <MdiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}
