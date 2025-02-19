<script setup lang="ts">
import { useBemm } from 'bemm';
import HowItWorksSection from '../components/sections/HowItWorks.vue';
import InfoCard from '@/components/ui/Card/InfoCard.vue';

const bemm = useBemm('how-it-works-page');
</script>

<template>
  <div :class="bemm()">
    <HowItWorksSection />
    <section :class="bemm('hero-section')">
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
    </section>
    <section :class="bemm('additional-content')">
      <div :class="bemm('container')">
        <h2>Technical Details</h2>
        </div>

      <div :class="bemm('container')">
        <div :class="bemm('features')">
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
    </section>
    <section :class="bemm('mission')">
      <div :class="bemm('container')">
        <h2>Join Our Mission</h2>
        </div>
        <div :class="bemm('container')">

        <div :class="bemm('features')">
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
    </section>
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

    padding: var(--spacing);    background: linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 15%, var(--color-background)) 0%, var(--color-background) 100%);
  }

  &__additional-content {
    padding: var(--spacing);
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 960px){
      padding: 0;
    }

    .how-it-works-page__container{
        &:nth-child(1) {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        &:nth-child(2) {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        &:nth-child(3) {
          animation: fadeInUp 1s ease-out forwards;
        }

      background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 8%, var(--color-background)) 0%, color-mix(in srgb, var(--color-secondary) 8%, var(--color-background)) 100%);

    }

  }

  &__container {
    max-width: 75em;
    margin: 0 auto;
    padding: var(--spacing);

  }

  &__features {


      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
      gap: var(--space-xl);

    animation: fadeInUp 0.6s ease-out forwards;
  }

  &__mission {
    padding: var(--spacing);
  }

}
</style>
