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
  <div class="py-20">
    <div
      class="
        mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="mx-auto max-w-2xl">
        <div class="text-center">
          <h1
            class="
              mb-4 text-4xl font-bold text-gray-900
              dark:text-white
            "
          >
            Get in Touch
          </h1>
          <p
            class="
              mb-12 text-lg text-gray-600
              dark:text-gray-400
            "
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <form
          class="space-y-6"
          @submit.prevent="submitForm"
        >
          <div class="group">
            <label
              for="name"
              class="
                mb-2 block text-sm font-medium text-gray-700
                dark:text-gray-300
              "
            >
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="
                w-full rounded-xl border border-gray-200 bg-white px-4 py-3
                text-gray-900 transition-all duration-200
                focus:border-transparent focus:shadow-lg focus:ring-2
                focus:ring-indigo-500
                dark:border-gray-700 dark:bg-gray-800 dark:text-white
              "
              placeholder="Your name"
            >
          </div>

          <div class="group">
            <label
              for="email"
              class="
                mb-2 block text-sm font-medium text-gray-700
                dark:text-gray-300
              "
            >
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="
                w-full rounded-xl border border-gray-200 bg-white px-4 py-3
                text-gray-900 transition-all duration-200
                focus:border-transparent focus:shadow-lg focus:ring-2
                focus:ring-indigo-500
                dark:border-gray-700 dark:bg-gray-800 dark:text-white
              "
              placeholder="your@email.com"
            >
          </div>

          <div class="group">
            <label
              for="subject"
              class="
                mb-2 block text-sm font-medium text-gray-700
                dark:text-gray-300
              "
            >
              Subject
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="
                w-full rounded-xl border border-gray-200 bg-white px-4 py-3
                text-gray-900 transition-all duration-200
                focus:border-transparent focus:shadow-lg focus:ring-2
                focus:ring-indigo-500
                dark:border-gray-700 dark:bg-gray-800 dark:text-white
              "
              placeholder="What's this about?"
            >
          </div>

          <div class="group">
            <label
              for="message"
              class="
                mb-2 block text-sm font-medium text-gray-700
                dark:text-gray-300
              "
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              class="
                w-full resize-none rounded-xl border border-gray-200 bg-white
                px-4 py-3 text-gray-900 transition-all duration-200
                focus:border-transparent focus:shadow-lg focus:ring-2
                focus:ring-indigo-500
                dark:border-gray-700 dark:bg-gray-800 dark:text-white
              "
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="
              w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600
              px-6 py-3.5 font-semibold text-white transition-all duration-200
              hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg
              hover:shadow-indigo-500/25
              focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
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
              <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </span>
          </button>

          <p
            v-if="submitStatus === 'success'"
            class="
              rounded-xl bg-green-50 p-4 text-center text-green-700
              dark:bg-green-900/30 dark:text-green-400
            "
          >
            Message sent successfully! I'll get back to you soon.
          </p>
          <p
            v-if="submitStatus === 'error'"
            class="
              rounded-xl bg-red-50 p-4 text-center text-red-700
              dark:bg-red-900/30 dark:text-red-400
            "
          >
            Something went wrong. Please try again later.
          </p>
        </form>

        <div
          class="
            mt-12 border-t border-gray-200 pt-12
            dark:border-gray-700
          "
        >
          <h2
            class="
              mb-6 text-center text-xl font-semibold text-gray-900
              dark:text-white
            "
          >
            Other ways to connect
          </h2>
          <div class="flex justify-center gap-6">
            <a
              href="https://github.com/phaicom"
              target="_blank"
              rel="noopener noreferrer"
              class="
                rounded-xl bg-gray-100 p-4 text-gray-700 transition-all
                duration-200
                hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-lg
                dark:bg-gray-800 dark:text-gray-400
                dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400
              "
              aria-label="GitHub"
            >
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/reawpaichunsoi"
              target="_blank"
              rel="noopener noreferrer"
              class="
                rounded-xl bg-gray-100 p-4 text-gray-700 transition-all
                duration-200
                hover:bg-blue-100 hover:text-blue-600 hover:shadow-lg
                dark:bg-gray-800 dark:text-gray-400
                dark:hover:bg-blue-900/30 dark:hover:text-blue-400
              "
              aria-label="LinkedIn"
            >
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:reawpai.chunsoi@gmail.com"
              class="
                rounded-xl bg-gray-100 p-4 text-gray-700 transition-all
                duration-200
                hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-lg
                dark:bg-gray-800 dark:text-gray-400
                dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400
              "
              aria-label="Email"
            >
              <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
