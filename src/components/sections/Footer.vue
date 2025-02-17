<script setup lang="ts">
import { useBemm } from 'bemm';
import { RouterLink } from 'vue-router';

const bemm = useBemm('footer');

const currentYear = new Date().getFullYear();

const footerNavigation:{
  [key:string]:{
    title:string;
    links:{
      label:string;
      to?:string;
      href?:string;
    }[];
  }
} = {
  resources: {
    title: 'Resources',
    links: [
      { label: 'Press', to: '/press' },
      { label: 'Roadmap', to: '/roadmap' },
    ]
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Funding', to: '/funding' }
    ]
  },
  contact: {
    title: 'Contact',
    links: [
      { label: 'Email: hello@tikoapp.com', href: 'mailto:hello@tikoapp.com' },
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/legal/privacy' },
      { label: 'Terms of Service', to: '/legal/terms' },
    ]
  },
  community: {
    title: 'Community',
    links: [
      { label: 'Open Source', to: '/open-source' },
      { label: 'GitHub', href: 'https://github.com/tiko' },
    ]
  }
};
</script>

<template>
  <footer :class="bemm()">
    <div :class="bemm('container')">
      <div :class="bemm('content')">
        <div :class="bemm('navigation')">
          <div v-for="(section, key) in footerNavigation" :key="key" :class="bemm('section')">
            <h3 :class="bemm('section-title')">{{ section.title }}</h3>
            <ul :class="bemm('section-links')">
              <li v-for="link in section.links" :key="link.label" :class="bemm('section-item')">
                <RouterLink v-if="link.to" :to="link.to" :class="bemm('link')">
                  {{ link.label }}
                </RouterLink>
                <a v-else-if="link.href" :href="link.href" target="_blank" rel="noopener" :class="bemm('link')">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div :class="bemm('bottom')">
          <div :class="bemm('copyright')">
            © {{ currentYear }} Tiko. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: var(--spacing);
  background: var(--color-background);
  color: var(--color-foreground);

  &__container {
    max-width: 75em;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  &__navigation {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-xl);
  }

  &__section {
    &-title {
      font-size: 1em;
      font-weight: 600;
      color: var(--color-foreground);
    }

    &-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &-item {
    }
  }

  &__link {
    font-size: 0.875em;
    color: var(--color-foreground-alt);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;
    padding-top: var(--space-l);
    border-top: 1px solid var(--color-border);
  }

  &__copyright {
    font-size: 0.875em;
    color: var(--color-foreground-alt);
  }
}
</style>
