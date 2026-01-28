<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
    icon: '🛒',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/phaicom/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features.',
    icon: '📋',
    technologies: ['React', 'Firebase', 'TypeScript'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/phaicom/task-app',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with forecasts and location-based weather data.',
    icon: '🌤️',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/phaicom/weather',
  },
]
</script>

<template>
  <section class="py-20">
    <div
      class="
        mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <div
        class="
          mb-12 flex flex-col items-center justify-between gap-4
          sm:flex-row
        "
      >
        <div>
          <h2
            class="
              text-3xl font-bold text-gray-900
              dark:text-white
            "
          >
            Featured Projects
          </h2>
          <p
            class="
              mt-1 text-gray-600
              dark:text-gray-400
            "
          >
            Some of my recent work
          </p>
        </div>
        <NuxtLink
          to="/projects"
          class="
            group inline-flex items-center gap-2 font-medium text-indigo-600
            transition-all duration-200
            hover:text-indigo-700
            dark:text-indigo-400
            dark:hover:text-indigo-300
          "
        >
          View All
          <svg
            class="
              size-4 transition-transform duration-200
              group-hover:translate-x-1
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
      <div
        class="
          grid gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="
            group overflow-hidden rounded-2xl bg-white shadow-sm transition-all
            duration-300
            hover:-translate-y-2 hover:shadow-xl
            dark:bg-gray-800
          "
        >
          <div
            class="
              relative flex h-48 items-center justify-center bg-linear-to-br
              from-indigo-600 via-purple-600 to-indigo-500
            "
          >
            <span class="text-7xl opacity-80 drop-shadow-lg filter">{{ project.icon }}</span>
            <div
              class="
                absolute inset-0 bg-linear-to-t from-black/50 via-transparent
                to-transparent opacity-0 transition-opacity duration-300
                group-hover:opacity-100
              "
            />
            <div
              class="
                absolute right-4 bottom-4 left-4 flex gap-3 opacity-0
                transition-all duration-300
                group-hover:opacity-100
              "
            >
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="
                  inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2
                  text-sm font-semibold text-gray-900 shadow-lg
                  transition-transform
                  hover:scale-105
                "
              >
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="
                  inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2
                  text-sm font-semibold text-gray-900 shadow-lg
                  transition-transform
                  hover:scale-105
                "
              >
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div class="p-6">
            <h3
              class="
                text-xl font-semibold text-gray-900 transition-colors
                group-hover:text-indigo-600
                dark:text-white
                dark:group-hover:text-indigo-400
              "
            >
              {{ project.title }}
            </h3>
            <p
              class="
                mt-2 text-sm text-gray-600
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
                  rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium
                  text-indigo-700 transition-colors duration-200
                  group-hover:bg-indigo-100 group-hover:text-indigo-800
                  dark:bg-indigo-900/30 dark:text-indigo-400
                  dark:group-hover:bg-indigo-900/50
                  dark:group-hover:text-indigo-300
                "
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
