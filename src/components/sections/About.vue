<script setup lang="ts">
import { useBemm } from 'bemm';
import InfoCard from '../ui/Card/InfoCard.vue';
import { Icons } from 'open-icon';

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
  <section :class="bemm('section')" id="about">
    <div :class="bemm('container')">
      <h2>About Tiko</h2>
      <p>At Tiko, we believe that every child has the right to communicate—regardless of income, location, or access to
        therapy. Speech disorders can impact a child's confidence, learning, and social development, yet therapy remains
        expensive and out of reach for many.</p>

    </div>
  </section>
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


  &__container {

  }

  &__features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    gap: var(--space-xl);
  }

  &__section{
    padding: var(--spacing);
  }
  &__container{
    padding: var(--spacing);
  }
}
</style>
