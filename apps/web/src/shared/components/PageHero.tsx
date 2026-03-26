import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type HeroStat = {
  label: string;
  value: React.ReactNode;
};

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  stats?: HeroStat[];
  className?: string;
};

export function PageHero({ eyebrow, title, description, stats, className }: Props) {
  const hasStats = Boolean(stats?.length);

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-4xl border border-border/70 bg-card/88 px-5 py-7 shadow-[0_24px_55px_-38px_rgba(42,53,22,0.4)] backdrop-blur-sm sm:px-8 sm:py-9 lg:rounded-[2.25rem] lg:px-10 lg:py-10",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primary/8 via-accent/5 to-transparent" />
      <div className="pointer-events-none absolute -right-12 -bottom-16 h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute top-8 -left-10 h-28 w-28 rounded-full bg-accent/12 blur-3xl" />

      <div
        className={cn(
          "relative grid gap-8",
          hasStats && "lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.8fr)] lg:items-end",
        )}
      >
        <div className="enter-fade-up max-w-3xl">
          {eyebrow && (
            <p className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 max-w-4xl text-[2.15rem] font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            {title}
          </h1>

          {description && (
            <div className="mt-5 max-w-2xl space-y-4 text-[0.98rem] leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          )}
        </div>

        {hasStats && (
          <div
            style={{ "--enter-delay": "80ms" } as CSSProperties}
            className="enter-fade-up grid grid-cols-2 items-stretch gap-3 sm:grid-cols-4 lg:grid-cols-2"
          >
            {stats?.map((stat, index) => (
              <div
                key={stat.label}
                style={{ "--enter-delay": `${140 + index * 40}ms` } as CSSProperties}
                className="enter-fade-up flex h-full min-h-26 flex-col justify-between rounded-2xl border border-border/70 bg-background/75 px-4 py-3"
              >
                <p className="min-h-11 text-xl leading-tight font-semibold tracking-[-0.04em] text-foreground sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-5 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
