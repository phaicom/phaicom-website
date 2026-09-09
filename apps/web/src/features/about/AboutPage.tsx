import AboutHero from "./components/AboutHero";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import LanguagesSection from "./components/LanguagesSection";

export default function AboutPage() {
  return (
    <div className="section-shell">
      <AboutHero />
      <ExperienceSection />
      <EducationSection />
      <LanguagesSection />
    </div>
  );
}
