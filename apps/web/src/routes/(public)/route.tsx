import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/shared/layout/MainLayout";

export const Route = createFileRoute("/(public)")({
  component: MainLayout,
});
