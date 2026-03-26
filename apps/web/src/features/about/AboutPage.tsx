import AboutHero from "./components/AboutHero";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";

export default function ResumePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:gap-12">
      <AboutHero />
      <EducationSection />
      <ExperienceSection />
    </div>
  );
}
