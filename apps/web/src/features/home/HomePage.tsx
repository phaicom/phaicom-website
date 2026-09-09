import HomeHero from "./components/HomeHero";
import SelectedWorkSection from "./components/SelectedWorkSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

export default function HomePage() {
  return (
    <div className="section-shell">
      <HomeHero />
      <ServicesSection />
      <SelectedWorkSection />
      <SkillsSection />
    </div>
  );
}
