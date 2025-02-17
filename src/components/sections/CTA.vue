<script setup lang="ts">
import { useBemm } from 'bemm';
import Icon from '../ui/Icon/Icon.vue';
import Button from '../ui/Button/Button.vue';
import { ButtonSettings } from '../ui/Button/Button.model';
import { Icons } from 'open-icon';

const bemm = useBemm('cta');

const groups = [
  {
    icon: Icons.BABY_STROLLER,
    title: 'For Parents & Children',
    description: 'Sign up to be notified when Tiko launches!'
  },
  {
    icon: Icons.EDUCATION,
    title: 'For Educators & Therapists',
    description: 'Share your expertise to improve Tiko and bring it into your practice.'
  },
  {
    icon: Icons.CODE_BRACKETS,
    title: 'For Developers & Contributors',
    description: 'Help us build and refine Tiko through open-source contributions.'
  },
  {
    icon: Icons.HEART_M,
    title: 'For Supporters',
    description: 'Donate or help us spread the word so we can keep Tiko free for everyone.'
  }
];
</script>

<template>
  <section :class="bemm()" id="cta">
    <div :class="bemm('container')">
      <div :class="bemm('content')">

      <h2>Join Our Mission</h2>
      <p>Help us make speech therapy accessible to every child who needs it.</p>
    </div>
    <div :class="bemm('grid')">
        <div v-for="group in groups" :key="group.title" :class="[bemm('card'),'gradient']">
          <div :class="[bemm('card-icon'), 'blob','gradient']">
            <Icon :name="group.icon" size="large" />
          </div>
          <h3>{{ group.title }}</h3>
          <p>{{ group.description }}</p>
        </div>
      </div>
      <div :class="bemm('action')">
        <Button :type="ButtonSettings.Type.Default" :size="ButtonSettings.Size.Large">Join the Beta</Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.cta {
  padding: var(--spacing);


  &__container {
    background: var(--color-primary);
    color: var(--text-primary);
    padding: var(--spacing);
    border-radius: var(--border-radius);
    margin: 0 auto;
    text-align: center;

    display: flex; flex-direction:column; gap: var(--spacing);

    h2{
      color: var(--text-primary);
    }

  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    gap: var(--space-l);
  }

  &__card {
    padding: var(--space-l);
    background-color: color-mix(in srgb, var(--color-background) 15%, transparent);
    border-radius: var(--border-radius);
    backdrop-filter: blur(10px);

    --gradient-color: color-mix(in srgb, var(--color-background), transparent 50%);





  }

  &__card-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    height: 1.5em;
    font-size: 3em;
    background-color: var(--color-background);
    border-radius: 50%;
    color: var(--color-primary);
    margin-top: -1em;

    --gradient-color: var(--color-primary);
  }

  &__action {
    margin-top: var(--space-xl);
  }
}
</style>
