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
    icon: '📦',
    technologies: ['React', 'Node.js', 'Payment Gateway', 'Real-time Tracking'],
    demo: null,
    github: null,
  },
  {
    id: 2,
    title: 'Furniture Resale Admin Dashboard',
    description: 'Built an admin dashboard for a furniture resale platform using Vue 2. Features include inventory management, sales data visualization, customer interactions, sales analytics, and customizable reports.',
    icon: '🪑',
    technologies: ['Vue 2', 'Charts', 'Data Management', 'Reporting'],
    demo: null,
    github: null,
  },
  {
    id: 3,
    title: 'CRM System',
    description: 'Designed and developed a custom CRM system for managing leads, clients, and sales pipelines. Implemented automated follow-ups, role-based access control, and comprehensive reporting dashboards.',
    icon: '📊',
    technologies: ['React.js', 'CRM', 'RBAC', 'Automation'],
    demo: null,
    github: null,
  },
  {
    id: 4,
    title: 'Property Advertisement Platform (Zrch)',
    description: 'Upgraded and refactored from Vue 2 to Vue 3 + Vite. Built admin dashboard with interactive charts for property data visualization. Improved build times and scalability.',
    icon: '🏠',
    technologies: ['Vue 3', 'Vite', 'Material Design', 'Charts'],
    demo: null,
    github: null,
  },
  {
    id: 5,
    title: 'The 1 Rewards Platform',
    description: 'Developed and maintained The 1 website with new features and bug fixes. Designed API gateway for optimized request routing and performance monitoring.',
    icon: '🎁',
    technologies: ['Node.js', 'API Gateway', 'TypeScript', 'Performance'],
    demo: null,
    github: null,
  },
  {
    id: 6,
    title: 'Localized Marketing Pages (HFM)',
    description: 'Developed localized promotion and marketing pages for multiple Asian markets with SEO optimization, responsiveness, and high performance across different regions.',
    icon: '🌏',
    technologies: ['React.js', 'SEO', 'i18n', 'Responsive Design'],
    demo: null,
    github: null,
  },
]
</script>

<template>
  <div class="py-16">
    <div
      class="
        mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <h1
        class="
          mb-4 text-4xl font-bold text-gray-900
          dark:text-white
        "
      >
        Selected Projects
      </h1>
      <p
        class="
          mb-12 max-w-3xl text-lg text-gray-600
          dark:text-gray-400
        "
      >
        A collection of projects showcasing my expertise in full-stack development, from shipping platforms to admin dashboards.
      </p>

      <div
        class="
          grid gap-8
          md:grid-cols-2
        "
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="
            group overflow-hidden rounded-xl bg-white shadow-sm
            transition-shadow
            hover:shadow-lg
            dark:bg-gray-800
          "
        >
          <div
            class="
              flex h-56 items-center justify-center bg-linear-to-br
              from-indigo-500 to-purple-600
            "
          >
            <span class="text-7xl opacity-50">{{ project.icon }}</span>
          </div>
          <div class="p-6">
            <h3
              class="
                text-2xl font-semibold text-gray-900 transition-colors
                group-hover:text-indigo-600
                dark:text-white
                dark:group-hover:text-indigo-400
              "
            >
              {{ project.title }}
            </h3>
            <p
              class="
                mt-3 text-gray-600
                dark:text-gray-400
              "
            >
              {{ project.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="
                  rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700
                  dark:bg-gray-700 dark:text-gray-300
                "
              >
                {{ tech }}
              </span>
            </div>
            <div class="mt-6 flex flex-wrap gap-4">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  inline-flex items-center gap-2 font-medium text-indigo-600
                  hover:underline
                  dark:text-indigo-400
                "
              >
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  inline-flex items-center gap-2 font-medium text-indigo-600
                  hover:underline
                  dark:text-indigo-400
                "
              >
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
