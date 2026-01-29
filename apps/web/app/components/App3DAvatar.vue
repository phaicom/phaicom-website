<script setup lang="ts">
const avatarRef = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

const tiltStyle = computed(() => {
  const rotateX = (mouseY.value - 0.5) * -15
  const rotateY = (mouseX.value - 0.5) * 15
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  }
})

function handleMouseMove(event: MouseEvent) {
  if (!avatarRef.value) {
    return
  }
  const rect = avatarRef.value.getBoundingClientRect()
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
  <div
    ref="avatarRef"
    class="relative cursor-pointer"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="
        relative size-64 transition-transform duration-200 ease-out
        lg:size-80
      "
      :style="tiltStyle"
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
            border-accent/30 absolute inset-0 rounded-full border border-dashed
          "
        />
      </div>
      <div class="absolute inset-4 animate-spin" style="animation-duration: 15s; animation-direction: reverse;">
        <div class="border-accent/20 absolute inset-0 rounded-full border" />
      </div>

      <!-- Main avatar container -->
      <div
        class="
          from-cream to-cream-dark absolute inset-8 overflow-hidden rounded-full
          bg-linear-to-br shadow-2xl
        "
      >
        <!-- Inner gradient overlay -->
        <div
          class="from-accent/5 absolute inset-0 bg-linear-to-br to-transparent"
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
        <div class="bg-accent/60 absolute top-8 right-8 size-3 rounded-full" />
        <div class="bg-accent/40 absolute bottom-12 left-10 size-2 rounded-full" />
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
</template>
