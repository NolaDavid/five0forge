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
        path: '/five0forge',
        name: 'landing',
        component: Home
      },

    
  ]
})

export default router