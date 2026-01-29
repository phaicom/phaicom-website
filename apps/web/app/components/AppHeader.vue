<script setup lang="ts">
const route = useRoute()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const isActive = (path: string) => (path === '/' ? route.path === '/' : route.path.startsWith(path))

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

// Track scroll for header styling
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'py-3'
        : 'py-5',
    ]"
  >
    <!-- Glass background that appears on scroll -->
    <div
      class="absolute inset-0 transition-all duration-500"
      :class="[
        isScrolled
          ? 'bg-cream/80 shadow-sm backdrop-blur-xl'
          : 'bg-transparent',
      ]"
    />

    <nav class="container-artistic relative">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="group relative flex items-center gap-3">
          <div
            class="
              bg-charcoal flex size-10 items-center justify-center rounded-xl
              text-white transition-transform duration-300
              group-hover:scale-105
            "
          >
            <span class="font-serif text-xl font-medium">R</span>
          </div>
          <span
            class="
              text-charcoal hidden text-sm font-medium transition-colors
              sm:block
            "
          >
            Reawpai
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div
          class="
            hidden items-center gap-1
            md:flex
          "
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative px-4 py-2 text-sm font-medium transition-colors"
            :class="[
              isActive(item.path)
                ? 'text-charcoal'
                : `
                  text-warm-gray
                  hover:text-charcoal
                `,
            ]"
          >
            {{ item.name }}
            <!-- Active indicator -->
            <span
              v-if="isActive(item.path)"
              class="
                bg-accent absolute bottom-0 left-1/2 size-1 -translate-x-1/2
                rounded-full
              "
            />
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div
          class="
            hidden
            md:block
          "
        >
          <NuxtLink
            to="/contact"
            class="btn-primary text-sm"
          >
            <span>Let's Talk</span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="
            relative z-10 flex size-10 items-center justify-center rounded-xl
            md:hidden
          "
          :class="isMobileMenuOpen ? 'bg-charcoal text-white' : `
            bg-charcoal/5 text-charcoal
          `"
          @click="toggleMobileMenu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="
          absolute top-full right-4 left-4 mt-2 overflow-hidden rounded-2xl
          bg-white shadow-2xl
          md:hidden
        "
      >
        <div class="p-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="
              flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
              transition-colors
            "
            :class="[
              isActive(item.path)
                ? 'bg-charcoal text-white'
                : `
                  text-charcoal
                  hover:bg-charcoal/5
                `,
            ]"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="border-soft-border border-t p-4">
          <NuxtLink
            to="/contact"
            class="btn-primary block w-full text-center text-sm"
            @click="closeMobileMenu"
          >
            <span>Let's Talk</span>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
