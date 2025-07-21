<!-- src/components/RatingDisplay.vue -->
<template>
  <div class="flex items-center space-x-2">
    <div class="flex" role="img">
      <svg
        v-for="star in 5"
        :key="star"
        class="w-4 h-4"
        :class="
          star <= fullStars
            ? 'text-yellow-400'
            : star === fullStars + 1 && hasHalf
            ? 'text-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        "
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path
          v-if="star <= fullStars"
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863
            5.031a1.532 1.532 0 0 0 2.226 1.616L11
            17.033l4.518 2.375a1.534 1.534 0 0 0
            2.226-1.617l-.863-5.03L20.537 9.2a1.523
            1.523 0 0 0 .387-1.575Z"
        />
        <defs v-else-if="star === fullStars + 1 && hasHalf">
          <linearGradient id="halfGrad">
            <stop offset="50%" stop-color="currentColor" />
            <stop offset="50%" stop-color="transparent" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          v-else-if="star === fullStars + 1 && hasHalf"
          fill="url(#halfGrad)"
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365
            5.847l-5.051.734A1.535 1.535 0 0 0
            1.463 9.2l3.656 3.563-.863
            5.031a1.532 1.532 0 0 0 2.226
            1.616L11 17.033l4.518 2.375a1.534
            1.534 0 0 0 2.226-1.617l-.863-5.03L20.537
            9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
        <path
          v-else
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534
            0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535
            1.535 0 0 0 1.463 9.2l3.656 3.563-.863
            5.031a1.532 1.532 0 0 0 2.226 1.616L11
            17.033l4.518 2.375a1.534 1.534 0 0 0
            2.226-1.617l-.863-5.03L20.537
            9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const { average } = defineProps<{
  average: number
}>()

// How many full stars?
const fullStars = computed(() => Math.floor(average))
// Should we render a half‑star?
const hasHalf = computed(() => average - fullStars.value >= 0.5)
</script>
