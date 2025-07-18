// src/composables/useApiHandler.ts
import { ref } from 'vue'
import type { NormalizedError } from '@/services/types'

/**
 * A generic composable to handle async API actions with loading, status, errors, and field-level errors.
 */
export function useApiHandler<
  TPayload,
  TResponse extends { status?: string; message: string | null }
>(action: (payload?: TPayload) => Promise<TResponse>) {
  const loading = ref(false)
  const status = ref<string | null>(null)
  const message = ref<string | null>(null)
  const error = ref<string | null>(null)
  const fieldErrors = ref<Record<string, string[]> | null>(null)

  async function execute(payload?: TPayload): Promise<TResponse | null> {
    loading.value = true
    error.value = null
    fieldErrors.value = null
    status.value = null

    try {
      const response = await action(payload)
      if ('status' in response && response.status) {
        status.value = (response as any).status
      }
      message.value = response.message
      return response
    } catch (err: any) {
      if (err && typeof err === 'object' && 'status' in err) {
        const e = err.response.data as NormalizedError
        status.value = String(e.status)
        if (err.status === 422 && e.errors) {
          fieldErrors.value = e.errors
        } else {
          error.value = e.message
        }
      } else {
        error.value = 'An error occurred. Please try again.'
      }
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    status,
    message,
    error,
    fieldErrors,
    execute,
  }
}
