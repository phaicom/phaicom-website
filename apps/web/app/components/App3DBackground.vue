<template>
  <!-- Minimal background with subtle gradient orbs -->
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="gradient-orb gradient-orb-1 animate-float -top-40 -left-40" />
    <div
      class="
        gradient-orb gradient-orb-2 animate-float-delayed top-1/3 -right-20
      "
    />
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse at top, rgba(99, 102, 241, 0.03) 0%, transparent 50%)"
    />
  </div>
</template>
