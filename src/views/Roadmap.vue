<script setup lang="ts">
import { useBemm } from 'bemm'

const bemm = useBemm('roadmap')
</script>

<template>
  <div :class="bemm()">
    <section :class="bemm('hero')">
      <h1>Roadmap</h1>
      <p>Our vision and development plans for Tiko's future</p>
    </section>

    <section :class="bemm('current')">
      <h2>Current Features</h2>
      <ul>
        <li>Core application framework</li>
        <li>Basic user interface and navigation</li>
        <li>Documentation and guides</li>
      </ul>
    </section>

    <section :class="bemm('upcoming')">
      <h2>Upcoming Features</h2>
      <ul>
        <li>Enhanced user experience improvements</li>
        <li>Advanced customization options</li>
        <li>Integration with popular development tools</li>
        <li>Performance optimizations</li>
      </ul>
    </section>

    <section :class="bemm('future')">
      <h2>Long-term Goals</h2>
      <ul>
        <li>Extended plugin ecosystem</li>
        <li>Enterprise-level features</li>
        <li>Advanced automation capabilities</li>
        <li>Cross-platform support enhancements</li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.roadmap {
  max-width: 75em;
  margin: 0 auto;
  padding: var(--space-xl);

  section {

  }

  &__hero {
    text-align: center;

  }

  ul {
    list-style: none;
    padding: 0;

    li {
      position: relative;
      padding: var(--space) var(--space-xl);

      background: color-mix(in srgb, var(--color-background-light), transparent 50%);
      border-radius: var(--radius);
      border: 1px solid color-mix(in srgb, var(--color-primary), transparent 90%);

      &::before {
        content: "";
        position: absolute;
        left: var(--space);
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background: var(--color-primary);
        border-radius: 50%;
      }
    }
  }
}
</style>
