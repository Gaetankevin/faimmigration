// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importe tes pages
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'
import ContactPages from '@/pages/ContactPages.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/contact', component: ContactPages },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
