<template>
  <main class="relative flex flex-col gap-4 md:flex-row md:items-center">
    <ProjectModal :show="isShowDetail" :data="dataModal" @onClose="closeDetail" />
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

          <button
            @click="openDetail"
            class="text-nowrap border-b-2 border-slate-900 px-4 text-lg dark:border-white"
          >
            <strong>View Detail</strong>
          </button>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </section>
    <ProjectsSwipper :slides="slides" @onChangeSlide="slideTo" :detail="detail" />
  </main>
</template>

<script setup lang="ts">
import portfolios from '@/assets/portfolios.json';
import { PortfoliosType } from '@/interfaces/portfolios';
import 'swiper/css/pagination';
import ProjectModal from './ProjectModal';
import ProjectsSwipper from './ProjectsSwiper';

import { ref } from 'vue';

const slides = ref<Array<PortfoliosType>>(portfolios);

const dataByIndex: Record<number, PortfoliosType> = slides.value?.reduce((acc, curr, index) => {
  return {
    ...acc,
    [index + 1]: {
      ...curr,
    },
  };
}, {});

const detail = ref(dataByIndex[1]);
const dataModal = ref<PortfoliosType>({} as PortfoliosType);
const isShowDetail = ref<boolean>(false);

const slideTo = (index: number) => {
  if (index >= 0 && index < slides.value.length + 1) {
    detail.value = dataByIndex[index];
  }
};

const openDetail = () => {
  dataModal.value = detail.value;
  isShowDetail.value = true;
};

const closeDetail = () => {
  dataModal.value = {} as PortfoliosType;
  isShowDetail.value = false;
};

console.log(dataModal);
</script>

<style scoped src="./styles.css"></style>
