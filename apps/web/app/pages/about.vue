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
  'Full-Stack Development',
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
  'DevOps',
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
  <div class="py-20">
    <!-- Hero Section -->
    <div
      class="
        mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="mb-16">
        <h1
          class="
            mb-6 text-4xl font-bold text-gray-900
            dark:text-white
          "
        >
          About Me
        </h1>
        <div
          class="
            prose prose-lg
            dark:prose-invert
            max-w-none
          "
        >
          <p
            class="
              text-lg text-gray-600
              dark:text-gray-300
            "
          >
            Results-driven Full-Stack Engineer with 6+ years of experience delivering high-performance, scalable web applications. Skilled in React, Vue, and TypeScript, with backend expertise in Node.js/Nest.js, and currently expanding into Golang for high-scale services. Familiar with Docker, CI/CD, and DevOps practices.
          </p>
          <p
            class="
              text-lg text-gray-600
              dark:text-gray-300
            "
          >
            Passionate about clean code, performance optimization, and team mentorship. I've delivered user-facing platforms and admin dashboards for startups in various sectors, with a focus on creating scalable, maintainable solutions.
          </p>
          <p
            class="
              text-lg text-gray-600
              dark:text-gray-300
            "
          >
            Currently working as Senior Frontend Developer at HFM, developing localized promotion and marketing pages for multiple Asian markets with SEO optimization and responsive design.
          </p>
        </div>
      </div>

      <!-- Technical Skills -->
      <div class="mb-16">
        <h2
          class="
            mb-6 text-2xl font-bold text-gray-900
            dark:text-white
          "
        >
          Technical Skills
        </h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="
              rounded-full bg-linear-to-r from-indigo-100 to-purple-100 px-4
              py-2 text-sm font-medium text-indigo-800 transition-all
              duration-200
              hover:from-indigo-200 hover:to-purple-200
              dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300
              dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60
            "
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="
          grid items-start gap-8
          lg:grid-cols-2
        "
      >
        <div class="space-y-8">
          <!-- Education -->
          <div
            class="
              rounded-2xl bg-white p-8 shadow-sm transition-all duration-300
              hover:shadow-lg
              dark:bg-gray-800
            "
          >
            <h2
              class="
                mb-6 flex items-center gap-3 text-xl font-semibold text-gray-900
                dark:text-white
              "
            >
              <span
                class="
                  flex size-10 items-center justify-center rounded-xl
                  bg-linear-to-br from-indigo-600 to-purple-600
                "
              >
                <svg class="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h2>
            <div class="space-y-6">
              <div
                class="
                  relative border-l-2 border-indigo-200 pl-6
                  dark:border-indigo-800
                "
              >
                <div
                  class="
                    absolute top-2 -left-[9px] size-4 rounded-full
                    bg-linear-to-br from-indigo-600 to-purple-600
                  "
                />
                <h3
                  class="
                    font-medium text-gray-900
                    dark:text-white
                  "
                >
                  B.Sc. in Information Technology
                </h3>
                <p
                  class="
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  King Mongkut's University of Technology Thonburi (KMUTT), Thailand
                </p>
                <p
                  class="
                    text-sm text-gray-500
                    dark:text-gray-500
                  "
                >
                  2014 – 2018 | Grade: 3.26 | Graduated in 3.5 years
                </p>
              </div>
              <div
                class="
                  relative border-l-2 border-indigo-200 pl-6
                  dark:border-indigo-800
                "
              >
                <div
                  class="
                    absolute top-2 -left-[9px] size-4 rounded-full
                    bg-linear-to-br from-indigo-600 to-purple-600
                  "
                />
                <h3
                  class="
                    font-medium text-gray-900
                    dark:text-white
                  "
                >
                  Upper-Intermediate English
                </h3>
                <p
                  class="
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Shafston International College, Brisbane, Australia
                </p>
                <p
                  class="
                    text-sm text-gray-500
                    dark:text-gray-500
                  "
                >
                  2018
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Languages -->
          <div
            class="
              rounded-2xl bg-white p-8 shadow-sm transition-all duration-300
              hover:shadow-lg
              dark:bg-gray-800
            "
          >
            <h2
              class="
                mb-6 flex items-center gap-3 text-xl font-semibold text-gray-900
                dark:text-white
              "
            >
              <span
                class="
                  flex size-10 items-center justify-center rounded-xl
                  bg-linear-to-br from-blue-600 to-indigo-600
                "
              >
                <svg class="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </span>
              Languages
            </h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3
                  class="
                    font-medium text-gray-900
                    dark:text-white
                  "
                >
                  Thai
                </h3>
                <span
                  class="
                    rounded-full bg-green-100 px-3 py-1 text-xs font-medium
                    text-green-800
                    dark:bg-green-900/30 dark:text-green-400
                  "
                >
                  Native
                </span>
              </div>
              <div class="flex items-center justify-between">
                <h3
                  class="
                    font-medium text-gray-900
                    dark:text-white
                  "
                >
                  English
                </h3>
                <span
                  class="
                    rounded-full bg-blue-100 px-3 py-1 text-xs font-medium
                    text-blue-800
                    dark:bg-blue-900/30 dark:text-blue-400
                  "
                >
                  Upper-Intermediate
                </span>
              </div>
            </div>
          </div>

          <!-- Interests -->
          <div
            class="
              rounded-2xl bg-white p-8 shadow-sm transition-all duration-300
              hover:shadow-lg
              dark:bg-gray-800
            "
          >
            <h2
              class="
                mb-6 flex items-center gap-3 text-xl font-semibold text-gray-900
                dark:text-white
              "
            >
              <span
                class="
                  flex size-10 items-center justify-center rounded-xl
                  bg-linear-to-br from-purple-600 to-pink-600
                "
              >
                <svg class="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              Interests
            </h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="interest in interests"
                :key="interest"
                class="
                  rounded-full bg-gray-100 px-3 py-1 text-sm font-medium
                  text-gray-700 transition-colors duration-200
                  hover:bg-indigo-100 hover:text-indigo-700
                  dark:bg-gray-700 dark:text-gray-300
                  dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400
                "
              >
                {{ interest }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
