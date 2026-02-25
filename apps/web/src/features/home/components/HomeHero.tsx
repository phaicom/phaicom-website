import { PageHeader } from "@/shared/components";

export default function HomeHero() {
  return (
    <div className="relative mb-12">
      {/* Decorative gradient background */}
      <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-primary/5 via-accent/10 to-primary/5 opacity-60" />

      {/* Decorative accent shapes */}
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />

      <PageHeader
        title="Welcome"
        description={
          <>
            <p>
              Bangkok-based web developer specializing in React, Vue, and Node.js, building scalable
              and impactful web applications.
            </p>
            <p>
              Passionate about modern web technologies, adaptable across frameworks, and committed
              to clean architecture and high-quality digital products.
            </p>
          </>
        }
      />
    </div>
  );
}
