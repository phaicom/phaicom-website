type Props = {
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  className?: string;
};

export function PageHeader({ title, subtitle, description, className = "" }: Props) {
  return (
    <div className={className}>
      <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl">{title}</h1>

      <div className="mb-6 h-1 w-12 bg-primary lg:mb-8" />

      {subtitle && <h2 className="mb-4 text-xl text-muted-foreground">{subtitle}</h2>}

      {description && (
        <div className="mb-12 space-y-4 leading-relaxed text-muted-foreground">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}
    </div>
  );
}
