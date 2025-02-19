<script setup lang="ts">
import { useBemm } from 'bemm';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { apps } from '@/data/apps';
import Icon from '@/components/ui/Icon/Icon.vue';
import Button from '@/components/ui/Button/Button.vue';
import ButtonGroup from '@/components/ui/Button/ButtonGroup.vue';
import { ButtonSettings } from '@/components/ui/Button/Button.model';

const bemm = useBemm('app-detail');
const route = useRoute();

const app = computed(() => {
  return apps.find((app) => app.id === route.params.id);
});
</script>

<template>
  <div v-if="app" :class="bemm()">
    <section :class="bemm('hero')">
      <div :class="bemm('hero-content')">
        <div :class="bemm('header')">
          <Icon :class="bemm('icon')" v-if="app.icon" :name="app.icon"  />
          <div :class="bemm('header-text')">
            <h1 :class="bemm('title')">{{ app.name }}</h1>
            <div :class="bemm('tags')">
              <span v-for="tag in app.tags" :key="tag" :class="bemm('tag')">{{ tag }}</span>
            </div>
          </div>
        </div>
        <p :class="bemm('intro')">{{ app.description }}</p>
        <ButtonGroup v-if="app.downloads?.length">
          <Button
            v-for="download in app.downloads"
            :key="download.url"
            :color="ButtonSettings.Color.Primary"
            :icon="ButtonSettings.Icon.ARROW_DOWNLOAD"
            :to="download.url"
          >
            {{ download.platform }}
          </Button>
        </ButtonGroup>
      </div>
      <div :class="bemm('hero-image')" v-if="app.image?.original">
        <img :src="app.image.original" :alt="app.name" />
      </div>
    </section>

    <!-- Content Section -->
    <section :class="bemm('content')">
      <div :class="bemm('full-description')" v-if="app.fullDescription">
        <div v-html="app.fullDescription"></div>
      </div>

      <div :class="bemm('features')" v-if="app.features?.length">
        <h2>Key Features</h2>
        <ul>
          <li v-for="feature in app.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </section>
  </div>
  <div v-else :class="bemm('not-found')">
    <h1>App Not Found</h1>
    <p>The requested application could not be found.</p>
    <Button :to="'/apps'" :color="ButtonSettings.Color.Primary">Back to Apps</Button>
  </div>
</template>

<style lang="scss">
.app-detail {
  max-width: 75em;
  margin: 0 auto;
  padding: var(--space-xl);

  &__hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: var(--space-xxl);
    margin-bottom: var(--space-xxl);
    align-items: start;
    min-height: 60vh;
  }

  &__hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    position: sticky;
    top: var(--space-xl);
  }

  &__header {
    display: flex;
    gap: var(--space-l);
    align-items: center;
  }

  &__header-text {
    flex: 1;
  }

  &__icon {
    width: 64px;
    height: 64px;
    object-fit: contain;
    border-radius: var(--border-radius);
    padding: var(--space-xs);
    background: var(--color-surface);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &__title {
    margin: 0;
    font-size: 2.5em;
    line-height: 1.2;
  }

  &__intro {
    font-size: 1.25em;
    line-height: 1.6;
    color: var(--color-text-light);
    margin: 0;
  }

  &__tags {
    display: flex;
    gap: var(--space-xs);
    flex-wrap: wrap;
    margin-top: var(--space-xs);
  }

  &__tag {
    background: var(--color-surface);
    color: var(--color-text);
    padding: var(--space-xs) var(--space-s);
    border-radius: var(--border-radius);
    font-size: 0.9em;
  }

  &__hero-image {
    position: relative;

    img {
      width: 100%;
      height: auto;
      border-radius: var(--border-radius);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    &::after {
      content: '';
      position: absolute;
      inset: -20px;
      background: var(--color-primary);
      opacity: 0.1;
      border-radius: calc(var(--border-radius) * 2);
      z-index: -1;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);
  }

  &__full-description {
    font-size: 1.1em;
    line-height: 1.8;
    color: var(--color-text);

    :deep(h2) {
      font-size: 1.75em;
      margin: var(--space-xl) 0 var(--space-l);
    }

    :deep(h3) {
      font-size: 1.4em;
      margin: var(--space-l) 0 var(--space);
    }

    :deep(p) {
      margin: var(--space) 0;
    }

    :deep(ul, ol) {
      margin: var(--space) 0;
      padding-left: var(--space-xl);
    }

    :deep(li) {
      margin: var(--space-xs) 0;
    }

    :deep(a) {
      color: var(--color-primary);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__features {
    margin-top: var(--space-xxl);

    h2 {
      font-size: 1.75em;
      margin-bottom: var(--space-xl);
    }

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: var(--space-l);
      list-style: none;
      padding: 0;

      li {
        position: relative;
        padding: var(--space-l);
        background: var(--color-surface);
        border-radius: var(--border-radius);
        font-size: 1.1em;

        &::before {
          content: "✓";
          position: absolute;
          left: var(--space-s);
          color: var(--color-primary);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    &__hero {
      grid-template-columns: 1fr;
    }

    &__hero-content {
      position: static;
    }
  }

  @media (max-width: 768px) {
    padding: var(--space-l);

    &__title {
      font-size: 2em;
    }

    &__intro {
      font-size: 1.1em;
    }

    &__features {
      ul {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
