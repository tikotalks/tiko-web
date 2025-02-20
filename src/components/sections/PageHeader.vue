<template>
  <section :class="bemm()" :style="`--background-image: ${backgroundImage}`">
    <div :class="bemm('background')">

    </div>
    <div :class="bemm('container')">
      <div :class="bemm('title')">
        <slot name="title"></slot>
      </div>
      <div :class="bemm('description')">
        <slot name="description"></slot>
      </div>
    </div>
  </section>
</template>


<script lang="ts" setup>
import { useBemm } from 'bemm';
import { onMounted, ref } from 'vue';
import { useImages, Image } from '@tikotalks/media';

const bemm = useBemm('page-header');

const props = defineProps({
  image: {
    type: String,
    default: null,
  },

})

const { getImageUrl } = useImages();
const backgroundImage = ref<string>();

onMounted(() => {

  if(props.image.includes('http')) {
    backgroundImage.value = `url(${props.image})`;
    return;
  }
  if (props.image) {
    backgroundImage.value = `url(${getImageUrl(props.image, 'medium')})`;
    return;
  }

  const totalImages = Object.keys(Image).length;
  const randomImageName = Math.floor(Math.random() * totalImages);
  const image = getImageUrl(Object.values(Image)[randomImageName], 'medium');
  if (image) backgroundImage.value = `url(${image})`;
});

</script>


<style lang="scss">
.page-header {
  padding: var(--spacing);
  background: var(--color-background);
  border-radius: var(--border-radius);
  transition: transform 0.3s ease;
  position: relative;
  margin: 0 var(--spacing);

  gap: var(--spacing);
  background-color: var(--color-background);

  animation: headerPosition linear both;
  animation-timeline: scroll();
  animation-range: 0 50vh;

  &:first-of-type {
    padding-top: calc(var(--spacing) * 4);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }



  @keyframes headerPosition {
    to {
      transform: translateY(20%);
    }
  }

  @keyframes headerTitle {
    to {
      transform: translateY(100%);

    }
  }

  @keyframes headerImage {
    to {
      background-position: 50% 50%;
      background-size: 200%;
    }
  }


  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background);
    border-radius: inherit;
    z-index: 0;
    background-image: var(--background-image);
    background-size: 150%;
    background-position: 100% 50%;
    animation: headerImage linear both;
    animation-timeline: scroll();
    animation-range: 0 50vh;

    opacity: .5;
  }

  &__container {
    gap: calc(var(--spacing) * 2);
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 960px) {
      grid-template-columns: 1fr;
      gap: calc(var(--spacing) * 1);
    }
  }


  &__title {
    width: 1fr;
    color: var(--foreground);
    font-family: var(--font-secondary);
    animation: headerTitle ease-in-out both;
    animation-timeline: scroll();
    animation-range: 0 50vh;

    h2,
    h3 {
      font-family: inherit;
      font-weight: 600;
    }
  }

  &__description {
    width: 2fr;
    color: var(--color-foreground);
    // background-color: var(--color-background);

    border-radius: var(--border-radius);
    backdrop-filter: blur(4px);

    p {
      line-height: 2;
    }

    // background-color: color-mix(in srgb, var(--color-background), transparent 33.33%);
    border-radius: var(--border-radius) var(--border-radius) 0 0;

  }
}
</style>
