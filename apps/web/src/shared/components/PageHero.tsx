import { motion } from "motion/react";

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
    <section className={cn("border-b border-border/80 pb-10 sm:pb-12", className)}>
      <div
        className={cn(
          "grid gap-8",
          hasStats && "lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.8fr)] lg:items-end",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
            {title}
          </h1>

          {description && (
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-muted-foreground">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          )}
        </motion.div>

        {hasStats && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
            className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-2"
          >
            {stats?.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.14 + index * 0.04, ease: "easeOut" }}
              >
                <p className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
