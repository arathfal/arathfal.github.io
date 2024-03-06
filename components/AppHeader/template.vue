<template>
  <header class="relative flex w-full items-center gap-5 px-5 py-5 sm:px-8">
    <div
      v-if="isShowMenu"
      class="absolute left-0 top-0 z-[50] h-screen w-screen bg-transparent sm:hidden"
    >
      <button class="h-full w-full cursor-default text-transparent" @click="isShowMenu = false">
        Close Menu
      </button>
    </div>

    <div class="flex w-full items-center gap-3 sm:w-auto">
      <figure class="inline-flex size-10 items-center justify-center rounded-full bg-white">
        <img src="@/assets/images/Black Logo.png" class="size-6" alt="Logo" />
      </figure>
      <strong class="hidden text-lg sm:inline-block">Atfal.Dev</strong>

      <button title="Open Menu" class="ml-auto sm:hidden" @click="toggleMenu">
        <IconMenu class-name="size-7 stroke-slate-950 dark:stroke-white" />
      </button>
    </div>

    <div
      :class="`nav-container ${isShowMenu ? 'translate-x-0 opacity-100' : 'translate-x-60 opacity-0'}`"
    >
      <nav
        class="order-2 flex flex-col gap-4 border-gray-400 sm:order-1 sm:flex-row sm:items-center sm:border-l sm:px-5"
      >
        <NuxtLink class="px-2 py-1 text-center" :to="paths.ABOUT" @click="onClickRoute"
          >About</NuxtLink
        >
        <NuxtLink class="px-2 py-1 text-center" :to="paths.PROJECTS" @click="onClickRoute"
          >Projects</NuxtLink
        >
        <NuxtLink class="px-2 py-1 text-center" :to="paths.CAREER" @click="onClickRoute"
          >Career</NuxtLink
        >
      </nav>

      <div class="order-1 flex w-full justify-between gap-5 sm:order-2 sm:w-auto">
        <button title="Dark Mode Controller" @click="toggleDark">
          <ColorScheme>
            <IconSun
              v-if="colorMode.value === 'dark'"
              class-name="size-7 fill-white"
              title="Light"
            />
            <IconMoon v-else class-name="size-7 fill-slate-950" title="Dark" />
          </ColorScheme>
        </button>
        <button title="Close Menu" class="sm:hidden" @click="toggleMenu">
          <IconCross class-name="size-5 stroke-slate-950 dark:stroke-white" />
        </button>
      </div>
      <span
        class="order-3 mt-auto flex h-6 items-center gap-1.5 text-slate-600 sm:hidden dark:text-slate-400"
      >
        <span class="h-5">Coded with</span>
        <IconLove class-name="h-full w-5 fill-pink-700" />
        <span class="h-5">Aradea Atfal</span>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import paths from '@/constants/paths'
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
import { IconCross, IconLove, IconMenu, IconMoon, IconSun } from '../Icons'

const isMobile = ref(false)
const isShowMenu = ref(true)
const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const colorMode = useColorMode()

const toggleDark = () => (colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark')

const handleResize = () => {
  if (window.innerWidth >= 600) {
    isShowMenu.value = true
    isMobile.value = false
  } else {
    isShowMenu.value = true
    isMobile.value = true
  }
}

onBeforeMount(handleResize)

onMounted(() => {
  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
})

const onClickRoute = () => {
  if (isShowMenu.value && isMobile.value) {
    isShowMenu.value = false
  }
}
</script>

<style scoped src="./styles.css"></style>
