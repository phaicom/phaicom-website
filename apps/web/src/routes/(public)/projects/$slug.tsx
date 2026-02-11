import { createFileRoute } from "@tanstack/react-router";

import ProjectDetailPage from "@/features/projects/ProjectDetailPage";

export const Route = createFileRoute("/(public)/projects/$slug")({
  component: ProjectDetailPage,
});
