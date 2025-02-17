<script setup lang="ts">
import { useBemm } from 'bemm';
import StepCard from '../ui/Card/StepCard.vue';
import { Icons } from 'open-icon';

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
  <section :class="bemm('section',['','hero'])" id="how-it-works">
    <div :class="bemm('container')">
      <h2>How It Works</h2>
      <p>Experience the power of interactive speech therapy</p>
    </div>
  </section>
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
    &--hero{
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
