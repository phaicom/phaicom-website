import MdiArrowRight from "~icons/mdi/arrow-right";
import MdiDownload from "~icons/mdi/download";

export default function HomeHero() {
  return (
    <section className="grid items-center gap-10 border-b border-border py-10 sm:gap-12 sm:py-12 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-20">
      <div className="enter-fade-up">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-primary uppercase">
          Bangkok, Thailand
        </p>
        <p className="mt-12 text-sm font-semibold text-muted-foreground sm:text-base">
          Hello, I’m Reawpai.
        </p>
        <h1 className="mt-4 max-w-5xl text-[clamp(2.75rem,8vw,7.25rem)] leading-[0.9] font-semibold tracking-[-0.065em] text-balance [overflow-wrap:anywhere]">
          Senior Full Stack <span className="text-primary">Developer.</span>
        </h1>
        <p className="mt-9 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
          I build reusable, internationalized production platforms with React, Next.js, Vue, Nuxt,
          and Node.js—focused on performance, maintainable architecture, APIs, and delivery
          automation.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="/projects"
            className="group inline-flex items-center justify-center gap-3 bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-primary"
          >
            Explore projects{" "}
            <MdiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/files/Reawpai_Chunsoi_Senior_Full_Stack_Developer_Resume.pdf"
            download
            className="group inline-flex items-center justify-center gap-3 border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground"
          >
            Download resume <MdiDownload className="h-4 w-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-3 py-3.5 text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
      <dl className="grid grid-cols-2 border-t border-l border-border lg:grid-cols-1">
        {[
          { label: "Years building", value: "9+" },
          { label: "Core focus", value: "React + Vue + TS" },
          { label: "Delivery", value: "Production web" },
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
