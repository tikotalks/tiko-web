<script setup lang="ts">
import { useBemm } from 'bemm';
import Button from '../components/ui/Button/Button.vue';
import { ButtonSettings } from '../components/ui/Button/Button.model';

const bemm = useBemm('press');

const pressReleases = [
  {
    date: '2024-01-15',
    title: 'Tiko Launches Beta Program',
    description: 'Open-source speech therapy app begins testing with initial user group'
  },
  {
    date: '2023-12-01',
    title: 'Research Partnership Announcement',
    description: 'Collaboration with leading universities to validate speech therapy methods'
  }
];

const researchPapers = [
  {
    authors: 'Smith et al.',
    year: 2023,
    title: 'Digital Speech Therapy Effectiveness',
    journal: 'Journal of Speech Pathology',
    link: '#'
  },
  {
    authors: 'Johnson et al.',
    year: 2023,
    title: 'AI in Speech Therapy Applications',
    journal: 'Digital Health Review',
    link: '#'
  }
];
</script>

<template>
  <div :class="bemm()">
    <section :class="bemm('hero')">
      <div :class="bemm('container')">
        <h1>Press & Research</h1>
        <p>Latest news, research, and media coverage about Tiko</p>
      </div>
    </section>

    <section :class="bemm('content')">
      <div :class="bemm('container')">
        <div :class="bemm('grid')">
          <div :class="bemm('card')">
            <h2>Press Releases</h2>
            <div :class="bemm('press-items')">
              <div v-for="item in pressReleases" :key="item.title" :class="bemm('press-item')">
                <span :class="bemm('date')">{{ item.date }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <Button :type="ButtonSettings.Type.Default">Read More</Button>
              </div>
            </div>
          </div>

          <div :class="bemm('card')">
            <h2>Research</h2>
            <div :class="bemm('research-items')">
              <div v-for="paper in researchPapers" :key="paper.title" :class="bemm('research-item')">
                <h3>{{ paper.title }}</h3>
                <p>{{ paper.authors }} ({{ paper.year }})</p>
                <p>{{ paper.journal }}</p>
                <Button :type="ButtonSettings.Type.Default" :href="paper.link">View Paper</Button>
              </div>
            </div>
          </div>
        </div>

        <div :class="bemm('media-contact')">
          <h2>Media Contact</h2>
          <p>For press inquiries, please contact our media relations team:</p>
          <Button :type="ButtonSettings.Type.Default" href="mailto:press@tikoapp.com">Contact Press Team</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.press {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__hero {
    padding: var(--space-xl) var(--space);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    color: var(--text-primary);
    text-align: center;


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


  &__press-items,
  &__research-items {
    display: grid;
    gap: var(--space-l);
  }

  &__press-item,
  &__research-item {
    padding: var(--space-l);
    background: var(--color-background);
    border-radius: var(--radius);

    h3 {
      color: var(--color-primary);

      font-size: 1.25em;
    }

    p {
      color: var(--color-foreground-alt);

      line-height: 1.6;
    }
  }

  &__date {
    display: inline-block;
    padding: var(--space-s) var(--space);
    background: color-mix(in srgb, var(--color-primary), transparent 90%);
    color: var(--color-primary);
    border-radius: var(--radius);

    font-size: 0.9em;
  }

  &__media-contact {
    text-align: center;
    padding: var(--space-xl);
    background: var(--color-background);
    border-radius: var(--radius);
    box-shadow: 0 4px 6px color-mix(in srgb, var(--color-foreground), transparent 90%);

  }
}
</style>
