<template>
  <section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mb-4 space-y-4 sm:space-y-0 md:mb-8">
        <h2
          class="text-2xl md:text-4xl font-semibold text-center text-gray-900 dark:text-white"
        >
          {{ title }}
        </h2>
      </div>
      <div
        class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <template v-for="n of 8" :key="n">
          <ProductCardSkeleton v-if="loading" />
        </template>
        <ProductCard
          v-for="product of products"
          :key="product.id"
          v-bind="product"
        />
      </div>

      <div class="flex justify-center">
        <button
          @click="prev"
          :disabled="isFirstPage"
          class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          @click="next"
          :disabled="isLastPage"
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
    <Teleport to="body"
      ><Alert :status="status" :error="error" :duration="5000"></Alert
    ></Teleport>
  </section>
</template>

<script setup lang="ts">
import { useApiHandler } from '@/composables/useApiHandler'
import { computed } from 'vue'
import { ref } from 'vue'
import { usePagination } from '../composables/usePagination'
import ProductCard from '@/features/products/components/ProductCard.vue'
import Alert from '@/components/Alert.vue'
import type { Product } from '../types'
import ProductCardSkeleton from '@/features/products/components/ProductCardSkeleton.vue'
import { useRoute } from 'vue-router'

const { title, products, cPage, lPage, fetchProducts } = defineProps<{
  title: string
  products: Product[]
  cPage: number
  lPage: number
  fetchProducts: (payload?: { product?: string; page: number }) => Promise<{
    status: string | undefined
    message: string | null
  }>
}>()

const { loading, status, error, execute } = useApiHandler(fetchProducts)

const page = ref(1)
const currentPage = computed(() => cPage)
const lastPage = computed(() => lPage)
const route = useRoute()

const { isFirstPage, isLastPage, prev, next } = usePagination({
  page,
  currentPage,
  lastPage,
  onPageChange: async () => {
    await execute({ product: route.params.product as string, page: page.value })
  },
})
</script>

<style scoped></style>
