<template>
  <img :class="class" :alt="alt" :src="image" />
</template>

<script setup lang="ts">
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

const renderImage = new URL('../../assets/images', import.meta.url).href;
const image = `${renderImage}${props.src}`;
</script>
