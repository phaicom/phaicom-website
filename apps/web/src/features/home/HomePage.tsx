import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

export function HomePage() {
  return (
    <div className="mx-auto max-w-5xl">
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
    </div>
  );
}
