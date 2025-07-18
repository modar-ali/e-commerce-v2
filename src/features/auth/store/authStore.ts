import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import api from '@/services/api'
import type {
  User,
  RegisterForm,
  RegisterResponse,
  LoginForm,
  LoginResponse,
  AuthResponse,
} from '../types'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // — state
  const token = useStorage<string | null>('auth_token', null)

  const user = ref<User | null>(null)

  // — getters
  const isLoggedIn = computed(() => !!token.value)

  // — actions
  async function register(payload?: RegisterForm) {
    const response = await api
      .post<RegisterResponse>('/api/auth/register', payload)
      .then((res) => res.data)
    user.value = response.user
    token.value = response.access_token
    return { status: response.status, message: response.message }
  }

  async function login(payload?: LoginForm) {
    const response = await api
      .post<LoginResponse>('/api/auth/login', payload)
      .then((res) => res.data)
    user.value = response.user
    token.value = response.access_token
    return { status: response.status, message: response.message }
  }

  async function logout() {
    const response = await api
      .post<AuthResponse>('/api/auth/logout')
      .then((res) => res.data)
    token.value = null
    user.value = null
    return { status: response.status, message: response.message }
  }

  async function verifyEmail(payload?: { code: string; email: string }) {
    const response = await api
      .post<AuthResponse>('/api/auth/verify-user-email', payload)
      .then((res) => res.data)
    return response
  }

  async function resendVerificationCode(payload?: { email: string }) {
    const response = await api
      .post<AuthResponse>('/api/auth/resend-email-verification-code', payload)
      .then((res) => res.data)
    return response
  }

  async function forgotPassword(payload?: { email: string }) {
    const response = await api
      .post<AuthResponse>('/api/auth/forgot-password', payload)
      .then((res) => res.data)
    return response
  }

  async function verifyResetPassword(payload?: {
    code: string
    email: string
  }) {
    const response = await api
      .post<AuthResponse>('/api/auth/verify-reset-code', payload)
      .then((res) => res.data)
    return response
  }

  async function resendPasswordResetCode(payload?: { email: string }) {
    const response = await api
      .post<AuthResponse>('/api/auth/resend-reset-code', payload)
      .then((res) => res.data)
    return response
  }

  async function resetPassword(payload?: {
    email: string
    code: string
    new_password: string
    new_passwrod_confirmation: string
  }) {
    const response = await api
      .post<AuthResponse>('/api/auth/reset-password', payload)
      .then((res) => res.data)
    return response
  }

  return {
    token,
    user,
    isLoggedIn,
    register,
    login,
    logout,
    verifyEmail,
    resendVerificationCode,
    forgotPassword,
    verifyResetPassword,
    resendPasswordResetCode,
    resetPassword,
  }
})
