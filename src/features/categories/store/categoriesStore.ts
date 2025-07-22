import { defineStore } from 'pinia'
import api from '@/services/api'
import { ref } from 'vue'
import type { Category, CategoriesResponse } from '../types'

export const useCategoriesStore = defineStore('Categories', () => {
  const categories = ref<Category[]>([])

  async function fetchCategories() {
    const response = await api
      .get<CategoriesResponse>('/api/category/index')
      .then((res) => res.data)

    categories.value = response.categories

    return { status: response.status, message: response.message }
  }

  return {
    categories,
    fetchCategories,
  }
})
