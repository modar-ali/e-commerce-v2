import { defineStore } from 'pinia'
import api from '@/services/api'
import { ref } from 'vue'
import type { ProductsResponse, Product } from '../types'

export const useSearchStore = defineStore('search', () => {
  const products = ref<Product[]>([])
  const currentPage = ref(1)
  const lastPage = ref(1)

  async function fetchSearchedProducts(payload?: {
    product?: string
    page: number
  }) {
    const response = await api
      .get<ProductsResponse>(
        `/api/product/search/${payload!.product}?page=${payload!.page}`
      )
      .then((res) => res.data)

    products.value = response.products.data
    currentPage.value = response.products.current_page
    lastPage.value = response.products.last_page

    return { status: response.status, message: response.message }
  }

  return {
    products,
    currentPage,
    lastPage,
    fetchSearchedProducts,
  }
})
