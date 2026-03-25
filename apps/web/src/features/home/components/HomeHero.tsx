import { PageHero } from "@/shared/components";

export default function HomeHero() {
  return (
    <div className="relative mb-12">
      {/* Decorative gradient background */}
      <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-primary/5 via-accent/10 to-primary/5 opacity-60" />

      {/* Decorative accent shapes */}
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />

      <PageHero
        className="relative"
        eyebrow="Bangkok, Thailand"
        title={
          <>
            Senior Full-Stack <span className="whitespace-nowrap">Web Developer</span>
          </>
        }
        description={
          <>
            <p className="font-medium text-foreground/85">React, Vue, Node.js, and Golang.</p>
            <p>
              Bangkok-based engineer with 7+ years of experience delivering web platforms used by
              regional markets, enterprise teams, and product-driven businesses.
            </p>
            <p>
              I focus on shipping maintainable systems, performance-aware frontend experiences, and
              backend services that support long-term product growth.
            </p>
          </>
        }
      />
    </div>
  );
}
