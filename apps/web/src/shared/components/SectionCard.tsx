import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  title?: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
};

export function SectionCard({
  title,
  description,
  eyebrow,
  children,
  className,
  contentClassName,
  headerClassName,
}: Props) {
  return (
    <section className={cn("py-11 sm:py-14 lg:py-16", className)}>
      {(eyebrow || title || description) && (
        <header
          className={cn(
            "mb-8 grid gap-4 border-t border-border pt-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] md:items-start",
            headerClassName,
          )}
        >
          <div>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-balance [overflow-wrap:anywhere] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                {title}
              </h2>
            )}
          </div>
          {description && (
            <div
              className={cn(
                "max-w-xl text-sm leading-7 text-muted-foreground sm:text-base",
                contentClassName,
              )}
            >
              {description}
            </div>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
