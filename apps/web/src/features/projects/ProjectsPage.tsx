import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHero from "./components/ProjectsHero";

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:gap-20">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
}
