<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :modules="modules"
    :lazy="true"
    :pagination="pagination"
    class="image-swiper order-1 md:order-2"
    :breakpoints="{
      '768': {
        slidesPerView: 'auto',
      },
    }"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="slide?.image" :virtualIndex="index">
      <div>
        <figure
          class="w-full shadow shadow-slate-950/20 md:h-[380px] md:w-auto dark:border-0 dark:shadow-white/20"
        >
          <Image :src="slide?.image" class="inline-block h-full w-full object-cover" :alt="slide?.title" />
        </figure>
        <div
          class="relative mt-4 flex min-h-48 flex-col items-start justify-between gap-4 min-[500px]:min-h-44 md:hidden"
        >
          <h1 class="text-3xl xl:text-4xl">
            <strong>{{ detail?.title }}</strong>
          </h1>
          <p class="mb-auto leading-relaxed">
            {{ detail?.description }}
          </p>
          <button class="text-nowrap border-b-2 border-slate-900 px-4 text-lg dark:border-white">
            <strong>View Detail</strong>
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import Image from '@/components/Image';
import { PortfoliosType } from '@/interfaces/portfolios';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { PropType, onMounted } from 'vue';

const emit = defineEmits<{ onChangeSlide: [index: number] }>();
const props = defineProps({
  slides: {
    required: true,
    type: Array<PortfoliosType>,
  },
  detail: {
    required: true,
    type: Object as PropType<PortfoliosType>,
  },
});

const { slides } = props;

const slideTo = (index: number) => {
  if (index >= 0 && index < slides?.length + 1) {
    emit('onChangeSlide', index);
  }
};

const pagination = {
  clickable: true,
  el: '.swiper-pagination',
  renderBullet: function (index: number, className: string) {
    return `<button class="h-4 w-6 sm:w-8 bg-transparent focus:outline-none ${className}" data-index="${index + 1}">
      <span class="h-0.5 w-full bg-slate-950 dark:bg-white"></span>
      </button>`;
  },
};

onMounted(() => {
  const buttons = document.querySelectorAll('[data-index]');
  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const index = (button as HTMLElement)?.dataset?.index;
      if (index !== undefined) {
        slideTo(parseInt(index));
      }
    });
  });
});

const modules = [Pagination];
</script>

<style scoped src="./styles.css"></style>
