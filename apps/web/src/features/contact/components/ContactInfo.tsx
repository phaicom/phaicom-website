import MdiEmail from "~icons/mdi/email";
import MdiGithub from "~icons/mdi/github";
import MdiMapMarkerMultipleOutline from "~icons/mdi/map-marker-multiple-outline";
import MdiPhone from "~icons/mdi/phone";

import { CONTACT } from "@/config/contact";
import { SectionCard } from "@/shared/components";

export default function ContactInfo() {
  return (
    <SectionCard
      eyebrow="Direct contact"
      title="Start with the role or problem."
      description="Email or call about senior full-stack and product engineering work."
      className="h-full xl:border-r xl:pr-16"
      contentClassName="max-w-none"
      headerClassName="md:grid-cols-1"
    >
      <div className="border-t border-border">
        <div className="flex items-center gap-4 border-b border-border py-5">
          <MdiEmail className="h-5 w-5 text-primary" />
          <a
            href={`mailto:${CONTACT.email}`}
            title={CONTACT.email}
            className="min-w-0 text-sm break-all transition-colors hover:text-primary/80 sm:text-base"
          >
            {CONTACT.email}
          </a>
        </div>

        <div className="flex items-center gap-4 border-b border-border py-5">
          <MdiMapMarkerMultipleOutline className="h-5 w-5 text-primary" />
          <span className="text-sm sm:text-base">{CONTACT.location}</span>
        </div>
        <a
          href={`tel:${CONTACT.phone.replaceAll("-", "")}`}
          className="flex items-center gap-4 border-b border-border py-5 transition-colors hover:text-primary"
        >
          <MdiPhone className="h-5 w-5 text-primary" />
          <span>{CONTACT.phone}</span>
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 border-b border-border py-5 transition-colors hover:text-primary"
        >
          <MdiGithub className="h-5 w-5 text-primary" />
          <span>GitHub</span>
        </a>
      </div>
    </SectionCard>
  );
}
