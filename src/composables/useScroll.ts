import { onMounted, onUnmounted } from 'vue';

export const useScroll = () => {
  let lastScrollY = 0;

  const updateScrollClasses = () => {
    const scrollY = window.scrollY;
    const body = document.body;

    // Handle on-top/off-top
    if (scrollY === 0) {
      body.classList.add('on-top');
      body.classList.remove('off-top');
    } else {
      body.classList.add('off-top');
      body.classList.remove('on-top');
    }

    // Handle scroll direction
    if (scrollY > lastScrollY) {
      body.classList.add('scroll-down');
      body.classList.remove('scroll-up');
    } else if (scrollY < lastScrollY) {
      body.classList.add('scroll-up');
      body.classList.remove('scroll-down');
    }

    lastScrollY = scrollY;
  };

  onMounted(() => {
    updateScrollClasses();
    window.addEventListener('scroll', updateScrollClasses);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollClasses);
  });
};
