<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

useHead({
  title: `${slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Reawpai Chunsoi`,
})

const post = {
  title: slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  date: 'Jan 15, 2024',
  readTime: '8 min read',
  category: 'Development',
  excerpt: 'Learn how to build a modern web application using Nuxt 3. This comprehensive guide covers everything from project setup to deployment.',
}
</script>

<template>
  <div class="pt-32">
    <article class="section-padding pt-0">
      <div class="container-artistic max-w-3xl">
        <!-- Back Link -->
        <NuxtLink
          to="/blog"
          class="
            text-warm-gray
            hover:text-charcoal
            mb-8 inline-flex items-center gap-2 text-sm transition-colors
          "
        >
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </NuxtLink>

        <!-- Header -->
        <header class="mb-12">
          <div class="mb-4 flex items-center gap-3">
            <span
              class="
                bg-accent/10 text-accent rounded-full px-3 py-1 text-xs
                font-medium
              "
            >
              {{ post.category }}
            </span>
            <span class="text-warm-gray text-sm">{{ post.readTime }}</span>
          </div>
          <h1
            class="
              text-charcoal text-3xl font-semibold
              lg:text-4xl
            "
          >
            {{ post.title }}
          </h1>
          <div class="text-warm-gray mt-4 flex items-center gap-2 text-sm">
            <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ post.date }}
          </div>
        </header>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <p class="lead text-warm-gray text-xl/relaxed">
            {{ post.excerpt }}
          </p>

          <div class="card-glass my-8 p-8">
            <p class="text-warm-gray italic">
              This is a placeholder for the full blog post content. In a real implementation,
              this would contain the complete article with proper formatting, code examples,
              and rich media content.
            </p>
          </div>

          <p class="text-warm-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 class="text-charcoal text-2xl font-semibold">
            Getting Started
          </h2>

          <p class="text-warm-gray">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <div class="bg-charcoal my-6 rounded-xl p-6">
            <pre class="text-cream overflow-x-auto text-sm"><code>// Example code block
const app = createApp({
  setup() {
    return {
      message: 'Hello World'
    }
  }
})</code></pre>
          </div>

          <p class="text-warm-gray">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        <!-- Share/Tags -->
        <div class="border-soft-border mt-12 border-t pt-8">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <span class="text-warm-gray text-sm">Tags:</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">Nuxt</span>
              <span class="skill-tag">Web Development</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-warm-gray text-sm">Share:</span>
              <button
                class="
                  text-warm-gray
                  hover:bg-charcoal
                  flex size-8 items-center justify-center rounded-lg
                  transition-colors
                  hover:text-white
                "
              >
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button
                class="
                  text-warm-gray
                  hover:bg-charcoal
                  flex size-8 items-center justify-center rounded-lg
                  transition-colors
                  hover:text-white
                "
              >
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
