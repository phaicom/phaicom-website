import { motion } from "motion/react";

type Props = {
  period: string;
  title: string;
  organization: string;
  description?: string;
  highlights?: string[];
  index: number;
};

export function TimelineItem({
  period,
  title,
  organization,
  description,
  highlights,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-xl border border-border bg-card p-6 pl-10"
    >
      <div className="absolute top-6 left-0 h-16 w-1 rounded-r bg-primary" />

      <p className="mb-2 text-sm text-primary">{period}</p>

      <h3 className="mb-1 text-xl">{title}</h3>

      <p className="mb-2 text-muted-foreground">{organization}</p>

      {description && (
        <p className="text-sm leading-relaxed text-muted-foreground/70">{description}</p>
      )}

      {highlights && highlights.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground/80">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
