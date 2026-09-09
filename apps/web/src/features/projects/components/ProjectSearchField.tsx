type ProjectSearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
};

export function ProjectSearchField({ value, onChange, resultCount }: ProjectSearchFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-foreground">Search case studies</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search by project, stack, or category"
          className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary"
          aria-label="Search projects"
        />
      </label>
      <p aria-live="polite" className="text-xs text-muted-foreground">
        {resultCount} {resultCount === 1 ? "project" : "projects"} matched
      </p>
    </div>
  );
}
