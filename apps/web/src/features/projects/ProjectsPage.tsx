import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHero from "./components/ProjectsHero";

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12 lg:gap-16">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
}
