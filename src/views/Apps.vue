<script setup lang="ts">
import { useBemm } from 'bemm';
import { apps } from '@/data/apps';
import AppCard from '@/components/ui/Card/AppCard.vue';
import Button from '@/components/ui/Button/Button.vue';
import ButtonGroup from '@/components/ui/Button/ButtonGroup.vue';
import { ButtonSettings } from '@/components/ui/Button/Button.model';
import PageHeader from '@/components/sections/PageHeader.vue';
import { Image } from '@tikotalks/media';

const bemm = useBemm('apps-page');
</script>

<template>
  <PageHeader :image="Image.COMPUTER_SCREEN">
    <template #title>
      <h2>Our Apps</h2>
    </template>
    <template #description>
      <p>Tiko’s apps are designed to make communication easy, fun, and accessible for every child. From simple yes/no answers to building sentences and expressing needs, our tools help children connect with others and express themselves confidently — all in a safe, intuitive, and engaging way. And best of all, they’re completely free.</p>
    </template>
  </PageHeader>
  <div :class="bemm()">
    <section :class="bemm('grid')">
      <h2>Apps</h2>
      <AppCard v-for="app in apps.filter((a)=>a.category == 'app')" :key="app.id" :title="app.name" :description="app.description" :icon="app.icon"
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

  <div :class="bemm()">
    <section :class="bemm('grid')">
      <h2>Libraries</h2>
      <AppCard v-for="app in apps.filter((a)=>a.category == 'library')" :key="app.id" :title="app.name" :description="app.description" :icon="app.icon"
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
  padding: var(--spacing);



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
