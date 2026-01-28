<script setup lang="ts">
const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'HFM',
    period: 'Aug 2025 – Present',
    description: 'Developed localized promotion and marketing pages for multiple Asian markets, ensuring SEO optimization, responsiveness, and performance across regions. Collaborated with the headquarters team, contributing in an international environment to align regional initiatives with global marketing strategy.',
    technologies: ['React.js', 'SEO', 'Responsive Design', 'International Teams'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Freelance',
    period: 'Mar 2022 – Jul 2025',
    description: 'Developed and maintained a parcel shipping website with shipment tracking, order management, and secure payment processing. Designed and built an admin dashboard for a furniture resale platform using Vue 2 with inventory management, sales data, and customer interactions. Implemented sales analytics, customizable reports, and efficient data management tools.',
    technologies: ['Vue 2', 'React', 'Node.js', 'Payment Processing', 'Analytics'],
  },
  {
    title: 'Frontend Developer',
    company: 'Zrch',
    period: 'Jun 2021 – Mar 2022',
    description: 'Upgraded and refactored the Zrch property advertisement website, migrating from Vue 2 monolithic architecture to Vue 3 + Vite, improving build times and scalability. Incorporated Material Design principles to enhance visual appeal. Built an admin dashboard with interactive charts and tables for property data visualization. Developed comprehensive unit tests, reducing defects in new features.',
    technologies: ['Vue 3', 'Vite', 'Material Design', 'Charts', 'Unit Testing'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Apar Technologies',
    period: 'Oct 2020 – Jul 2021',
    description: 'Developed and maintained The 1 website, implementing new features and resolving bugs. Designed and maintained an API gateway, defining endpoints, optimizing request routing, and monitoring system performance. Refactored The 1 referral website, optimizing codebase for performance and enhancing UI for improved usability.',
    technologies: ['Node.js', 'API Gateway', 'TypeScript', 'Performance Optimization'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Freelance',
    period: 'Oct 2019 – Oct 2020',
    description: 'Designed and developed a custom CRM system for managing leads, clients, and sales pipelines. Implemented automated follow-ups, role-based access control, and reporting dashboards to improve client response times and sales visibility.',
    technologies: ['React.js', 'CRM', 'Role-Based Access', 'Reporting'],
  },
]
</script>

<template>
  <section
    class="
      bg-gray-50 py-20
      dark:bg-gray-900
    "
  >
    <div
      class="
        mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="mb-12">
        <h2
          class="
            text-3xl font-bold text-gray-900
            dark:text-white
          "
        >
          Experience
        </h2>
        <p
          class="
            mt-2 text-gray-600
            dark:text-gray-400
          "
        >
          My professional journey
        </p>
      </div>
      <div class="space-y-6">
        <div
          v-for="(job, index) in experiences"
          :key="index"
          class="
            group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
            dark:bg-gray-800
          "
        >
          <!-- Accent bar -->
          <div
            class="
              absolute top-0 left-0 h-1 w-full bg-linear-to-r from-indigo-600
              to-purple-600 opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
          />
          <div
            class="
              flex flex-col gap-4
              sm:flex-row sm:items-start sm:justify-between
            "
          >
            <div class="flex-1">
              <div class="flex items-center gap-3">
                <h3
                  class="
                    text-xl font-semibold text-gray-900
                    dark:text-white
                  "
                >
                  {{ job.title }}
                </h3>
                <span
                  class="
                    rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium
                    text-indigo-700
                    dark:bg-indigo-900/30 dark:text-indigo-400
                  "
                >
                  {{ job.company }}
                </span>
              </div>
              <p
                class="
                  mt-2 text-gray-600
                  dark:text-gray-400
                "
              >
                {{ job.description }}
              </p>
            </div>
            <div
              class="
                flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2
                text-gray-600
                dark:bg-gray-700 dark:text-gray-400
              "
            >
              <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-sm font-medium">{{ job.period }}</span>
            </div>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tech in job.technologies"
              :key="tech"
              class="
                rounded-full bg-gray-100 px-3 py-1 text-sm font-medium
                text-gray-700 transition-colors duration-200
                group-hover:bg-indigo-100 group-hover:text-indigo-700
                dark:bg-gray-700 dark:text-gray-300
                dark:group-hover:bg-indigo-900/30
                dark:group-hover:text-indigo-400
              "
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
