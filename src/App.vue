<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
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
  @apply translate-x-6 opacity-0;
}
</style>
