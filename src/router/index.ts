import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/features/auth/store.ts/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      alias: '/home',
      meta: { layout: 'default' },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
      meta: { requiresAuth: true, layout: 'default' },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue'),
      meta: { layout: 'none' },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: { layout: 'none' },
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('../views/ForgotPassword.vue'),
      meta: { layout: 'none', requiresAuth: true },
    },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }
  // if already logged in and going to login/register, redirect home
  if ((to.name === 'Login' || to.name === 'Register') && auth.isLoggedIn) {
    return { name: 'Home' }
  }
})

export default router
