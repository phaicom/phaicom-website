<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: 'Building a Modern Web App with Nuxt 3',
    slug: 'building-modern-web-app-nuxt-3',
    excerpt: 'Learn how to build a modern web application using Nuxt 3, including routing, data fetching, and deployment.',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    emoji: '⚡',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices for 2024',
    slug: 'typescript-best-practices-2024',
    excerpt: 'Discover the latest TypeScript best practices and patterns that will help you write better, more maintainable code.',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
    emoji: '📘',
  },
  {
    id: 3,
    title: 'My Developer Setup and Tools',
    slug: 'developer-setup-tools',
    excerpt: 'A look at my current development setup, including hardware, software, and VS Code extensions.',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    emoji: '🛠️',
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
            Latest Posts
          </h2>
          <p
            class="
              mt-1 text-gray-600
              dark:text-gray-400
            "
          >
            Thoughts and tutorials
          </p>
        </div>
        <NuxtLink
          to="/blog"
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
        <article
          v-for="post in posts"
          :key="post.id"
          class="
            group overflow-hidden rounded-2xl bg-white shadow-sm transition-all
            duration-300
            hover:-translate-y-1 hover:shadow-xl
            dark:bg-gray-800
          "
        >
          <div
            class="
              relative flex h-40 items-center justify-center bg-linear-to-br
              from-indigo-600 via-purple-600 to-indigo-500
            "
          >
            <span class="text-6xl drop-shadow-lg filter">{{ post.emoji }}</span>
            <div
              class="
                absolute inset-0 bg-linear-to-t from-black/40 via-transparent
                to-transparent opacity-0 transition-opacity duration-300
                group-hover:opacity-100
              "
            />
          </div>
          <div class="p-6">
            <div
              class="mb-3 flex items-center gap-3 text-sm"
            >
              <span
                class="
                  rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium
                  text-indigo-700
                  dark:bg-indigo-900/30 dark:text-indigo-400
                "
              >
                {{ post.date }}
              </span>
              <span class="text-gray-400">·</span>
              <span
                class="
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {{ post.readTime }}
              </span>
            </div>
            <h3
              class="
                text-lg font-semibold text-gray-900 transition-colors
                group-hover:text-indigo-600
                dark:text-white
                dark:group-hover:text-indigo-400
              "
            >
              <NuxtLink :to="`/blog/${post.slug}`">
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p
              class="
                mt-2 line-clamp-2 text-sm text-gray-600
                dark:text-gray-400
              "
            >
              {{ post.excerpt }}
            </p>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="
                mt-4 inline-flex items-center gap-1 text-sm font-medium
                text-indigo-600 transition-all duration-200
                group-hover:translate-x-1
                hover:text-indigo-700
                dark:text-indigo-400
                dark:hover:text-indigo-300
              "
            >
              Read more
              <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
