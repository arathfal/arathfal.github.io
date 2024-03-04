<template>
  <main class="flex flex-col gap-4 md:flex-row md:!overflow-hidden">
    <section class="w-full md:w-2/5">
      <h1 class="title-font mb-4 text-4xl xl:text-5xl">
        <strong><span class="text-slate-500">My </span> Career</strong>
      </h1>
      <p class="leading-relaxed">
        Step into my career story and witness the evolution of my professional journey in the realm
        of technology. From the early days of freelancing to my tenure in esteemed companies, this
        page chronicles my experiences, challenges, and triumphs. Delve into the details of my
        projects, spanning from website creation to end-to-end testing, and see how each role has
        shaped my expertise. Join me on this immersive exploration of my career path, where every
        milestone is a testament to my passion for innovation and growth. Welcome to my world of
        tech!
      </p>
    </section>
    <section class="career-timeline w-full md:w-3/5">
      <div
        v-for="career in careers"
        :key="career?.title"
        class="relative mx-auto flex items-center py-5"
      >
        <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
          <div class="pointer-events-none h-full w-1 bg-slate-400 dark:bg-slate-600"></div>
        </div>
        <figure
          class="title-font relative z-10 mt-10 inline-flex size-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-200 text-sm font-medium sm:mt-0 dark:border-slate-600"
        >
          <Image class="size-7" :src="career?.image" :alt="career?.title" />
        </figure>
        <span
          class="hidden h-1 w-14 bg-slate-400 min-[640px]:inline-block dark:bg-slate-600"
        ></span>
        <div
          class="flex flex-col items-start rounded-md pl-4 sm:flex-row sm:items-center min-[640px]:pl-0"
        >
          <div
            class="mt-6 flex-grow bg-slate-400 p-4 shadow shadow-slate-950/50 sm:mt-0 dark:bg-slate-600 dark:shadow-white/50"
          >
            <h2 class="title-font text-xl">
              <strong>{{ career?.title }}</strong>
            </h2>
            <p class="mb-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {{ career?.date }}
            </p>
            <p class="leading-relaxed">
              {{ career?.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import data from '@/assets/career.json'
import Image from '@/components/Image'
import type { CareersType } from '@/interfaces/careers'
import { ref } from 'vue'

const careers = ref<Array<CareersType>>(data)
</script>

<style scoped>
.career-timeline {
  @apply md:overflow-auto;
}

.career-timeline::-webkit-scrollbar {
  @apply w-0;
}
</style>
