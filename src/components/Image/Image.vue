<template>
  <img :class="class" :alt="alt" :src="url" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  class: {
    required: false,
    type: String,
  },
  alt: {
    required: true,
    type: String,
  },
  src: {
    required: true,
    type: String,
  },
});

const url = computed(() => {
  const glob = import.meta.glob('@/assets/images/**', { eager: true, import: 'default' });
  return glob?.[`/src/assets/images/${props.src}`] as string;
});
</script>
