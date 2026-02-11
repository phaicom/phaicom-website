import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHero from "./components/ProjectsHero";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
}
