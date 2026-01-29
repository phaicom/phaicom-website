<script setup lang="ts">
useHead({
  title: 'Blog - Reawpai Chunsoi',
  meta: [
    { name: 'description', content: 'Thoughts, tutorials, and experiments from Reawpai Chunsoi' },
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
    category: 'Development',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices for 2024',
    slug: 'typescript-best-practices-2024',
    excerpt: 'Discover the latest TypeScript best practices and patterns that will help you write better, more maintainable code. From advanced types to utility functions, this guide has it all.',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
    category: 'TypeScript',
  },
  {
    id: 3,
    title: 'My Developer Setup and Tools',
    slug: 'developer-setup-tools',
    excerpt: 'A look at my current development setup, including hardware, software, and VS Code extensions. See what tools I use to be more productive as a developer.',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    category: 'Tools',
  },
  {
    id: 4,
    title: 'Understanding Vue 3 Composition API',
    slug: 'understanding-vue-3-composition-api',
    excerpt: 'Deep dive into the Vue 3 Composition API. Learn how to use ref, reactive, computed, and watchEffect to build better Vue applications.',
    date: 'Dec 15, 2023',
    readTime: '10 min read',
    category: 'Vue.js',
  },
  {
    id: 5,
    title: 'CSS Grid vs Flexbox: When to Use Which',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox. Learn when to use each layout system and how to combine them for powerful layouts.',
    date: 'Dec 1, 2023',
    readTime: '7 min read',
    category: 'CSS',
  },
  {
    id: 6,
    title: 'Building a REST API with Node.js',
    slug: 'building-rest-api-nodejs',
    excerpt: 'Step-by-step guide to building a RESTful API with Node.js, Express, and MongoDB. Includes authentication, validation, and error handling.',
    date: 'Nov 20, 2023',
    readTime: '12 min read',
    category: 'Backend',
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
            Writing
          </p>
          <h1
            class="
              text-charcoal text-4xl font-semibold
              lg:text-5xl
            "
          >
            Blog
          </h1>
          <p class="text-warm-gray mx-auto mt-4 max-w-2xl">
            Thoughts, tutorials, and experiments. Sharing knowledge and learning along the way.
          </p>
        </div>

        <!-- Blog Grid -->
        <div
          class="
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          <article
            v-for="(post, index) in posts"
            :key="post.id"
            class="card-3d group cursor-pointer"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <NuxtLink :to="`/blog/${post.slug}`" class="block p-6">
              <!-- Meta -->
              <div class="mb-4 flex items-center gap-3">
                <span
                  class="
                    bg-accent/10 text-accent rounded-full px-3 py-1 text-xs
                    font-medium
                  "
                >
                  {{ post.category }}
                </span>
                <span class="text-warm-gray text-xs">{{ post.readTime }}</span>
              </div>

              <!-- Title -->
              <h2
                class="
                  text-charcoal
                  group-hover:text-accent
                  text-xl font-semibold transition-colors
                "
              >
                {{ post.title }}
              </h2>

              <!-- Excerpt -->
              <p
                class="text-warm-gray mt-3 line-clamp-3 text-sm/relaxed"
              >
                {{ post.excerpt }}
              </p>

              <!-- Date -->
              <div class="text-warm-gray mt-6 flex items-center gap-2 text-xs">
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ post.date }}
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
