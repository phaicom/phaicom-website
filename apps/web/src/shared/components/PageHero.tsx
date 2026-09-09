import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeroStat = { label: string; value: ReactNode };
type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  stats?: HeroStat[];
  className?: string;
};

export function PageHero({ eyebrow, title, description, stats, className }: Props) {
  return (
    <section
      className={cn("border-b border-border pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-20", className)}
    >
      <div
        className={cn(
          "grid gap-10",
          stats?.length && "lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end",
        )}
      >
        <div className="enter-fade-up max-w-4xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-5 text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-balance [overflow-wrap:anywhere]">
            {title}
          </h1>
          {description && (
            <div className="mt-7 max-w-2xl space-y-4 text-base leading-8 text-muted-foreground sm:text-lg">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          )}
        </div>
        {stats?.length ? (
          <dl className="grid grid-cols-2 border-t border-l border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-b border-border p-4 sm:p-5">
                <dt className="font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
