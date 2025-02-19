<script setup lang="ts">
import { useBemm } from 'bemm';
import Button from '../components/ui/Button/Button.vue';
import ButtonGroup from '../components/ui/Button/ButtonGroup.vue';
import { ButtonSettings } from '../components/ui/Button/Button.model';
import PageHeader from '@/components/sections/PageHeader.vue';
const bemm = useBemm('open-source');
</script>

<template>
  <div :class="bemm()">


    <PageHeader>
      <template #title>
   `   <h2>Open Source <br/>& Community</h2>
  </template>
      <template #description>
        <p>Tiko is proudly open-source because we believe the best tools are built together. By making our code and resources freely available, we invite developers, designers, and communication experts to collaborate, improve, and expand Tiko for every child’s benefit. Whether you're fixing bugs, adding features, or sharing feedback, your contributions help make communication accessible to all — for free.</p>
      </template>
    </PageHeader>

    <section :class="bemm('content')">
      <div :class="bemm('container')">
        <div :class="bemm('card')">
          <h2>Why Open Source?</h2>
          <p>We believe that by making our code open and freely available, we can:</p>
          <ul>
            <li>Ensure transparency and trust</li>
            <li>Enable continuous improvement through community feedback</li>
            <li>Allow customization for different needs</li>
            <li>Make speech therapy accessible worldwide</li>
          </ul>
        </div>
      </div>
    </section>

    <section :class="bemm('content')">
      <div :class="bemm('container')">
        <div :class="bemm('card')">
          <h2>How to Contribute</h2>
          <p>There are many ways to help improve Tiko:</p>
          <ul>
            <li>Code contributions</li>
            <li>Bug reports and feature requests</li>
            <li>Documentation improvements</li>
            <li>Translations</li>
          </ul>
          <ButtonGroup align="center">
            <Button :color="ButtonSettings.Color.Primary" :type="ButtonSettings.Type.Default">View on GitHub</Button>
            <Button  :color="ButtonSettings.Color.Secondary"  :type="ButtonSettings.Type.Default">Read Contributing Guide</Button>
          </ButtonGroup>
        </div>
      </div>

    </section>
  </div>
</template>

<style lang="scss">
.open-source {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__hero {
    padding: var(--spacing);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary) 100%);
    color: var(--text-primary);
    text-align: center;

    .open-source__container {
      margin: auto;
      width: fit-content;
    }



  }

  &__content {
    padding: var(--spacing);
    flex: 1;
  }

  &__container {}

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
    gap: var(--space-xl);
  }

  &__card{
    padding: var(--spacing);
    background-image: radial-gradient(at 20% 20%,  color-mix(in srgb, var(--color-secondary), transparent 75%), var(--color-background));
    color: var(--text-secondary);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
  }

}
</style>
