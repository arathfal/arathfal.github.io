<script setup lang="ts">
import IconDocument from '@/components/Icons/IconDocument.vue';
import paths from '@/constants/paths';
import TECH_STACKS from '@/constants/techStack';
</script>

<template>
  <main class="flex flex-col items-center md:flex-row">
    <section
      class="order-2 flex flex-col items-center text-center md:order-1 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
    >
      <h2 class="text-2xl font-semibold text-slate-700 dark:text-slate-300">Hey! I'm Aradea Atfal</h2>
      <h1 class="title-font mb-4 text-4xl xl:text-5xl">
        <strong><span class="text-slate-500">Frontend </span> Developer.</strong>
      </h1>
      <p class="leading-relaxed">
        Passionately experienced in crafting captivating website interfaces, ensuring seamless user
        interaction and engagement
      </p>
      <div class="mb-8 mt-2.5 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
        <span title="Test">Tech Stack:</span>
        <span
          v-for="{ title, icon } in TECH_STACKS"
          :key="title"
          class="relative inline-flex size-7 items-center rounded-md bg-slate-600 p-1"
          :title="title"
        >
          <component :is="icon" class="size-6 transition-all duration-700 [&:not(:hover)]:fill-slate-400" />
        </span>
      </div>
      <div class="flex items-center gap-4">
        <router-link
          :to="paths.PROJECTS"
          class="button-link w-32 rounded border-0 bg-indigo-600 py-2 text-center align-middle text-lg text-white transition-all hover:bg-indigo-500"
        >
          Explore
        </router-link>
        <a
          href="/resume.pdf"
          target="_blank"
          class="button-link inline-flex w-32 items-center justify-center gap-1 rounded border-0 bg-slate-600 py-2 text-lg text-white transition-all hover:bg-slate-500"
        >
          <IconDocument class="size-4 fill-white" title="Dark" />
          Resume
        </a>
      </div>
    </section>
    <section
      class="relative order-1 mb-8 flex w-5/6 justify-center md:order-2 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg"
    >
      <figure
        class="relative size-60 overflow-hidden rounded-full bg-slate-400 sm:size-80 lg:size-96 dark:bg-slate-700"
      >
        <img class="relative z-20 h-full w-full" alt="hero" src="@/assets/images/Photo Profile.png" />
      </figure>
    </section>
  </main>
</template>

<!-- href="https://drive.google.com/file/d/1_vjYM9O2B8GvPp_F7EYDZ3zAd1Edc7Cv/view?usp=sharing" -->
