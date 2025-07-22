<template>
  <ul
    class="py-2 text-sm text-gray-700 dark:text-gray-200"
    aria-labelledby="dropdownDefaultButton"
  >
    <li v-for="category of CategoriesStore.categories" :key="category.id">
      <RouterLink
        :to="{ name: 'CategoryProducts', params: { id: category.id } }"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >{{ category.name }}</RouterLink
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useApiHandler } from '@/composables/useApiHandler'
import { useCategoriesStore } from '../store/categoriesStore'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const CategoriesStore = useCategoriesStore()

const { execute } = useApiHandler(
  CategoriesStore.fetchCategories
)

onMounted(async () => {
  await execute()
})
</script>

<style scoped></style>
