import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ResumeDownloadCard from "./components/ResumeDownloadCard";

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:gap-12 lg:gap-14">
      <ContactHero />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <ContactInfo />
        <ResumeDownloadCard />
      </div>
    </div>
  );
}
