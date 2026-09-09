import { SectionCard } from "@/shared/components";

import { languages } from "../data/languages";

export default function LanguagesSection() {
  return (
    <SectionCard
      title="Languages"
      description="Languages used in daily life and professional collaboration."
    >
      <dl className="border-t border-border">
        {languages.map((language) => (
          <div
            key={language.name}
            className="grid gap-2 border-b border-border py-5 sm:grid-cols-[10rem_1fr]"
          >
            <dt className="font-semibold">{language.name}</dt>
            <dd className="text-sm text-muted-foreground sm:text-base">{language.proficiency}</dd>
          </div>
        ))}
      </dl>
    </SectionCard>
  );
}
