<template>
  <header class="relative flex w-full items-center gap-5 px-5 py-5 sm:px-8">
    <div class="flex w-full items-center gap-3 sm:w-auto">
      <figure class="inline-flex size-10 items-center justify-center rounded-full bg-white">
        <img src="@/assets/images/Black Logo.png" class="size-6" alt="Logo" />
      </figure>
      <strong class="hidden text-lg sm:inline-block">Atfal.Dev</strong>

      <button @click="toggleMenu" title="Open Menu" class="ml-auto sm:hidden">
        <IconMenu class="size-7 stroke-slate-950 dark:stroke-white" />
      </button>
    </div>

    <div
      :class="`nav-container ${isShowMenu ? 'translate-x-0 opacity-100' : 'translate-x-60 opacity-0'}`"
    >
      <nav
        class="order-2 flex flex-col gap-4 border-gray-400 sm:order-1 sm:flex-row sm:items-center sm:border-l sm:px-5"
      >
        <router-link class="px-2 py-1 text-center" :to="paths.ABOUT">About</router-link>
        <router-link class="px-2 py-1 text-center" :to="paths.PROJECTS">Projects</router-link>
        <router-link class="px-2 py-1 text-center" :to="paths.CAREER">Career</router-link>
      </nav>

      <div class="order-1 flex w-full justify-between gap-5 sm:order-2 sm:w-auto">
        <button @click="toggleDark()" title="Dark Mode Controller">
          <IconSun v-if="isDark" class="size-7 fill-white" title="Ligth" />
          <IconMoon v-else class="size-7 fill-slate-950" title="Dark" />
        </button>
        <button @click="toggleMenu" title="Close Menu" class="sm:hidden">
          <IconCross class="size-5 stroke-slate-950 dark:stroke-white" />
        </button>
      </div>
      <span
        class="order-3 mt-auto flex h-6 items-center gap-1.5 text-slate-600 sm:hidden dark:text-slate-400"
      >
        <span class="h-5">Coded with</span>
        <IconLove class="h-full w-5 fill-pink-700" />
        <span class="h-5">Aradea Atfal</span>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import paths from '@/constants/paths'
import { useDark, useToggle } from '@vueuse/core'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { IconLove, IconMoon, IconSun } from '../Icons'
import IconCross from '../Icons/IconCross.vue'
import IconMenu from '../Icons/IconMenu.vue'

const isShowMenu = ref(false)
const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const dark = useDark()
const toggleDark = useToggle(dark)
const isDark = computed(() => dark.value)

onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 600) {
      isShowMenu.value = true
    } else {
      isShowMenu.value = false
    }
  }

  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<style scoped src="./styles.css"></style>
