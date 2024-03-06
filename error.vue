<template>
  <NuxtLayout>
    <main class="flex flex-col items-center justify-center">
      <h1 class="title-font mb-4 text-center text-5xl xl:text-6xl">
        <strong>{{ error.statusCode }}</strong>
      </h1>

      <p v-if="error.statusCode.toString() === '404'" class="text-center text-xl">
        Oops page not available 🥺
      </p>
      <p v-else class="text-center text-xl">Oops. . .</p>
      <p class="mb-4 text-center text-xl">Go back to about page</p>
      <button
        class="button-link w-40 rounded border border-slate-600 bg-slate-600 p-2 text-white transition-all hover:bg-slate-500"
        @click="handleError"
      >
        Back
      </button>
    </main>
  </NuxtLayout>
</template>

<script setup>
import paths from '@/constants/paths'

const error = useError()

// clear error and redirect to home page
const handleError = () => {
  console.clear()
  clearError({ redirect: paths.ABOUT })
}
</script>
