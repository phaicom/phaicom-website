import type { CSSProperties } from "react";

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
    <div
      style={{ "--enter-delay": `${index * 100}ms` } as CSSProperties}
      className="enter-fade-left relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-background/88 p-5 pl-5 shadow-[0_16px_40px_-34px_rgba(42,53,22,0.42)] sm:p-6 sm:pl-10"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-primary via-primary/70 to-transparent sm:inset-y-6 sm:left-0 sm:h-16 sm:w-1.5 sm:rounded-r sm:bg-primary" />

      <p className="mb-2 pt-3 text-sm font-medium text-primary sm:pt-0">{period}</p>

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
    </div>
  );
}
