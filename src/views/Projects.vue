<script setup lang="ts">
import data from '@/assets/data.json';
import PortfolioSwipper from '@/components/PortfolioSwipper.vue';
import { PortfolioSurfaceType, PortfoliosType } from '@/interfaces/portfolios';
import 'swiper/css';
import 'swiper/css/pagination';

import { ref } from 'vue';

const slides = ref<Array<PortfoliosType>>(data);

const dataByIndex: Record<number, PortfolioSurfaceType> = slides.value?.reduce((acc, curr, index) => {
  const { title, description, url } = curr;
  return {
    ...acc,
    [index + 1]: {
      title,
      description,
      url,
    },
  };
}, {});

const detail = ref(dataByIndex[1]);

const slideTo = (index: number) => {
  if (index >= 0 && index < slides.value.length + 1) {
    detail.value = dataByIndex[index];
  }
};
</script>

<template>
  <main class="relative flex flex-col gap-4 md:flex-row md:items-center">
    <section class="relative order-2 w-full md:order-1 md:w-1/2">
      <div class="relative hidden min-h-[380px] md:flex">
        <div class="relative flex flex-col items-start justify-between gap-4">
          <transition name="slide-fade" mode="out-in">
            <div :key="detail?.title">
              <h1 class="text-2xl sm:text-3xl xl:text-4xl">
                <strong>{{ detail?.title }}</strong>
              </h1>
              <p class="mb-auto mt-2.5 leading-relaxed">
                {{ detail?.description }}
              </p>
            </div>
          </transition>

          <button class="text-nowrap border-b-2 border-slate-900 px-4 text-lg dark:border-white">
            <strong>View Detail</strong>
          </button>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </section>
    <PortfolioSwipper :slides="slides" @onChangeSlide="slideTo" :detail="detail" />
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  @apply transition duration-300 ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply translate-y-6 opacity-0;
}

.swiper-pagination {
  @apply -bottom-8 min-w-full text-center sm:min-w-[500px] md:-bottom-14 md:text-left;
  top: unset;
}
</style>
