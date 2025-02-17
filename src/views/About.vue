<script setup lang="ts">
import { useBemm } from 'bemm';
import AboutSection from '../components/sections/About.vue';

const bemm = useBemm('about-page');
</script>

<template>
  <div :class="bemm()">
    <AboutSection />
  </div>
</template>

<style lang="scss">
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
}
</style>
