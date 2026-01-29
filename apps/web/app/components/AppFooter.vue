<script setup lang="ts">
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/phaicom',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/reawpaichunsoi',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
  },
  {
    name: 'Email',
    url: 'mailto:reawpai.chunsoi@gmail.com',
    icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.422l-6.565-5.329v12.501l6.565-7.172zm7.85 0l-6.565 7.172v-12.501l6.565 5.329zm7.85-7.293l-7.85 6.392v5.284l7.85-6.392v-5.284z"/></svg>',
  },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-soft-border bg-cream border-t">
    <div class="container-artistic py-12">
      <div
        class="
          flex flex-col items-center justify-between gap-8
          md:flex-row
        "
      >
        <!-- Brand -->
        <div
          class="
            text-center
            md:text-left
          "
        >
          <NuxtLink
            to="/"
            class="
              flex items-center justify-center gap-3
              md:justify-start
            "
          >
            <div
              class="
                bg-charcoal flex size-10 items-center justify-center rounded-xl
                text-white
              "
            >
              <span class="font-serif text-lg font-medium">R</span>
            </div>
            <span class="text-charcoal text-sm font-medium">Reawpai Chunsoi</span>
          </NuxtLink>
          <p class="text-warm-gray mt-2 text-sm">
            Crafting digital experiences that matter.
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="
              text-warm-gray
              hover:bg-charcoal
              flex size-10 items-center justify-center rounded-xl transition-all
              hover:text-white
            "
            :aria-label="social.name"
          >
            <span v-html="social.icon" />
          </a>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="
          border-soft-border mt-12 flex flex-col items-center justify-between
          gap-4 border-t pt-8
          md:flex-row
        "
      >
        <p class="text-warm-gray text-sm">
          © {{ currentYear }} Reawpai Chunsoi. All rights reserved.
        </p>
        <p class="text-warm-gray text-sm">
          Built with
          <span class="text-accent">♥</span>
          using Nuxt.js
        </p>
      </div>
    </div>
  </footer>
</template>
