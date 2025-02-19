<script setup lang="ts">
import { useBemm } from 'bemm';
import { apps } from '@/data/apps';
import AppCard from '@/components/ui/Card/AppCard.vue';
import Button from '@/components/ui/Button/Button.vue';
import ButtonGroup from '@/components/ui/Button/ButtonGroup.vue';
import { ButtonSettings } from '@/components/ui/Button/Button.model';

const bemm = useBemm('apps-page');
</script>

<template>
  <div :class="bemm()">
    <section :class="bemm('hero')">
      <h1>Our Apps</h1>
      <p>Discover our suite of AI-powered applications</p>
    </section>

    <section :class="bemm('grid')">
      <AppCard v-for="app in apps" :key="app.id" :title="app.name" :description="app.description" :icon="app.icon"
        :tags="app.tags" :image="app.image?.thumbnail">
        <template #actions>
          <ButtonGroup>
            <Button :size="ButtonSettings.Size.Small" :color="ButtonSettings.Color.Primary" :to="`/apps/${app.id}`" :icon="ButtonSettings.Icon.ARROW_RIGHT">Learn More</Button>
            <Button :size="ButtonSettings.Size.Small" :color="ButtonSettings.Color.Secondary" v-if="app.downloads[0]" :to="app.downloads[0].url" :icon="ButtonSettings.Icon.ARROW_DOWNLOAD">
              Try Now
            </Button>
          </ButtonGroup>
        </template>
      </AppCard>
    </section>
  </div>
</template>

<style lang="scss">
.apps-page {
  max-width: 75em;
  margin: 0 auto;
  padding: var(--space-xl);

  &__hero {
    text-align: center;
    margin-bottom: var(--space-xxl);

    p {
      font-size: 1.2em;
      color: var(--color-text-light);
    }
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: var(--space);
  }

  &__app {
    background: var(--color-surface);
    border-radius: var(--border-radius);
    padding: var(--space-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-4px);
    }
  }

  &__app-icon {
    margin-bottom: var(--space-l);
  }

  &__app-title {
    margin-bottom: var(--space);
  }

  &__app-description {
    margin-bottom: var(--space-l);
    color: var(--color-text-light);
  }

  &__app-tags {
    display: flex;
    gap: var(--space);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--space-l);
  }

  &__app-tag {
    background: var(--color-primary);
    color: var(--color-primary-contrast);
    padding: var(--space-xs) var(--space);
    border-radius: var(--border-radius);
    font-size: 0.9em;
  }

  &__app-actions {
    display: flex;
    gap: var(--space);
    flex-direction: column;
    margin-top: auto;
  }
}
</style>
