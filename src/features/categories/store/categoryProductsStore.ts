import { defineStore } from 'pinia'
import api from '@/services/api'
import { ref } from 'vue'
import type { Category, CategoryProductsResponse } from '../types'
import type { Product } from '@/features/products/types'

export const useCategoryProductsStore = defineStore('category-products', () => {
  const products = ref<Product[] | null>([])
  const category = ref<Category | null>(null)
  const currentPage = ref(1)
  const lastPage = ref(1)

  async function fetchCategoryProducts(payload?: {
    categoryId?: number
    page: number
  }) {
    products.value = null
    category.value = null
    const response = await api
      .get<CategoryProductsResponse>(
        `/api/category/show/${payload!.categoryId}?page=${payload!.page}`
      )
      .then((res) => res.data)

    products.value = response.products.data
    category.value = response.category
    currentPage.value = response.products.current_page
    lastPage.value = response.products.last_page

    return { status: response.status, message: response.message }
  }

  return {
    products,
    category,
    currentPage,
    lastPage,
    fetchCategoryProducts,
  }
})
