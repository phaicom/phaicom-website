import { Link } from "@tanstack/react-router";
import MdiArrowRight from "~icons/mdi/arrow-right";
import MdiDownload from "~icons/mdi/download";

export default function HomeHero() {
  return (
    <section className="grid items-center gap-10 border-b border-border pt-4 pb-10 sm:gap-12 sm:pt-6 sm:pb-14 lg:min-h-[min(52rem,calc(100svh-7rem))] lg:grid-cols-[minmax(0,1fr)_20rem] lg:pt-8 lg:pb-16">
      <div className="enter-fade-up">
        <p className="eyebrow">Bangkok, Thailand · Senior full-stack developer</p>
        <p className="mt-10 text-sm font-semibold text-muted-foreground sm:text-base">
          I’m Reawpai Chunsoi.
        </p>
        <h1 className="mt-4 max-w-5xl text-[clamp(2.7rem,7vw,6.25rem)] leading-[0.94] font-semibold tracking-[-0.06em] text-balance [overflow-wrap:anywhere]">
          Full-stack systems that <span className="text-primary">hold up in production.</span>
        </h1>
        <p className="mt-7 max-w-[42rem] text-base leading-8 text-muted-foreground sm:text-lg">
          Senior full-stack developer with 9+ years delivering web platforms from responsive
          interfaces and API integrations through backend services, data, and automated deployment.
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-primary"
          >
            Review case studies{" "}
            <MdiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground"
          >
            Start a conversation <MdiArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="/files/Reawpai_Chunsoi_Senior_Full_Stack_Developer_Resume.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            Resume <MdiDownload className="h-4 w-4" />
          </a>
        </div>
      </div>
      <dl className="grid grid-cols-2 border-t border-l border-border lg:grid-cols-1">
        {[
          { label: "Experience", value: "9+ years" },
          { label: "Performance", value: "55% faster load" },
          { label: "Accessibility", value: "96 / 100" },
        ].map((stat) => (
          <div key={stat.label} className="border-r border-b border-border p-5">
            <dt className="font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase">
              {stat.label}
            </dt>
            <dd className="mt-2 text-xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
