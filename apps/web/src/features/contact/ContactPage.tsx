import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ResumeDownloadCard from "./components/ResumeDownloadCard";

export default function ContactPage() {
  return (
    <div className="section-shell">
      <ContactHero />

      <div className="grid border-b border-border xl:grid-cols-2 xl:gap-16">
        <ContactInfo />
        <ResumeDownloadCard />
      </div>
    </div>
  );
}
