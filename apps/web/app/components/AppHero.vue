<template>
  <section
    class="
      relative overflow-hidden py-20
      lg:py-32
    "
  >
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        class="
          absolute -top-40 -right-40 size-80 rounded-full bg-linear-to-br
          from-indigo-500/20 to-purple-500/20 blur-3xl
          dark:from-indigo-500/10 dark:to-purple-500/10
        "
      />
      <div
        class="
          absolute -bottom-40 -left-40 size-80 rounded-full bg-linear-to-br
          from-blue-500/20 to-indigo-500/20 blur-3xl
          dark:from-blue-500/10 dark:to-indigo-500/10
        "
      />
    </div>

    <div
      class="
        mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <div
        class="
          flex flex-col items-center justify-between gap-12
          lg:flex-row
        "
      >
        <div
          class="
            flex-1 text-center
            lg:text-left
          "
        >
          <div
            class="
              mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4
              py-2 text-sm font-medium text-indigo-600
              dark:bg-indigo-900/30 dark:text-indigo-400
            "
          >
            <span class="relative flex size-2">
              <span
                class="
                  absolute inline-flex size-full animate-ping rounded-full
                  bg-indigo-400 opacity-75
                "
              />
              <span
                class="relative inline-flex size-2 rounded-full bg-indigo-500"
              />
            </span>
            Available for work
          </div>
          <h1
            class="
              text-4xl/tight font-bold text-gray-900
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Hi, I'm <span
              class="text-gradient"
            >Reawpai Chunsoi</span>
          </h1>
          <p
            class="
              mt-2 text-lg font-semibold text-indigo-600
              dark:text-indigo-400
            "
          >
            Senior Frontend Developer
          </p>
          <p
            class="
              mt-4 max-w-2xl text-xl text-gray-600
              dark:text-gray-300
            "
          >
            Results-driven Full-Stack Engineer with 6+ years of experience delivering high-performance, scalable web applications. Skilled in React, Vue, and TypeScript, with backend expertise in Node.js/Nest.js, and currently expanding into Golang for high-scale services.
          </p>
          <div
            class="
              mt-8 flex flex-col justify-center gap-4
              sm:flex-row
              lg:justify-start
            "
          >
            <NuxtLink
              to="/projects"
              class="
                inline-flex items-center justify-center gap-2 rounded-lg
                bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3
                font-semibold text-white transition-all duration-200
                hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg
                hover:shadow-indigo-500/25
              "
            >
              View Projects
              <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="
                inline-flex items-center justify-center gap-2 rounded-lg
                border-2 border-indigo-600 px-6 py-3 font-semibold
                text-indigo-600 transition-all duration-200
                hover:bg-indigo-50
                dark:text-indigo-400
                dark:hover:bg-indigo-900/20
              "
            >
              Get in Touch
            </NuxtLink>
          </div>
        </div>
        <div
          class="
            flex flex-1 justify-center
            lg:justify-end
          "
        >
          <div class="animate-float relative">
            <div
              class="
                flex size-72 items-center justify-center rounded-full
                bg-linear-to-br from-indigo-600 via-purple-600 to-indigo-500
                shadow-2xl shadow-purple-500/30
                sm:size-96
              "
            >
              <span
                class="
                  text-8xl font-bold text-white
                  sm:text-9xl
                "
              >R</span>
            </div>
            <div
              class="
                absolute -bottom-4 -left-4 flex size-24 items-center
                justify-center rounded-2xl bg-white shadow-xl
                dark:bg-gray-800
              "
            >
              <span class="text-4xl">👨‍💻</span>
            </div>
            <div
              class="
                absolute -top-4 -right-4 flex size-20 items-center
                justify-center rounded-xl bg-white shadow-lg
                dark:bg-gray-800
              "
            >
              <span class="text-3xl">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
