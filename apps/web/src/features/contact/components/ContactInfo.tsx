import MdiEmail from "~icons/mdi/email";
import MdiMapMarkerMultipleOutline from "~icons/mdi/map-marker-multiple-outline";

import { CONTACT } from "@/config/contact";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Get In Touch</h2>

      <p className="mb-8 leading-relaxed text-muted-foreground">
        Whether you have an idea, a project, or just want to connect, I'd love to hear from you.
        Let's build something meaningful together.
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
