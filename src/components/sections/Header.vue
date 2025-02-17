<script setup lang="ts">
import { useBemm } from 'bemm';
import { RouterLink } from 'vue-router';

const bemm = useBemm('header');

const navigation = {
  menu: [
    { id: 'about', label: 'About', link: '/about' },
    { id: 'how-it-works', label: 'How it Works', link: '/how-it-works' }
  ]
};
</script>

<template>
  <header :class="bemm()">
    <div :class="bemm('container')">
      <div :class="bemm('logo')">
        <RouterLink to="/">
          <h1>tiko</h1>
        </RouterLink>
      </div>
      <nav :class="bemm('nav')">
        <ul :class="bemm('list')">
          <li :class="bemm('item')" v-for="(item, index) in navigation.menu" :key="index">
            <RouterLink :class="bemm('link')" :to="item.link">
              <span :class="bemm('text')">
                {{ item.label }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: var(--space);
  position: fixed;
  top: 0;
  z-index: 100;
  margin: auto;
  padding: var(--space);
  width: 100%;

  &__container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: color-mix(in srgb, var(--color-background), transparent 90%);
    max-width: 75em;
    backdrop-filter: blur(8px);
    padding: var(--space);
    border-radius: var(--border-radius);
  }

  &__list {
    display: flex;
    gap: var(--space);
    list-style: none;
    margin: 0;
    padding: 0;

  }

  &__link {


    color: var(--color-foreground);
    text-decoration: none;
    display: block; padding:var(--space-s) var(--space);
    border-radius: var(--border-radius);

    &:hover {
      color: var(--color-primary);
    }

    &.router-link-active {
      background: var(--color-primary);
      color: var(--text-primary);
    }
  }

  &__text {
    font-weight: 600;
  }

  &__logo {
    a {
      text-decoration: none;
      color: var(--color-foreground);
      text-shadow:1px 1px 3px var(--color-dark), 3px 3px 0px var(--color-primary),-3px -3px 0px var(--color-secondary);

      &:hover {
        color: var(--color-primary);
      }
    }
  }
}
</style>
