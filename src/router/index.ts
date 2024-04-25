import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // #/router hash模式
  // history API pushStete replaceState popstate
  // SEO -> 抓取HTML -> JS ->Vue ->SSR ->Nuxt
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
