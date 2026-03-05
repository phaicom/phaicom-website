import MdiEmail from "~icons/mdi/email";
import MdiMapMarkerMultipleOutline from "~icons/mdi/map-marker-multiple-outline";

import { CONTACT } from "@/config/contact";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Let&apos;s Connect</h2>

      <p className="mb-8 leading-relaxed text-muted-foreground">
        Open to Senior Full-Stack Web Developer opportunities, product engineering roles, and
        technical consulting work where reliable delivery and clear architecture matter.
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <MdiEmail className="h-6 w-6 text-primary" />
          <a
            href={`mailto:${CONTACT.email}`}
            title={CONTACT.email}
            className="min-w-0 truncate transition-colors hover:text-primary/80"
          >
            {CONTACT.email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <MdiMapMarkerMultipleOutline className="h-6 w-6 text-primary" />
          <span>{CONTACT.location}</span>
        </div>
      </div>
    </div>
  );
}
