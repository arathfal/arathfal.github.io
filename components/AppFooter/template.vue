<template>
  <footer class="hidden w-full justify-between gap-5 px-8 py-5 sm:flex">
    <span class="flex h-6 items-center gap-1.5 text-slate-600 dark:text-slate-400">
      <span class="h-5">Coded with</span>
      <IconLove class-name="h-full w-5 fill-pink-700" />
      <span class="h-5">Aradea Atfal</span>
    </span>
    <div class="flex gap-5">
      <a href="https://github.com/arathfal" class="social-media-link" target="_blank">Github</a>
      <a href="https://gitlab.com/arathfal" class="social-media-link" target="_blank">Gitlab</a>
      <a href="https://linkedin.com/in/aradea-atfal/" class="social-media-link" target="_blank"
        >Linkedin</a
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
import IconLove from '../Icons/IconLove.vue'
</script>

<style scoped src="./styles.css"></style>
