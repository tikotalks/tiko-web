<script setup lang="ts">
import { useBemm } from 'bemm';
import HowItWorksSection from '../components/sections/HowItWorks.vue';
import InfoCard from '@/components/ui/Card/InfoCard.vue';

const bemm = useBemm('how-it-works-page');
</script>

<template>
  <div :class="bemm()">
    <HowItWorksSection />
    <div :class="bemm('hero-section')">
      <div :class="bemm('container')">
        <InfoCard
          title="Empowering Every Voice"
          description="Our innovative speech therapy platform combines cutting-edge technology with expert guidance to help children overcome speech challenges."
          imageUrl="/images/hero-image.jpg"
          layout="featured"
          size="large"
          icon="microphone"
          colorScheme="accent"
          animationStyle="float"
        />
      </div>
    </div>
    <div :class="bemm('additional-content')">
      <div :class="bemm('container')">
        <h2>Technical Details</h2>
        <div :class="bemm('features', ['scattered'])">
          <InfoCard
            title="Speech Recognition"
            description="Our advanced AI models process speech in real-time, providing instant feedback on pronunciation and articulation."
            icon="accessibility-person"
            colorScheme="primary"
            animationStyle="scale"
            size="large"
            layout="horizontal"
          />
          <InfoCard
            title="Progress Tracking"
            description="Detailed analytics help track improvement over time, with personalized recommendations for practice areas."
            icon="chart-bars-squared"
            colorScheme="quaternary"
            animationStyle="slide"
            size="medium"
          />
          <InfoCard
            title="Customization"
            description="Exercises adapt to each child's needs, focusing on specific speech patterns and sounds they find challenging."
            icon="cog"
            colorScheme="accent"
            animationStyle="fade"
            size="small"
          />
        </div>
      </div>
    </div>
    <div :class="bemm('mission')">
      <div :class="bemm('container')">
        <h2>Join Our Mission</h2>
        <div :class="bemm('features', ['grid'])">
          <InfoCard
            title="For Parents"
            description="Help your child develop strong communication skills with our free, expert-designed exercises."
            icon="toy-blocks"
            clickable
            colorScheme="primary"
            animationStyle="scale"
            size="medium"
          />
          <InfoCard
            title="For Educators"
            description="Integrate Tiko into your teaching toolkit and support students with speech challenges."
            icon="board-multi"
            clickable
            colorScheme="secondary"
            animationStyle="slide"
            size="medium"
          />
          <InfoCard
            title="For Developers"
            description="Contribute to our open-source platform and help make speech therapy accessible to all."
            icon="code"
            clickable
            colorScheme="tertiary"
            animationStyle="fade"
            size="medium"
          />
          <InfoCard
            title="For Supporters"
            description="Support our mission through donations or by spreading the word about Tiko."
            icon="heart"
            clickable
            colorScheme="quaternary"
            animationStyle="float"
            size="medium"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.how-it-works-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;


  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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

  @keyframes floatBackground {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 60px 60px;
    }
  }

  &__hero-section {
    padding: var(--space-xxl) var(--space);
    background: linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 15%, var(--color-background)) 0%, var(--color-background) 100%);
  }

  &__additional-content {
    padding: var(--space-xxl) var(--space);
    background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 8%, var(--color-background)) 0%, color-mix(in srgb, var(--color-secondary) 8%, var(--color-background)) 100%);
    position: relative;
    overflow: hidden;

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: -50%;
    //   left: -50%;
    //   width: 200%;
    //   height: 200%;
    //   background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    //   animation: rotate 20s linear infinite;
    // }
  }

  &__container {
    max-width: 75em;
    margin: 0 auto;
    padding: 0 var(--space-l);

    h2 {
      text-align: center;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
     background-clip: text;

      position: relative;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);

      // &::after {
      //   content: '';
      //   position: absolute;
      //   bottom: -0.5em;
      //   left: 25%;
      //   width: 50%;
      //   height: 4px;
      //   background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
      //   border-radius: 2px;
      // }
    }
  }

  &__features {
    &--scattered {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);

      > :nth-child(1) { grid-column: 1 / 3; }
      > :nth-child(4) { grid-column: 1 / 3; }
      // > :nth-child(2) { transform: translateY(2rem); }
      // > :nth-child(3) { transform: translateY(-2rem); }
    }

    &--grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
      gap: var(--space-xl);
    }

    animation: fadeInUp 0.6s ease-out forwards;
  }

  &__mission {
    padding: var(--space-xxl) var(--space);
    background: linear-gradient(135deg, color-mix(in srgb, var(--color-secondary) 8%, var(--color-background)) 0%, color-mix(in srgb, var(--color-tertiary) 8%, var(--color-background)) 100%);
    position: relative;
    overflow: hidden;

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="4" fill="rgba(255,255,255,0.1)"/></svg>');
    //   opacity: 0.5;
    //   animation: floatBackground 20s linear infinite;
    // }
  }

}
</style>
