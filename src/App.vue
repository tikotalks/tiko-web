<script setup lang="ts">
import Header from './components/sections/Header.vue'
import Footer from './components/sections/Footer.vue'
import { useBemm } from 'bemm';

const bemm = useBemm('app');

</script>

<template>
<div>
  <Header :class="bemm('header')"/>
  <main :class="bemm('main')">
    <RouterView />
  </main>
  <Footer :class="bemm('footer')" />
</div>
</template>

<style lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
