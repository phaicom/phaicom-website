import { PageHero } from "@/shared/components";

export default function HomeHero() {
  return (
    <div className="relative">
      {/* Decorative gradient background */}
      <div className="absolute -inset-3 rounded-[2.25rem] bg-linear-to-br from-primary/8 via-accent/12 to-primary/6 opacity-70 blur-sm" />

      {/* Decorative accent shapes */}
      <div className="absolute -top-3 -right-3 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />

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
            <p className="font-medium text-foreground/85">Vue, React, Node.js, and Golang.</p>
            <p>
              Bangkok-based engineer with 7+ years of experience delivering web platforms used by
              regional markets, enterprise teams, and product-driven businesses.
            </p>
            <p>
              I focus on shipping maintainable systems, performance-aware frontend experiences
              across modern JavaScript frameworks, and backend services that support long-term
              product growth.
            </p>
          </>
        }
        stats={[
          { label: "Years building", value: "7+" },
          { label: "Core focus", value: "Vue + React + JS" },
          { label: "Based in", value: "Bangkok" },
          { label: "Delivery style", value: "Product-led" },
        ]}
      />
    </div>
  );
}
