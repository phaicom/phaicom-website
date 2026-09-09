import type { CSSProperties } from "react";

type Props = {
  period: string;
  title: string;
  organization: string;
  description?: string;
  highlights?: string[];
  technologies?: string[];
  index: number;
};

export function TimelineItem({
  period,
  title,
  organization,
  description,
  highlights,
  technologies,
  index,
}: Props) {
  return (
    <article
      style={{ "--enter-delay": `${index * 100}ms` } as CSSProperties}
      className="enter-fade-up grid gap-5 border-t border-border py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[13rem_minmax(0,1fr)]"
    >
      <p className="font-mono text-xs leading-6 text-primary">{period}</p>
      <div>
        <div className="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6">
          <h3 className="text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
            {title}
          </h3>
          <p className="text-sm font-semibold [overflow-wrap:anywhere] text-muted-foreground">
            {organization}
          </p>
        </div>
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
        {highlights?.length ? (
          <ul className="mt-5 grid gap-2 text-sm leading-6 text-foreground/85">
            {highlights.map((item) => (
              <li key={item} className="grid grid-cols-[1rem_1fr] gap-2">
                <span className="text-primary">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {technologies?.length ? (
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.68rem] tracking-wide text-muted-foreground uppercase">
            {technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
