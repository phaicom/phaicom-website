import HomeHero from "./components/HomeHero";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl">
      <HomeHero />
      <ServicesSection />
      <SkillsSection />
    </div>
  );
}
