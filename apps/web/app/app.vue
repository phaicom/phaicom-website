<template>
  <div class="bg-cream relative min-h-screen">
    <!-- Grain texture overlay -->
    <div class="grain-overlay" />

    <!-- Background gradient orbs -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="gradient-orb gradient-orb-1 animate-float -top-40 -left-40" />
      <div
        class="
          gradient-orb gradient-orb-2 animate-float-delayed top-1/3 -right-20
        "
      />
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
</style>
