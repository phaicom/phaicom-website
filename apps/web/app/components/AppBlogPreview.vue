<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: 'Building a Modern Web App with Nuxt 3',
    slug: 'building-modern-web-app-nuxt-3',
    excerpt: 'Learn how to build a modern web application using Nuxt 3, including routing, data fetching, and deployment.',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    category: 'Development',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices for 2024',
    slug: 'typescript-best-practices-2024',
    excerpt: 'Discover the latest TypeScript best practices and patterns that will help you write better, more maintainable code.',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
    category: 'TypeScript',
  },
  {
    id: 3,
    title: 'My Developer Setup and Tools',
    slug: 'developer-setup-tools',
    excerpt: 'A look at my current development setup, including hardware, software, and VS Code extensions.',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    category: 'Tools',
  },
]
</script>

<template>
  <section class="section-padding">
    <div class="container-artistic">
      <!-- Section Header -->
      <div
        class="
          mb-16 flex flex-col items-start justify-between gap-4
          sm:flex-row sm:items-end
        "
      >
        <div>
          <p
            class="
              text-accent mb-4 text-sm font-medium tracking-wider uppercase
            "
          >
            Writing
          </p>
          <h2
            class="
              text-charcoal text-3xl font-semibold
              lg:text-4xl
            "
          >
            Latest Articles
          </h2>
        </div>
        <NuxtLink
          to="/blog"
          class="
            link-hover text-charcoal flex items-center gap-2 text-sm font-medium
          "
        >
          View all articles
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
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
            <h3
              class="
                text-charcoal
                group-hover:text-accent
                text-lg font-semibold transition-colors
              "
            >
              {{ post.title }}
            </h3>

            <!-- Excerpt -->
            <p class="text-warm-gray mt-3 line-clamp-3 text-sm/relaxed">
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
</template>
