<script setup lang="ts">
useHead({
  title: 'Projects - Reawpai Chunsoi',
  meta: [
    { name: 'description', content: 'Explore my selected projects showcasing full-stack development expertise' },
  ],
})

const projects = [
  {
    id: 1,
    title: 'Parcel Shipping Platform',
    description: 'Developed and maintained a full-featured parcel shipping website with shipment tracking, order management, and secure payment processing. Implemented real-time tracking updates and multiple carrier integrations.',
    technologies: ['React', 'Node.js', 'Payment Gateway', 'Real-time Tracking'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Furniture Resale Admin Dashboard',
    description: 'Built an admin dashboard for a furniture resale platform using Vue 2. Features include inventory management, sales data visualization, customer interactions, sales analytics, and customizable reports.',
    technologies: ['Vue 2', 'Charts', 'Data Management', 'Reporting'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 3,
    title: 'CRM System',
    description: 'Designed and developed a custom CRM system for managing leads, clients, and sales pipelines. Implemented automated follow-ups, role-based access control, and comprehensive reporting dashboards.',
    technologies: ['React.js', 'CRM', 'RBAC', 'Automation'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    title: 'Property Advertisement Platform (Zrch)',
    description: 'Upgraded and refactored from Vue 2 to Vue 3 + Vite. Built admin dashboard with interactive charts for property data visualization. Improved build times and scalability.',
    technologies: ['Vue 3', 'Vite', 'Material Design', 'Charts'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 5,
    title: 'The 1 Rewards Platform',
    description: 'Developed and maintained The 1 website with new features and bug fixes. Designed API gateway for optimized request routing and performance monitoring.',
    technologies: ['Node.js', 'API Gateway', 'TypeScript', 'Performance'],
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 6,
    title: 'Localized Marketing Pages (HFM)',
    description: 'Developed localized promotion and marketing pages for multiple Asian markets with SEO optimization, responsiveness, and high performance across different regions.',
    technologies: ['React.js', 'SEO', 'i18n', 'Responsive Design'],
    color: 'from-cyan-500 to-blue-600',
  },
]
</script>

<template>
  <div class="pt-32">
    <section class="section-padding pt-0">
      <div class="container-artistic">
        <!-- Header -->
        <div class="mb-16 text-center">
          <p
            class="
              text-accent mb-4 text-sm font-medium tracking-wider uppercase
            "
          >
            Portfolio
          </p>
          <h1
            class="
              text-charcoal text-4xl font-semibold
              lg:text-5xl
            "
          >
            Selected Projects
          </h1>
          <p class="text-warm-gray mx-auto mt-4 max-w-2xl">
            A collection of projects showcasing my expertise in full-stack development, from shipping platforms to admin dashboards.
          </p>
        </div>

        <!-- Projects Grid -->
        <div
          class="
            grid gap-8
            md:grid-cols-2
          "
        >
          <article
            v-for="(project, index) in projects"
            :key="project.id"
            class="card-3d group"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Card Header with Gradient -->
            <div
              class="
                relative h-56 overflow-hidden rounded-t-2xl bg-linear-to-br p-8
              "
              :class="project.color"
            >
              <div class="absolute inset-0 bg-black/10" />
              <div class="relative flex h-full flex-col justify-end">
                <span
                  class="
                    mb-2 text-xs font-medium tracking-wider text-white/80
                    uppercase
                  "
                >
                  Project {{ String(index + 1).padStart(2, '0') }}
                </span>
                <h2
                  class="
                    text-2xl font-semibold text-white
                    lg:text-3xl
                  "
                >
                  {{ project.title }}
                </h2>
              </div>
              <!-- Decorative elements -->
              <div
                class="
                  absolute top-6 right-6 size-24 rounded-full bg-white/10
                  blur-2xl
                "
              />
              <div
                class="
                  absolute -right-10 -bottom-10 size-40 rounded-full bg-white/5
                "
              />
            </div>

            <!-- Card Content -->
            <div
              class="
                p-6
                lg:p-8
              "
            >
              <p class="text-warm-gray leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="skill-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
