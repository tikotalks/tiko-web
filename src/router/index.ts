import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: () => import('../views/HowItWorks.vue')
    },
    {
      path: '/open-source',
      name: 'open-source',
      component: () => import('../views/OpenSource.vue')
    },
    {
      path: '/funding',
      name: 'funding',
      component: () => import('../views/Funding.vue')
    },
    {
      path: '/press',
      name: 'press',
      component: () => import('../views/Press.vue')
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: () => import('../views/Roadmap.vue')
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import('../views/Apps.vue')
    },
    {
      path: '/apps/:id',
      name: 'app-detail',
      component: () => import('../views/AppDetail.vue')
    }
  ]
})

export default router
