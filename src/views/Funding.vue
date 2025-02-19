<script setup lang="ts">
import { useBemm } from 'bemm';
import Button from '../components/ui/Button/Button.vue';
import { ButtonSettings } from '../components/ui/Button/Button.model';
import InfoCard from '@/components/ui/Card/InfoCard.vue';
import { Icons } from "open-icon";
import PageHeader from '@/components/sections/PageHeader.vue';
import { Image } from '@tikotalks/media';
const bemm = useBemm('funding');
</script>

<template>
  <div :class="bemm()">
    <PageHeader :image="Image.HELICOPTER">
      <template #title>
        <h2>Support Tiko</h2>
      </template>
      <template #description>
        <p>Your support helps Tiko give every child a voice. Whether you're a parent, teacher, therapist, developer, or advocate, there are many ways to get involved — from sharing feedback and contributing code to helping us spread the word. Together, we can make communication accessible to all children, for free. Need help or want to contribute? We’re here for you.</p>
      </template>
    </PageHeader>

    <section :class="bemm('content')">
      <div :class="bemm('container')">
        <div :class="bemm('grid')">
          <div :class="bemm('card')">
            <h2>Why We Need Support</h2>
            <p>Tiko is committed to remaining free forever, but we need your help to:</p>
            <ul>
              <li>Maintain and improve our infrastructure</li>
              <li>Develop new features and exercises</li>
              <li>Support our research and development</li>
              <li>Ensure long-term sustainability</li>
            </ul>
          </div>

          <div :class="bemm('card')">
            <h2>Ways to Support</h2>
            <div :class="bemm('support-options')">
              <InfoCard title="One-time Donation" description="Support our mission with a single contribution"
                :icon="Icons.BOX">
                <Button :type="ButtonSettings.Type.Default" :color="ButtonSettings.Color.Primary">Donate Now</Button>
              </InfoCard>
              <InfoCard title="Monthly Support" description="Become a sustaining supporter with monthly donations"
                :icon="Icons.HEART_M">
                <Button :type="ButtonSettings.Type.Default" :color="ButtonSettings.Color.Primary">Become a
                  Supporter</Button>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.funding {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: var(--spacing);

  &__hero {
    padding: var(--spacing);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    color: var(--text-primary);
    text-align: center;
    border-radius: var(--border-radius);

  }

  &__content {
    padding: var(--space-xl) var(--space);
    flex: 1;
  }

  &__container {
    max-width: 75em;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
    gap: var(--space-xl);
  }

  &__support-options {
    display: grid;
    gap: var(--space-l);
  }

  &__support-option {
    padding: var(--space-l);
    background: var(--color-background);
    border-radius: var(--radius);
    text-align: center;

    h3 {
      color: var(--color-primary);

    }
  }
}
</style>
