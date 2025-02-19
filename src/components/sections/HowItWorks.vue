<script setup lang="ts">
import { useBemm } from 'bemm';
import StepCard from '../ui/Card/StepCard.vue';
import { Icons } from 'open-icon';
import PageHeader from './PageHeader.vue';
import { Image } from '@tikotalks/media';

const bemm = useBemm('how-it-works');

const steps = [
  {
    icon: Icons.VOLUME_III,
    title: 'Interactive Speech Exercises',
    description: 'Children practice pronunciation and communication through guided activities',
    colorScheme: 'primary',
    animationStyle: 'scale'
  },
  {
    icon: Icons.GAMEPAD,
    title: 'Gamified Learning',
    description: 'Fun, reward-based exercises keep kids motivated and engaged',
    colorScheme: 'secondary',
    animationStyle: 'slide'
  },
  {
    icon: Icons.AI_FACE,
    title: 'AI-Powered Recognition',
    description: 'Intelligent feedback helps track progress and encourage improvement',
    colorScheme: 'tertiary',
    animationStyle: 'fade'
  }
];
</script>

<template>


  <PageHeader  :image="Image.IGUANA">
    <template #title>
      <h2>How It Works</h2>
    </template>
    <template #description>
      <p>Tiko makes communication simple. Our apps use intuitive visuals and easy-to-navigate boards, guiding children from basic responses to building sentences. No complex setups or logins — just open the app and start communicating. Designed for independent use, with future options for teachers, therapists, and parents to customize boards and exercises, Tiko adapts to each child’s needs while keeping things fun and engaging.</p>
    </template>
  </PageHeader>

  <section :class="bemm('section')" id="how-it-works">
    <div :class="bemm('container')">
      <div :class="bemm('steps')">
        <StepCard v-for="(step, index) in steps" :key="step.title" :step="index" :icon="step.icon" :title="step.title"
          :description="step.description" />

      </div>
    </div>
  </section>
</template>

<style lang="scss">
.how-it-works {
  padding: var(--spacing);
  background-color: var(--color-accent);

  &__section {
    padding: var(--spacing);

    &--hero {
      font-size: 1.5em;
    }
  }

  &__container {
    padding: var(--spacing);
    text-align: center;

  }

  &__steps {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  &__step {}
}
</style>
