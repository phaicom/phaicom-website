<script setup lang="ts">
useHead({
  title: 'About - Reawpai Chunsoi',
  meta: [
    { name: 'description', content: 'Learn more about Reawpai Chunsoi, a Senior Frontend Developer with 6+ years of experience' },
  ],
})

const skills = [
  'Vue.js',
  'React.js',
  'TypeScript',
  'Node.js',
  'Nest.js',
  'Golang',
  'JavaScript',
  'Tailwind CSS',
  'Material UI',
  'Pinia',
  'Redux Toolkit',
  'Vitest',
  'Jest',
  'Cypress',
  'GitHub Actions',
  'Docker',
  'CI/CD',
  'REST APIs',
  'GraphQL',
]

const interests = [
  'Clean Code',
  'Performance Optimization',
  'Team Mentorship',
  'Scalable Architecture',
  'Open Source',
]
</script>

<template>
  <div class="pt-32">
    <!-- Hero Section -->
    <section class="section-padding pt-0">
      <div class="container-artistic">
        <div
          class="
            grid items-start gap-16
            lg:grid-cols-2
          "
        >
          <!-- Text Content -->
          <div>
            <p
              class="
                text-accent mb-4 text-sm font-medium tracking-wider uppercase
              "
            >
              About Me
            </p>
            <h1
              class="
                text-charcoal text-4xl font-semibold
                lg:text-5xl
              "
            >
              Passionate about building
              <span class="text-gradient">great products</span>
            </h1>
            <div class="text-warm-gray mt-8 space-y-6">
              <p class="leading-relaxed">
                Results-driven Full-Stack Engineer with 6+ years of experience delivering high-performance, scalable web applications. Skilled in React, Vue, and TypeScript, with backend expertise in Node.js/Nest.js, and currently expanding into Golang for high-scale services.
              </p>
              <p class="leading-relaxed">
                Passionate about clean code, performance optimization, and team mentorship. I've delivered user-facing platforms and admin dashboards for startups in various sectors, with a focus on creating scalable, maintainable solutions.
              </p>
              <p class="leading-relaxed">
                Currently working as Senior Frontend Developer at HFM, developing localized promotion and marketing pages for multiple Asian markets with SEO optimization and responsive design.
              </p>
            </div>

            <!-- Quick Stats -->
            <div class="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p class="text-charcoal text-3xl font-semibold">
                  6+
                </p>
                <p class="text-warm-gray mt-1 text-sm">
                  Years Experience
                </p>
              </div>
              <div>
                <p class="text-charcoal text-3xl font-semibold">
                  50+
                </p>
                <p class="text-warm-gray mt-1 text-sm">
                  Projects
                </p>
              </div>
              <div>
                <p class="text-charcoal text-3xl font-semibold">
                  4
                </p>
                <p class="text-warm-gray mt-1 text-sm">
                  Companies
                </p>
              </div>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="card-glass p-8">
              <h3 class="text-charcoal mb-6 text-lg font-semibold">
                Technical Skills
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skills"
                  :key="skill"
                  class="skill-tag"
                >
                  {{ skill }}
                </span>
              </div>

              <h3 class="text-charcoal mt-8 mb-4 text-lg font-semibold">
                Interests
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="interest in interests"
                  :key="interest"
                  class="
                    bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm
                  "
                >
                  {{ interest }}
                </span>
              </div>
            </div>

            <!-- Decorative element -->
            <div
              class="
                from-accent/20 to-accent-dark/20 absolute -right-4 -bottom-4
                -z-10 size-32 rounded-2xl bg-linear-to-br
              "
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="section-padding bg-cream-dark/50">
      <div class="container-artistic">
        <p class="text-accent mb-4 text-sm font-medium tracking-wider uppercase">
          Background
        </p>
        <h2 class="text-charcoal mb-12 text-3xl font-semibold">
          Education
        </h2>

        <div class="max-w-2xl">
          <div class="timeline-item">
            <div class="card-glass p-6">
              <div
                class="
                  flex flex-col gap-2
                  sm:flex-row sm:items-start sm:justify-between
                "
              >
                <div>
                  <h3 class="text-charcoal text-lg font-semibold">
                    B.Sc. in Information Technology
                  </h3>
                  <p class="text-warm-gray">
                    King Mongkut's University of Technology Thonburi (KMUTT), Thailand
                  </p>
                </div>
                <span class="text-accent shrink-0 text-sm font-medium">2014 – 2018</span>
              </div>
              <p class="text-warm-gray mt-3 text-sm">
                Grade: 3.26 | Graduated in 3.5 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
