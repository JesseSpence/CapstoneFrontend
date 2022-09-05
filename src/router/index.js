import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Posts',
    name: 'blog post page',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/Post/:id',
    name: 'single blog post view',
    component: () => import('../views/SinglePost.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
