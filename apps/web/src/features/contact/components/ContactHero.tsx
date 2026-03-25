import { CONTACT } from "@/config/contact";
import { PageHero } from "@/shared/components";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Direct contact for product, platform, and consulting work."
      description={
        <>
          <p>
            Open to senior frontend and full-stack roles, long-term product teams, and focused
            engineering engagements where execution quality matters.
          </p>
          <p>{CONTACT.email}</p>
        </>
      }
    />
  );
}
