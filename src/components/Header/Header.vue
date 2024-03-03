<template>
  <header class="relative flex w-full items-center justify-between gap-5 px-5 py-5 sm:px-8">
    <div class="flex items-center gap-3">
      <figure class="inline-flex size-10 items-center justify-center rounded-full bg-white">
        <img src="@/assets/images/black logo.png" class="size-6" alt="Logo" />
      </figure>
      <strong class="hidden text-lg sm:inline-block">Atfal.Dev</strong>
    </div>

    <nav class="flex h-10 items-center gap-4 border-gray-400 sm:mr-auto sm:border-l sm:px-5">
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

<script setup lang="ts">
import paths from '@/constants/paths';
import { useDark, useToggle } from '@vueuse/core';
import { computed } from 'vue';
import { IconMoon, IconSun } from '../Icons';

const dark = useDark();
const toggleDark = useToggle(dark);
const isDark = computed(() => dark.value);
</script>

<style scoped src="./styles.css"></style>
