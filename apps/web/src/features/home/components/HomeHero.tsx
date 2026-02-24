import { PageHeader } from "@/shared/components";

export default function HomeHero() {
  return (
    <PageHeader
      title="Welcome"
      description={
        <>
          <p>
            Bangkok-based web developer specializing in React, Vue, and Node.js, building scalable
            and impactful web applications.
          </p>
          <p>
            Passionate about modern web technologies, adaptable across frameworks, and committed to
            clean architecture and high-quality digital products.
          </p>
        </>
      }
    />
  );
}
