<style scoped>
img {
  @apply w-full rounded-lg;
}

</style>
<template>
  <Splide class="mt-3 z-10" :options="options">
    <SplideSlide>
      <img src="/banner-1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="/banner-2.jpg" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="/banner-3.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="/banner-2.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>

<script setup>

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css';

const options = {
  arrows: false,
  autoplay: true,
  perpage: 1,
  type: 'loop'
}

</script>
