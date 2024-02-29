import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: () => import('../views/FirstView.vue')
    },
    {
      path: '/second-page',
      name: 'second-page',
      // route level code-splitting
      // this generates a separate chunk (.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SecondView.vue')
    } 
  ]
})

export default router
