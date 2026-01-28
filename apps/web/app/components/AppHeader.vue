<script setup lang="ts">
const route = useRoute()
const isDark = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const isActive = (path: string) => (path === '/' ? route.path === '/' : route.path.startsWith(path))

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('darkMode', isDark.value.toString())
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  isDark.value = savedDarkMode === 'true'
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <header
    class="
      sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md
      transition-all duration-300
      dark:border-gray-800 dark:bg-gray-900/80
    "
  >
    <nav
      class="
        mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="group flex items-center gap-3">
          <div
            class="
              flex size-10 items-center justify-center rounded-xl
              bg-linear-to-br from-indigo-600 to-purple-600 shadow-lg
              shadow-indigo-500/30 transition-all duration-300
              group-hover:scale-105 group-hover:shadow-indigo-500/50
            "
          >
            <span class="text-xl font-bold text-white">R</span>
          </div>
          <span
            class="
              bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-xl
              font-bold text-transparent
              dark:from-white dark:to-gray-300
            "
          >Reawpai Chunsoi</span>
        </NuxtLink>

        <div
          class="
            hidden items-center space-x-1
            md:flex
          "
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="
              rounded-lg px-4 py-2 font-medium text-gray-600 transition-all
              duration-200
              hover:bg-indigo-50 hover:text-indigo-600
              dark:text-gray-300
              dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400
            "
            :class="{ 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400': isActive(item.path) }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-2">
          <button
            class="
              rounded-lg p-2 text-gray-600 transition-all duration-200
              hover:scale-105 hover:bg-gray-100
              dark:text-gray-300
              dark:hover:bg-gray-800
            "
            aria-label="Toggle dark mode"
            @click="toggleDarkMode"
          >
            <svg v-if="isDark" class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <button
            class="
              rounded-lg p-2 text-gray-600 transition-all duration-200
              hover:scale-105 hover:bg-gray-100
              md:hidden
              dark:text-gray-300
              dark:hover:bg-gray-800
            "
            aria-label="Toggle menu"
            @click="toggleMobileMenu"
          >
            <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div
        v-if="isMobileMenuOpen"
        class="
          border-t border-gray-100 py-4
          md:hidden
          dark:border-gray-800
        "
      >
        <div class="flex flex-col space-y-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="
              rounded-lg px-4 py-3 font-medium text-gray-600 transition-all
              duration-200
              hover:bg-indigo-50 hover:text-indigo-600
              dark:text-gray-300
              dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400
            "
            :class="{ 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400': isActive(item.path) }"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
