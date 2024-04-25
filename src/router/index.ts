import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // #/router hash模式
  // history API pushStete replaceState popstate
  // SEO -> 抓取HTML -> JS ->Vue ->SSR ->Nuxt
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   }
  // ]
})
// 重定向方案
// router.beforeEach((to, from, next) => {
//   // auth 判断
//   if (to.path === '/home') {
//     next('/')
//   }
//   next()
// })

export default router
