<script setup lang="ts">
import { useBemm } from 'bemm'
import Intro from '../components/sections/Intro.vue'
import About from '../components/sections/About.vue'
import HowItWorks from '../components/sections/HowItWorks.vue'
import CTA from '../components/sections/CTA.vue'

const bemm = useBemm('home')
</script>

<template>
  <div :class="bemm()">
      <Intro />
      <About />
      <HowItWorks />
      <CTA />
    </div>
</template>

<style lang="scss">
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
}
</style>
