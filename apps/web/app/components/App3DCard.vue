<script setup lang="ts">
const cardRef = ref<HTMLElement | null>(null)

const rotateX = ref(0)
const rotateY = ref(0)
const scale = ref(1)
const glarePosition = ref({ x: 50, y: 50 })

const cardStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) scale(${scale.value})`,
}))

const glareStyle = computed(() => ({
  background: `radial-gradient(circle at ${glarePosition.value.x}% ${glarePosition.value.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
}))

function handleMouseMove(event: MouseEvent) {
  const card = cardRef.value
  if (!card) {
    return
  }

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateXValue = ((y - centerY) / centerY) * -8
  const rotateYValue = ((x - centerX) / centerX) * 8

  rotateX.value = rotateXValue
  rotateY.value = rotateYValue
  scale.value = 1.02

  // Update glare position
  glarePosition.value = {
    x: (x / rect.width) * 100,
    y: (y / rect.height) * 100,
  }
}

function handleMouseLeave() {
  rotateX.value = 0
  rotateY.value = 0
  scale.value = 1
  glarePosition.value = { x: 50, y: 50 }
}
</script>

<template>
  <div
    ref="cardRef"
    class="card-3d relative overflow-hidden"
    :style="cardStyle"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Glare effect -->
    <div
      class="
        pointer-events-none absolute inset-0 opacity-0 transition-opacity
        duration-300
        group-hover:opacity-100
      "
      :style="glareStyle"
    />
    <slot />
  </div>
</template>
