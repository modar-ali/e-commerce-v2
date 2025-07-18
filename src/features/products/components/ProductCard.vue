<template>
  <div
    class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="h-56 w-full">
      <img
        class="mx-auto w-full h-full object-cover aspect-square"
        :src="imgUrl"
        :alt="name"
      />
    </div>

    <div class="pt-6">
      <div class="mb-4 h-5">
        <span
          v-if="Math.trunc(Number(discount))"
          class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"
        >
          Up to {{ Math.round((Number(discount) / Number(price)) * 100) }}% off
        </span>
      </div>

      <RouterLink
        :to="{ name: 'ProductOverview', params: { id: productId } }"
        class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >{{ name }}</RouterLink
      >

      <ul class="mt-2 flex items-center gap-4">
        <li class="flex items-center gap-2">
          <svg
            class="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            />
          </svg>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Fast Delivery
          </p>
        </li>

        <li class="flex items-center gap-2">
          <svg
            class="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Best Price
          </p>
        </li>
      </ul>

      <div class="mt-4 flex items-center justify-between">
        <p
          class="text-xl font-extrabold leading-tight text-gray-900 dark:text-white"
        >
          {{ Math.trunc(Number(price) - Number(discount)) }} £
        </p>

        <button
          type="button"
          class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 sm:p-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            class="-ms-2 me-2 sm:m-0 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          <span class="sm:hidden flex">Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const {
  id: productId,
  name,
  image,
  price,
  discount,
} = defineProps<{
  id: number
  name: string
  details: string
  material: string
  colors: Record<string, string> // it should be Record<string, string>
  dimensions: string
  image: string
  is_trendy: number
  is_available: number
  price: string
  discount: string
  amount: number
  category_id: number
}>()

const baseUrl = import.meta.env.VITE_API_BASE_URL

const imgUrl = computed(() => baseUrl + image)
</script>

<style scoped></style>
