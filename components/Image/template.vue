<template>
  <img :class="className" :alt="alt" :src="url" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  className: {
    required: false,
    type: String,
    default: ''
  },
  alt: {
    required: true,
    type: String
  },
  src: {
    required: true,
    type: String
  }
})

const url = computed(() => {
  const glob = import.meta.glob('@/assets/images/**', { eager: true, import: 'default' })

  return glob?.[`/assets/images/${props.src}`] as string
})
</script>
