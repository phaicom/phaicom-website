<script setup lang="ts">
import { onMounted, ref } from 'vue'

const heroRef = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

// 3D tilt effect for the avatar container
const tiltStyle = computed(() => {
  const rotateX = (mouseY.value - 0.5) * -10
  const rotateY = (mouseX.value - 0.5) * 10
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  }
})

function handleMouseMove(event: MouseEvent) {
  if (!heroRef.value) {
    return
  }
  const rect = heroRef.value.getBoundingClientRect()
  mouseX.value = (event.clientX - rect.left) / rect.width
  mouseY.value = (event.clientY - rect.top) / rect.height
}

function handleMouseLeave() {
  mouseX.value = 0.5
  mouseY.value = 0.5
}

onMounted(() => {
  mouseX.value = 0.5
  mouseY.value = 0.5
})
</script>

<template>
  <section
    ref="heroRef"
    class="
      section-padding pt-32
      lg:pt-40
    "
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="container-artistic">
      <div
        class="
          grid items-center gap-16
          lg:grid-cols-2
        "
      >
        <!-- Text Content -->
        <div
          class="
            order-2
            lg:order-1
          "
        >
          <div class="animate-fade-in-up">
            <p
              class="
                text-accent mb-4 text-sm font-medium tracking-wider uppercase
              "
            >
              Full-Stack Developer
            </p>
            <h1
              class="
                text-charcoal text-4xl/tight font-semibold
                lg:text-5xl
                xl:text-6xl
              "
            >
              Crafting digital
              <span class="relative inline-block">
                experiences
                <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#gradient)"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stop-color="#6366f1" />
                      <stop offset="1" stop-color="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              that matter
            </h1>
          </div>

          <p
            class="
              animate-fade-in-up text-warm-gray mt-6 max-w-lg text-lg/relaxed
            "
            style="animation-delay: 0.1s"
          >
            I'm Reawpai Chunsoi, a results-driven engineer with 6+ years of experience building high-performance, scalable web applications.
          </p>

          <div class="animate-fade-in-up mt-8 flex flex-wrap items-center gap-4" style="animation-delay: 0.2s">
            <NuxtLink to="/projects" class="btn-primary">
              <span class="flex items-center gap-2">
                View My Work
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary">
              Get in Touch
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="animate-fade-in-up mt-12 flex gap-12" style="animation-delay: 0.3s">
            <div>
              <p class="text-charcoal text-3xl font-semibold">
                6+
              </p>
              <p class="text-warm-gray mt-1 text-sm">
                Years Experience
              </p>
            </div>
            <div>
              <p class="text-charcoal text-3xl font-semibold">
                50+
              </p>
              <p class="text-warm-gray mt-1 text-sm">
                Projects Delivered
              </p>
            </div>
            <div>
              <p class="text-charcoal text-3xl font-semibold">
                20+
              </p>
              <p class="text-warm-gray mt-1 text-sm">
                Happy Clients
              </p>
            </div>
          </div>
        </div>

        <!-- 3D Avatar/Visual -->
        <div
          class="
            order-1 flex justify-center
            lg:order-2 lg:justify-end
          "
        >
          <div
            class="relative transition-transform duration-200 ease-out"
            :style="tiltStyle"
          >
            <!-- Main circle -->
            <div
              class="
                relative size-72
                lg:size-96
              "
            >
              <!-- Outer glow -->
              <div
                class="
                  from-accent/20 to-accent-dark/20 absolute inset-0 rounded-full
                  bg-linear-to-br blur-3xl
                "
              />

              <!-- Rotating rings -->
              <div class="absolute inset-0 animate-spin" style="animation-duration: 20s;">
                <div
                  class="
                    border-accent/30 absolute inset-0 rounded-full border
                    border-dashed
                  "
                />
              </div>
              <div class="absolute inset-4 animate-spin" style="animation-duration: 15s; animation-direction: reverse;">
                <div
                  class="border-accent/20 absolute inset-0 rounded-full border"
                />
              </div>

              <!-- Main avatar container -->
              <div
                class="
                  from-cream to-cream-dark absolute inset-8 overflow-hidden
                  rounded-full bg-linear-to-br shadow-2xl
                "
              >
                <!-- Inner gradient overlay -->
                <div
                  class="
                    from-accent/5 absolute inset-0 bg-linear-to-br
                    to-transparent
                  "
                />

                <!-- Avatar content -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <span
                    class="
                      text-charcoal/80 font-serif text-8xl font-light
                      lg:text-9xl
                    "
                  >R</span>
                </div>

                <!-- Decorative elements -->
                <div
                  class="
                    bg-accent/60 absolute top-8 right-8 size-3 rounded-full
                  "
                />
                <div
                  class="
                    bg-accent/40 absolute bottom-12 left-10 size-2 rounded-full
                  "
                />
              </div>

              <!-- Floating badges -->
              <div class="animate-float absolute top-1/4 -right-4">
                <div class="card-glass px-4 py-2">
                  <span class="text-charcoal text-xs font-medium">Vue.js</span>
                </div>
              </div>
              <div class="animate-float-delayed absolute bottom-1/4 -left-4">
                <div class="card-glass px-4 py-2">
                  <span class="text-charcoal text-xs font-medium">React</span>
                </div>
              </div>
              <div class="animate-float absolute right-0 bottom-8" style="animation-delay: -2s;">
                <div class="card-glass px-4 py-2">
                  <span class="text-charcoal text-xs font-medium">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
