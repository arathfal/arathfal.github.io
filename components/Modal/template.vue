<template>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <div
        v-if="show"
        :class="`fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center px-8 transition-all duration-300`"
      >
        <div class="absolute h-full w-full bg-slate-950/70">
          <button class="h-full w-full cursor-default" @click="emit('onClose')"></button>
        </div>
        <button
          class="absolute right-4 top-4 z-50 rounded-full bg-slate-200 p-2"
          @click="emit('onClose')"
        >
          <IconCross class-name="size-5 fill-slate-950" />
        </button>
        <div
          class="relative max-h-[calc(100vh-2.25rem)] max-w-full rounded-md bg-white text-slate-950 shadow-md shadow-white sm:w-[550px]"
        >
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { IconCross } from '@/components/Icons'

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  onClose: []
}>()
</script>

<style scoped src="./styles.css"></style>
