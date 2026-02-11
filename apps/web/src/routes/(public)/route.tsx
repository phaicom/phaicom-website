import { Outlet, createFileRoute } from "@tanstack/react-router";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/(public)")({
  component: Layout,
});

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
