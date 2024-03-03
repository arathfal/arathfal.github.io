<template>
  <Modal :show="show" @onClose="emit('onClose')">
    <figure class="project-image-container border-b border-slate-200">
      <Image class="project-image" :src="data?.image" :alt="data?.title" />
    </figure>
    <div class="project-content max-h-[375px] overflow-auto px-6 pb-6 pt-3">
      <h1 class="project-title text-xl">
        <strong>{{ data?.title }}</strong>
      </h1>
      <p class="project-description mb-4 text-sm">{{ data?.description }}</p>
      <h5 class="project-subtitle"><strong>Tech Stack:</strong></h5>
      <p class="project-tech-stack mb-4 divide-x-2">
        <span v-for="tech in data?.stack" :key="tech" class="rounded bg-slate-400 px-1 text-sm">
          {{ tech }}
        </span>
      </p>
      <h5 class="project-subtitle"><strong>Role and Contributions:</strong></h5>
      <ul class="mb-4 list-disc pl-4">
        <li v-for="contribution in data?.contribution" :key="contribution">
          <p class="project-description text-sm">{{ contribution }}</p>
        </li>
      </ul>

      <a
        :href="data?.url"
        target="_blank"
        class="button-link inline-flex w-full items-center justify-center gap-1 rounded border-0 bg-slate-600 py-2 text-white transition-all hover:bg-slate-500"
      >
        Visit Site
      </a>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Image from '@/components/Image';
import Modal from '@/components/Modal';
import { PortfoliosType } from '@/interfaces/portfolios';
import { PropType } from 'vue';

defineProps({
  data: {
    type: Object as PropType<PortfoliosType>,
    default: {},
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  onClose: [];
}>();
</script>

<style scoped src="./styles.css"></style>
