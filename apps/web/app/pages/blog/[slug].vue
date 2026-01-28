<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

useHead({
  title: `${slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Phaicom`,
})

const post = {
  title: slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  date: 'Jan 15, 2024',
  readTime: '8 min read',
  excerpt: 'Learn how to build a modern web application using Nuxt 3. This comprehensive guide covers everything from project setup to deployment.',
}
</script>

<template>
  <div class="py-16">
    <div
      class="
        mx-auto max-w-3xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <NuxtLink
        to="/blog"
        class="
          mb-8 inline-flex items-center gap-2 text-indigo-600
          hover:underline
          dark:text-indigo-400
        "
      >
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </NuxtLink>

      <article v-if="post">
        <header class="mb-8">
          <div
            class="
              mb-4 flex items-center gap-4 text-sm text-gray-500
              dark:text-gray-400
            "
          >
            <span>{{ post.date }}</span>
            <span>•</span>
            <span>{{ post.readTime }}</span>
          </div>
          <h1
            class="
              text-3xl font-bold text-gray-900
              sm:text-4xl
              dark:text-white
            "
          >
            {{ post.title }}
          </h1>
        </header>

        <div
          class="
            prose
            dark:prose-invert
            max-w-none
          "
        >
          <p
            class="
              mb-8 text-xl/relaxed text-gray-600
              dark:text-gray-300
            "
          >
            {{ post.excerpt }}
          </p>

          <div
            class="
              mb-8 rounded-xl bg-white p-8 shadow-sm
              dark:bg-gray-800
            "
          >
            <p
              class="
                text-gray-600 italic
                dark:text-gray-400
              "
            >
              This is a placeholder for the full blog post content. In a real implementation,
              this would contain the complete article with proper formatting, code examples,
              and rich media content.
            </p>
          </div>

          <p
            class="
              text-gray-600
              dark:text-gray-400
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2
            class="
              mt-8 mb-4 text-2xl font-bold text-gray-900
              dark:text-white
            "
          >
            Key Takeaways
          </h2>

          <ul
            class="
              list-inside list-disc space-y-2 text-gray-600
              dark:text-gray-400
            "
          >
            <li>Modern web development requires staying up-to-date with best practices</li>
            <li>Understanding the fundamentals helps in making better architectural decisions</li>
            <li>Continuous learning is essential in the ever-evolving tech landscape</li>
          </ul>
        </div>

        <div
          class="
            mt-12 border-t border-gray-200 pt-8
            dark:border-gray-700
          "
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div
                class="
                  flex size-12 items-center justify-center rounded-full
                  bg-indigo-600
                "
              >
                <span class="text-xl font-bold text-white">P</span>
              </div>
              <div>
                <p
                  class="
                    font-medium text-gray-900
                    dark:text-white
                  "
                >
                  Phaicom
                </p>
                <p
                  class="
                    text-sm text-gray-500
                    dark:text-gray-400
                  "
                >
                  Software Developer
                </p>
              </div>
            </div>

            <div class="flex gap-2">
              <button
                class="
                  rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors
                  hover:bg-gray-200
                  dark:bg-gray-800 dark:text-gray-400
                  dark:hover:bg-gray-700
                "
              >
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                class="
                  rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors
                  hover:bg-gray-200
                  dark:bg-gray-800 dark:text-gray-400
                  dark:hover:bg-gray-700
                "
              >
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>

      <div v-else class="py-16 text-center">
        <h1
          class="
            mb-4 text-2xl font-bold text-gray-900
            dark:text-white
          "
        >
          Post Not Found
        </h1>
        <p
          class="
            mb-8 text-gray-600
            dark:text-gray-400
          "
        >
          The blog post you're looking for doesn't exist.
        </p>
        <NuxtLink
          to="/blog"
          class="
            text-indigo-600
            hover:underline
            dark:text-indigo-400
          "
        >
          Back to Blog
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
