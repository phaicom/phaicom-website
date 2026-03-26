import HomeHero from "./components/HomeHero";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:gap-12">
      <HomeHero />
      <ServicesSection />
      <SkillsSection />
    </div>
  );
}
