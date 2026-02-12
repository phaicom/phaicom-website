import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <ContactHero />

      <div className="grid gap-10 lg:grid-cols-2">
        <ContactInfo />
        <div />
      </div>
    </div>
  );
}
