<script setup lang="ts">
import paths from '@/constants/paths';
import { useDark, useToggle } from '@vueuse/core';
import { computed } from 'vue';
import IconMoon from './Icons/IconMoon.vue';
import IconSun from './Icons/IconSun.vue';

const dark = useDark();
const toggleDark = useToggle(dark);
const isDark = computed(() => dark.value);
</script>

<template>
  <header class="flex w-full items-center justify-between gap-5 px-8 py-5">
    <div class="flex items-center gap-3">
      <figure class="inline-flex size-10 items-center justify-center rounded-full bg-white">
        <img src="@/assets/images/black logo.png" class="size-6" alt="Logo" />
      </figure>
      <strong class="text-lg">Atfal.Dev</strong>
    </div>

    <nav class="mr-auto flex h-10 items-center gap-4 px-5 md:border-l md:border-gray-400">
      <router-link class="px-2 py-1" :to="paths.ABOUT">About</router-link>
      <router-link class="px-2 py-1" :to="paths.PROJECTS">Projects</router-link>
      <router-link class="px-2 py-1" :to="paths.CAREER">Career</router-link>
    </nav>

    <button @click="toggleDark()" title="Dark Mode Controller">
      <IconSun v-if="isDark" class="size-7 fill-white" title="Ligth" />
      <IconMoon v-else="isDark" class="size-7 fill-slate-950" title="Dark" />
    </button>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply border-b border-slate-600 dark:!border-white;
}
</style>
