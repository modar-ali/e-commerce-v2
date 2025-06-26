import axios from 'axios'

import { useAuthStore } from '@/features/auth/store.ts/authStore'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. "http://localhost:8000/"
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

export default api
