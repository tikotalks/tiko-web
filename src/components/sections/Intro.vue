<script setup lang="ts">
import { useBemm } from 'bemm';
import Button from '../ui/Button/Button.vue';
import ButtonGroup from '../ui/Button/ButtonGroup.vue';
import InfoCard from '../ui/Card/InfoCard.vue';
import { ButtonSettings } from '../ui/Button/Button.model';
import { Icons } from 'open-icon';

const bemm = useBemm('intro');
</script>

<template>
  <section :class="bemm()" id="intro">
    <div :class="bemm('container')">
      <div :class="bemm('content')">
        <h2>Helping Every Child Find Their Voice</h2>
        <h3>For free, forever..</h3>
        <p>Tiko is an open-source, community-driven speech therapy app designed to help children with speech disorders.
          Built with experts, therapists, and parents, our goal is simple: make high-quality speech support accessible
          to every child, everywhere.</p>
        <ButtonGroup :class="bemm('cta')" align="center">
          <Button :type="ButtonSettings.Type.Default" :size="ButtonSettings.Size.Large" :color="ButtonSettings.Color.Tertiary">Join the Beta</Button>
          <Button :type="ButtonSettings.Type.Default" :size="ButtonSettings.Size.Large"  :color="ButtonSettings.Color.Primary">Learn More</Button>
        </ButtonGroup>
      </div>
      <div :class="bemm('features')">
        <InfoCard title="Interactive Learning"
          description="Fun and engaging exercises designed by speech therapy experts" icon="gamepad"
          colorScheme="accent" />
        <InfoCard title="AI-Powered" description="Real-time feedback and personalized progress tracking"
          :icon="Icons.AI_FACE" colorScheme="primary" animationStyle="float" size="large" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.intro {
  padding: var(--spacing);
  color: var(--text-primary);
  position: relative;
  overflow: hidden;

  padding-top: calc(var(--spacing) * 3);

  @keyframes bounceIn {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }

    50% {
      transform: scale(1.05);
    }

    70% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }


  &__container {
border-radius: var(--border-radius);
    padding: var(--spacing);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: var(--space-xxl);
    align-items: center;
    background: linear-gradient(135deg, color-mix(in srgb, var(--color-secondary), var(--color-background) 25%)0%, var(--color-secondary) 100%);


    @media screen and (max-width: 960px){
      grid-template-columns: 1fr;
    }
  }

  &__content {
    text-align: left;

    h2 {
      font-size: 3.5em;
      // text-shadow: 2px 2px 0 rgba(0,0,0,0.1);
      // animation: bounceIn 1s ease-out;
      color: var(--text-secondary);
      text-shadow: 1px 1px 3px var(--color-dark), 3px 3px 0px var(--color-primary), -3px -3px 0px var(--color-secondary);

    }

    p {
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
      animation: fadeInUp 0.8s ease-out 0.3s both;
    }
  }

  &__features {
    display: grid;
    gap: var(--space-l);
    transform: translateY(-2rem);

    >* {
      &:nth-child(2) {
        transform: translateX(2rem);
      }
    }
  }

  &__cta {
    display: flex;
    gap: var(--space);
    animation: fadeIn 0.8s ease-out 0.6s both;
  }

}
</style>
