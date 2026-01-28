<script setup lang="ts">
useHead({
  title: 'Blog - Phaicom',
  meta: [
    { name: 'description', content: 'Thoughts, tutorials, and experiments from Phaicom' },
  ],
})

const posts = [
  {
    id: 1,
    title: 'Building a Modern Web App with Nuxt 3',
    slug: 'building-modern-web-app-nuxt-3',
    excerpt: 'Learn how to build a modern web application using Nuxt 3. This comprehensive guide covers everything from project setup to deployment, including routing, data fetching, and state management.',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    emoji: '⚡',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices for 2024',
    slug: 'typescript-best-practices-2024',
    excerpt: 'Discover the latest TypeScript best practices and patterns that will help you write better, more maintainable code. From advanced types to utility functions, this guide has it all.',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
    emoji: '📘',
  },
  {
    id: 3,
    title: 'My Developer Setup and Tools',
    slug: 'developer-setup-tools',
    excerpt: 'A look at my current development setup, including hardware, software, and VS Code extensions. See what tools I use to be more productive as a developer.',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    emoji: '🛠️',
  },
  {
    id: 4,
    title: 'Understanding Vue 3 Composition API',
    slug: 'understanding-vue-3-composition-api',
    excerpt: 'Deep dive into the Vue 3 Composition API. Learn how to use ref, reactive, computed, and watchEffect to build better Vue applications.',
    date: 'Dec 15, 2023',
    readTime: '10 min read',
    emoji: '🎯',
  },
  {
    id: 5,
    title: 'CSS Grid vs Flexbox: When to Use Which',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox. Learn when to use each layout system and how to combine them for powerful layouts.',
    date: 'Dec 1, 2023',
    readTime: '7 min read',
    emoji: '📐',
  },
  {
    id: 6,
    title: 'Building a REST API with Node.js',
    slug: 'building-rest-api-nodejs',
    excerpt: 'Step-by-step guide to building a RESTful API with Node.js, Express, and MongoDB. Includes authentication, validation, and error handling.',
    date: 'Nov 20, 2023',
    readTime: '12 min read',
    emoji: '🌐',
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
        Blog
      </h1>
      <p
        class="
          mb-12 max-w-3xl text-lg text-gray-600
          dark:text-gray-400
        "
      >
        Thoughts, tutorials, and experiments. Sharing knowledge and learning along the way.
      </p>

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
            overflow-hidden rounded-xl bg-white shadow-sm transition-shadow
            hover:shadow-lg
            dark:bg-gray-800
          "
        >
          <div
            class="
              flex h-48 items-center justify-center bg-linear-to-br
              from-indigo-500 to-purple-600
            "
          >
            <span class="text-6xl opacity-50">{{ post.emoji }}</span>
          </div>
          <div class="p-6">
            <div
              class="
                mb-3 flex items-center gap-2 text-sm text-gray-500
                dark:text-gray-400
              "
            >
              <span>{{ post.date }}</span>
              <span>•</span>
              <span>{{ post.readTime }}</span>
            </div>
            <h2
              class="
                text-xl font-semibold text-gray-900 transition-colors
                hover:text-indigo-600
                dark:text-white
                dark:hover:text-indigo-400
              "
            >
              <NuxtLink :to="`/blog/${post.slug}`">
                {{ post.title }}
              </NuxtLink>
            </h2>
            <p
              class="
                mt-3 line-clamp-3 text-sm text-gray-600
                dark:text-gray-400
              "
            >
              {{ post.excerpt }}
            </p>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="
                mt-4 inline-flex items-center gap-1 text-sm font-medium
                text-indigo-600
                hover:underline
                dark:text-indigo-400
              "
            >
              Read more
              <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
