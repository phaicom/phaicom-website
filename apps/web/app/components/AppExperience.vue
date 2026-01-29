<script setup lang="ts">
const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'HFM',
    period: 'Aug 2025 – Present',
    description: 'Developed localized promotion and marketing pages for multiple Asian markets, ensuring SEO optimization, responsiveness, and performance across regions.',
    technologies: ['React.js', 'SEO', 'Responsive Design'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Freelance',
    period: 'Mar 2022 – Jul 2025',
    description: 'Developed and maintained a parcel shipping website with shipment tracking, order management, and secure payment processing.',
    technologies: ['Vue 2', 'React', 'Node.js', 'Payment Processing'],
  },
  {
    title: 'Frontend Developer',
    company: 'Zrch',
    period: 'Jun 2021 – Mar 2022',
    description: 'Upgraded and refactored the Zrch property advertisement website, migrating from Vue 2 to Vue 3 + Vite.',
    technologies: ['Vue 3', 'Vite', 'Material Design'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Apar Technologies',
    period: 'Oct 2020 – Jul 2021',
    description: 'Developed and maintained The 1 website, implementing new features and resolving bugs.',
    technologies: ['Node.js', 'API Gateway', 'TypeScript'],
  },
]
</script>

<template>
  <section class="section-padding bg-cream-dark/50">
    <div class="container-artistic">
      <!-- Section Header -->
      <div class="mb-16">
        <p class="text-accent mb-4 text-sm font-medium tracking-wider uppercase">
          Career
        </p>
        <h2
          class="
            text-charcoal text-3xl font-semibold
            lg:text-4xl
          "
        >
          Work Experience
        </h2>
      </div>

      <!-- Timeline -->
      <div class="space-y-8">
        <div
          v-for="(job, index) in experiences"
          :key="index"
          class="timeline-item"
        >
          <div
            class="
              card-glass p-6
              lg:p-8
            "
          >
            <div
              class="
                flex flex-col gap-4
                lg:flex-row lg:items-start lg:justify-between
              "
            >
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-charcoal text-lg font-semibold">
                    {{ job.title }}
                  </h3>
                  <span class="text-warm-gray text-sm">@ {{ job.company }}</span>
                </div>
                <p class="text-warm-gray mt-3 text-sm/relaxed">
                  {{ job.description }}
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span
                    v-for="tech in job.technologies"
                    :key="tech"
                    class="skill-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <span class="text-accent shrink-0 text-sm font-medium">
                {{ job.period }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
