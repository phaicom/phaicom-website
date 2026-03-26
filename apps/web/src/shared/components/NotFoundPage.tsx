import { Link } from "@tanstack/react-router";

import MainLayout from "@/shared/layout/MainLayout";

export function NotFoundPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden rounded-4xl border border-border/70 bg-card/88 px-5 py-8 shadow-[0_24px_55px_-38px_rgba(42,53,22,0.4)] backdrop-blur-sm sm:px-8 sm:py-10 lg:rounded-[2.25rem] lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primary/8 via-accent/5 to-transparent" />
        <div className="pointer-events-none absolute -right-12 -bottom-16 h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute top-8 -left-10 h-28 w-28 rounded-full bg-accent/12 blur-3xl" />

        <div className="relative mx-auto flex max-w-3xl flex-col gap-8">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase">
              Page not found
            </p>
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
                Error 404
              </p>
              <h1 className="max-w-2xl text-[2.15rem] font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                This page wandered off the sitemap.
              </h1>
            </div>
            <p className="max-w-2xl text-[0.98rem] leading-7 text-muted-foreground sm:text-base sm:leading-8">
              The link may be outdated, or the address might be mistyped. You can jump back to the
              main pages below.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-lg border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Go home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center rounded-lg border border-border bg-background/75 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-accent"
            >
              Browse projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border border-border bg-background/75 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-accent"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
