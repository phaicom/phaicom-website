<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/phaicom/ecommerce',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features.',
    technologies: ['React', 'Firebase', 'TypeScript'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/phaicom/task-app',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with forecasts and location-based weather data.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/phaicom/weather',
    color: 'from-amber-500 to-orange-600',
  },
]
</script>

<template>
  <section class="section-padding">
    <div class="container-artistic">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p class="text-accent mb-4 text-sm font-medium tracking-wider uppercase">
          Portfolio
        </p>
        <h2
          class="
            text-charcoal text-3xl font-semibold
            lg:text-4xl
          "
        >
          Selected Projects
        </h2>
        <p class="text-warm-gray mx-auto mt-4 max-w-2xl">
          A collection of projects that showcase my expertise in full-stack development, from concept to deployment.
        </p>
      </div>

      <!-- Projects Grid -->
      <div
        class="
          grid gap-8
          md:grid-cols-2
          lg:grid-cols-3
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
              relative h-48 overflow-hidden rounded-t-2xl bg-linear-to-br p-6
            "
            :class="project.color"
          >
            <div class="absolute inset-0 bg-black/10" />
            <div class="relative flex h-full items-end">
              <h3 class="text-2xl font-semibold text-white">
                {{ project.title }}
              </h3>
            </div>
            <!-- Decorative circles -->
            <div
              class="
                absolute top-4 right-4 size-20 rounded-full bg-white/10 blur-xl
              "
            />
            <div
              class="
                absolute -right-8 -bottom-8 size-32 rounded-full bg-white/5
              "
            />
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <p class="text-warm-gray text-sm/relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="skill-tag"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="mt-6 flex items-center gap-4">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="
                  link-hover text-charcoal flex items-center gap-1 text-sm
                  font-medium
                "
              >
                Live Demo
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="
                  link-hover text-warm-gray flex items-center gap-1 text-sm
                  font-medium
                "
              >
                GitHub
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- View All Link -->
      <div class="mt-12 text-center">
        <NuxtLink
          to="/projects"
          class="
            border-soft-border text-charcoal
            hover:border-charcoal hover:bg-charcoal
            inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm
            font-medium transition-all
            hover:text-white
          "
        >
          View All Projects
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
