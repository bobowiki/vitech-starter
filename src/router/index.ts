// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  // #/router hash模式
  // history API pushStete replaceState popstate
  // SEO -> 抓取HTML -> JS ->Vue ->SSR ->Nuxt
  history: createWebHistory(),
  extendRoutes: (routes: any) => setupLayouts(routes)
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   }
  // ]
})

export default router
