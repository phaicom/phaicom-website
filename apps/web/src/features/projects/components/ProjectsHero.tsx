import { allProjects } from "content-collections";
import { motion } from "motion/react";

const numberFormatter = new Intl.NumberFormat("en-US");

export default function ProjectsHero() {
  const featuredCount = allProjects.filter((project) => project.featured).length;
  const categories = new Set(allProjects.map((project) => project.category));
  const years = allProjects
    .map((project) => new Date(project.startDate).getFullYear())
    .filter((year) => !Number.isNaN(year));
  const earliestYear = years.length ? Math.min(...years) : undefined;
  const latestYear = years.length ? Math.max(...years) : undefined;
  const timelineLabel = earliestYear && latestYear ? `${earliestYear}-${latestYear}` : "Ongoing";

  const stats = [
    { label: "Case studies", value: numberFormatter.format(allProjects.length) },
    { label: "Featured builds", value: numberFormatter.format(featuredCount) },
    { label: "Domains", value: numberFormatter.format(categories.size) },
    { label: "Timeline", value: timelineLabel },
  ];

  return (
    <section className="border-b border-border/80 pb-10 sm:pb-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.8fr)] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Projects</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
            Product and platform work, presented without the noise.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            A concise set of case studies covering frontend delivery, internal systems, backend
            services, and full-stack product work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
          className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-2"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.14 + index * 0.04, ease: "easeOut" }}
            >
              <p className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
