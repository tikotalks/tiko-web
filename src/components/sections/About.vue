<script setup lang="ts">
import { useBemm } from 'bemm';
import InfoCard from '../ui/Card/InfoCard.vue';
import { Icons } from 'open-icon';
import { Image } from "@tikotalks/media";
import PageHeader from './PageHeader.vue';

const bemm = useBemm('about');

const features = [
  {
    icon: 'microphone',
    title: 'Interactive Speech Exercises',
    description: 'Guided activities designed by experts to help kids practice pronunciation and speech patterns',
    colorScheme: 'primary',
    animationStyle: 'scale'
  },
  {
    icon: 'gamepad',
    title: 'Gamified Learning',
    description: 'Fun and rewarding experiences keep children engaged and motivated',
    colorScheme: 'secondary',
    animationStyle: 'slide'
  },
  {
    icon: Icons.AI_FACE,
    title: 'AI-Powered Speech Recognition',
    description: 'Intelligent feedback provides real-time support tailored to each child\'s needs',
    colorScheme: 'tertiary',
    animationStyle: 'fade'
  },
  {
    icon: 'users',
    title: 'Community-Driven Development',
    description: 'Open-source and shaped by therapists, educators, and families worldwide',
    colorScheme: 'primary',
    animationStyle: 'scale'
  },
  {
    icon: 'heart',
    title: 'Always Free & Open-Source',
    description: 'No paywalls, no subscriptions—funded by grants and donations to stay accessible to all',
    colorScheme: 'secondary',
    animationStyle: 'slide'
  }
];
</script>

<template>
  <PageHeader :image="Image.ZEBRA">
    <template #title>
      <h2>About Tiko</h2>
    </template>
    <template #description>
      <p>Tiko was created with one simple belief — every child deserves a voice. We’re on a mission to make communication easy, accessible, and free for all children, not just those who can afford it. Existing tools are often expensive, complicated, and slow to reach those in need. Tiko changes that by offering beautifully designed, intuitive apps that empower children to express themselves, connect, and grow — all without barriers.</p>
    </template>

  </PageHeader>

  <section :class="bemm('section')">
    <div :class="bemm('container')">
      <div :class="bemm('features')">
        <InfoCard v-for="feature in features" :key="feature.title" :icon="feature.icon" :title="feature.title"
          :description="feature.description" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  padding: var(--spacing);


  &__container {}

  &__features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    gap: var(--space-xl);
  }

  &__section {
    padding: var(--spacing);
  }

  &__container {
    padding: var(--spacing);

    @media screen and (max-width: 960px) {
      padding: 0;
    }
  }
}
</style>
