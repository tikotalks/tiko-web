<script setup lang="ts">
import { useBemm } from 'bemm';
import { RouterLink } from 'vue-router';

const bemm = useBemm('footer');

const currentYear = new Date().getFullYear();

const footerNavigation: {
  [key: string]: {
    title: string;
    links: {
      label: string;
      to?: string;
      href?: string;
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
      { label: 'Funding', to: '/funding' },
      { label: 'Sponsors', to: '/sponsors' },
      { label: 'Donate', to: '/donate' },
      { label: 'Become a Sponsor', to: '/sponsors' },
    ]
  },
  contact: {
    title: 'Contact',
    links: [
      { label: 'hello@tikoapp.com', href: 'mailto:hello@tikoapp.com' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'TikTok', href: '#' },
      { label: 'X', href: '#' },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/legal/privacy' },
      { label: 'Terms of Service', to: '/legal/terms' },
      { label: 'Cookie Policy', to: '/legal/cookies' },
    ]
  },
  community: {
    title: 'Community',
    links: [
      { label: 'Documentation', to: '/docs' },
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
          <h1>tiko</h1>
          <div v-for="(section, key) in footerNavigation" :key="key" :class="bemm('section')">
            <h3 :class="bemm('title')">{{ section.title }}</h3>
            <ul :class="bemm('list')">
              <li v-for="link in section.links" :key="link.label" :class="bemm('item')">
                <RouterLink v-if="link.to" :to="link.to" :class="bemm('link')">
                  <span :class="bemm('text')">
                    {{ link.label }}

                  </span>
                </RouterLink>
                <a v-else-if="link.href" :href="link.href" target="_blank" rel="noopener" :class="bemm('link')">
                  <span :class="bemm('text')">
                    {{ link.label }}
                  </span>
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
  color: var(--color-foreground);
  padding-bottom: 0;

  @media screen and (max-width: 960px){
    padding: var(--spacing);
    padding-left: 0;
  }

  &__container {
    margin: 0 auto;
    background: var(--color-background);
    padding: var(--spacing);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    @media screen and (max-width: 960px){
      border-radius: 0 var(--border-radius) var(--border-radius) 0;

  }
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

  &__title {
    font-size: 1em;
    font-weight: 600;
    color: var(--color-foreground);
    opacity: .25;
    display: block;
    padding: var(--space-s);
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  &__item {
    padding: var(--space-s);
  }

  &__link {
    font-size: 0.875em;
    color: var(--color-foreground-alt);
    text-decoration: none;
    transition: color 0.2s ease;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      background-color: currentColor;
      width: 100%;
      left: 0;
      animation: lineOut .3s forwards;

      transform-origin: 100% 100%;


    }

    &:hover {
      color: var(--color-primary);
      text-decoration: none;

      &::before {
        transform-origin: 0 0;
        animation: lineIn .3s forwards;
      }
    }
  }

  @keyframes lineIn {
    from {
      transform: scale(0, 1);
    }

    to {
      transform: scale(1, 1);
    }
  }

  @keyframes lineOut {
    from {
      transform: scale(1, 1);
    }

    to {
      transform: scale(0, 1);
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
    opacity: .25;
    color: var(--color-foreground-alt);
  }
}
</style>
