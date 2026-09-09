import { CONTACT } from "@/config/contact";
import { PageHero } from "@/shared/components";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Let’s build something that holds up."
      description={
        <>
          <p>
            For senior frontend, full stack, and product engineering conversations where execution
            quality and maintainable architecture matter.
          </p>
          <p>{CONTACT.email}</p>
        </>
      }
    />
  );
}
