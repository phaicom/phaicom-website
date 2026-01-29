<script setup lang="ts">
useHead({
  title: 'Contact - Reawpai Chunsoi',
  meta: [
    { name: 'description', content: 'Get in touch with Reawpai Chunsoi' },
  ],
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

async function submitForm() {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    submitStatus.value = 'success'
    form.value = { name: '', email: '', subject: '', message: '' }
  }
  catch {
    submitStatus.value = 'error'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="pt-32">
    <section class="section-padding pt-0">
      <div class="container-artistic">
        <div
          class="
            grid gap-16
            lg:grid-cols-2
          "
        >
          <!-- Contact Info -->
          <div>
            <p
              class="
                text-accent mb-4 text-sm font-medium tracking-wider uppercase
              "
            >
              Get in Touch
            </p>
            <h1
              class="
                text-charcoal text-4xl font-semibold
                lg:text-5xl
              "
            >
              Let's work together
            </h1>
            <p class="text-warm-gray mt-6 max-w-md text-lg/relaxed">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.
            </p>

            <!-- Contact Methods -->
            <div class="mt-12 space-y-6">
              <a
                href="mailto:reawpai.chunsoi@gmail.com"
                class="
                  text-warm-gray
                  hover:text-charcoal
                  flex items-center gap-4 transition-colors
                "
              >
                <div
                  class="
                    bg-accent/10 text-accent flex size-12 items-center
                    justify-center rounded-xl
                  "
                >
                  <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-warm-gray text-sm">Email</p>
                  <p class="text-charcoal font-medium">reawpai.chunsoi@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/reawpaichunsoi"
                target="_blank"
                class="
                  text-warm-gray
                  hover:text-charcoal
                  flex items-center gap-4 transition-colors
                "
              >
                <div
                  class="
                    bg-accent/10 text-accent flex size-12 items-center
                    justify-center rounded-xl
                  "
                >
                  <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <p class="text-warm-gray text-sm">LinkedIn</p>
                  <p class="text-charcoal font-medium">linkedin.com/in/reawpaichunsoi</p>
                </div>
              </a>

              <a
                href="https://github.com/phaicom"
                target="_blank"
                class="
                  text-warm-gray
                  hover:text-charcoal
                  flex items-center gap-4 transition-colors
                "
              >
                <div
                  class="
                    bg-accent/10 text-accent flex size-12 items-center
                    justify-center rounded-xl
                  "
                >
                  <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p class="text-warm-gray text-sm">GitHub</p>
                  <p class="text-charcoal font-medium">github.com/phaicom</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card-glass p-8">
            <form class="space-y-6" @submit.prevent="submitForm">
              <div>
                <label
                  for="name"
                  class="text-charcoal mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="
                    border-soft-border text-charcoal
                    placeholder:text-warm-gray/50
                    focus:border-accent focus:ring-accent/20
                    w-full rounded-xl border bg-white/50 px-4 py-3
                    transition-all
                    focus:bg-white focus:ring-2 focus:outline-none
                  "
                  placeholder="Your name"
                >
              </div>

              <div>
                <label
                  for="email"
                  class="text-charcoal mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="
                    border-soft-border text-charcoal
                    placeholder:text-warm-gray/50
                    focus:border-accent focus:ring-accent/20
                    w-full rounded-xl border bg-white/50 px-4 py-3
                    transition-all
                    focus:bg-white focus:ring-2 focus:outline-none
                  "
                  placeholder="your@email.com"
                >
              </div>

              <div>
                <label
                  for="subject"
                  class="text-charcoal mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="
                    border-soft-border text-charcoal
                    placeholder:text-warm-gray/50
                    focus:border-accent focus:ring-accent/20
                    w-full rounded-xl border bg-white/50 px-4 py-3
                    transition-all
                    focus:bg-white focus:ring-2 focus:outline-none
                  "
                  placeholder="What's this about?"
                >
              </div>

              <div>
                <label
                  for="message"
                  class="text-charcoal mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="
                    border-soft-border text-charcoal
                    placeholder:text-warm-gray/50
                    focus:border-accent focus:ring-accent/20
                    w-full resize-none rounded-xl border bg-white/50 px-4 py-3
                    transition-all
                    focus:bg-white focus:ring-2 focus:outline-none
                  "
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="
                  btn-primary w-full
                  disabled:cursor-not-allowed disabled:opacity-50
                "
              >
                <span
                  v-if="isSubmitting"
                  class="flex items-center justify-center gap-2"
                >
                  <svg class="size-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  Send Message
                  <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>

              <!-- Success Message -->
              <div
                v-if="submitStatus === 'success'"
                class="
                  rounded-xl bg-emerald-50 p-4 text-center text-sm
                  text-emerald-700
                "
              >
                Thank you! Your message has been sent successfully.
              </div>

              <!-- Error Message -->
              <div
                v-if="submitStatus === 'error'"
                class="
                  rounded-xl bg-rose-50 p-4 text-center text-sm text-rose-700
                "
              >
                Something went wrong. Please try again later.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
