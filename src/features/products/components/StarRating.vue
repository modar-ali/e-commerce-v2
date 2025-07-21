<template>
  <div class="flex items-center">
    <button
      v-for="star in 5"
      :key="star"
      @mouseover="hover(star)"
      @mouseleave="hover(0)"
      @click="select(star)"
      type="button"
      class="p-1 focus:outline-none"
    >
      <svg
        :class="[
          'w-4 h-4 transition-colors',
          star <= (hovered || rating)
            ? 'text-yellow-400'
            : 'text-gray-300 dark:text-gray-500',
        ]"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useApiHandler } from '@/composables/useApiHandler'
import { useRatingStore } from '@/features/products/store/ratingStore'

const ratingStore = useRatingStore()

const { productId } = defineProps<{ productId?: number }>()

const rating = ref(0)
const hovered = ref(0)

const { status, error, execute } = useApiHandler(ratingStore.rateProduct)

function hover(value: number) {
  hovered.value = value
}

async function select(value: number) {
  rating.value = value
  await execute({ product_id: productId, rating: rating.value })
}
</script>
