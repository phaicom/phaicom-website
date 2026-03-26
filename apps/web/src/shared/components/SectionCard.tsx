import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionCardProps = {
  title?: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionCard({
  title,
  description,
  eyebrow,
  children,
  className,
  contentClassName,
}: SectionCardProps) {
  const hasHeader = eyebrow || title || description;

  return (
    <section
      className={cn(
        "rounded-[2rem] border border-border/70 bg-card/78 px-5 py-6 shadow-[0_18px_45px_-38px_rgba(42,53,22,0.42)] sm:px-8 sm:py-8",
        className,
      )}
    >
      {hasHeader && (
        <div className="mb-8 max-w-2xl">
          {eyebrow && (
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-primary uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className={cn("text-2xl sm:text-3xl lg:text-4xl", eyebrow && "mt-3")}>{title}</h2>
          )}
          {description && (
            <div
              className={cn(
                "mt-3 text-sm leading-7 text-muted-foreground sm:text-base",
                contentClassName,
              )}
            >
              {description}
            </div>
          )}
        </div>
      )}

      {children}
    </section>
  );
}
