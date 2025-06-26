<template>
  <div
    v-if="visible"
    id="alert"
    class="flex items-center w-max fixed z-50 top-5 left-1/2 transform -translate-x-1/2 p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
    role="alert"
  >
    <svg
      class="shrink-0 inline w-4 h-4 me-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">{{ error }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'

const {
  status,
  error,
  duration = 5000,
} = defineProps<{
  status: string | null
  error: string | null
  duration?: number
}>()

const visible = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

function show() {
  visible.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(hide, duration)
}

function hide() {
  visible.value = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

// Watch for a failed status + non-empty message
watch(
  () => [status, error],
  ([status, error]) => {
    if (status === 'failed' && error) {
      show()
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped></style>
