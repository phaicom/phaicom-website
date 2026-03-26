import MdiEmail from "~icons/mdi/email";
import MdiMapMarkerMultipleOutline from "~icons/mdi/map-marker-multiple-outline";

import { CONTACT } from "@/config/contact";
import { SectionCard } from "@/shared/components";

export default function ContactInfo() {
  return (
    <SectionCard
      title="Let's Connect"
      description="Open to Senior Full-Stack Web Developer opportunities, product engineering roles, and technical consulting work where reliable delivery and clear architecture matter."
      className="h-full"
      contentClassName="max-w-none"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/76 px-4 py-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <MdiEmail className="h-5 w-5 text-primary" />
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            title={CONTACT.email}
            className="min-w-0 truncate text-sm transition-colors hover:text-primary/80 sm:text-base"
          >
            {CONTACT.email}
          </a>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/76 px-4 py-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <MdiMapMarkerMultipleOutline className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm sm:text-base">{CONTACT.location}</span>
        </div>
      </div>
    </SectionCard>
  );
}
