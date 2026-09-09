import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHero from "./components/ProjectsHero";

export default function ProjectsPage() {
  return (
    <div className="section-shell">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
}
