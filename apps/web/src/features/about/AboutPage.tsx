import AboutHero from "./components/AboutHero";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl">
      <AboutHero />
      <EducationSection />
      <ExperienceSection />
    </div>
  );
}
