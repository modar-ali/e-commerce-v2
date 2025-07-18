import { defineStore } from 'pinia'
import api from '@/services/api'
import { ref } from 'vue'
import type { Product } from '../types'

interface ProductOverview extends Product {
  ratings: {
    id: number
    product_id: number
    user_id: number
    rating: number
    created_at: string
    updated_at: string
  }
}

interface Rating {
  average: string
  count: number
}

export interface ProductOverviewResponse {
  status?: string
  message: string | null
  product: ProductOverview
  rating: Rating
}

export const useProductOverviewStore = defineStore('product-overview', () => {
  const product = ref<ProductOverview | null>(null)
  const rating = ref<Rating | null>(null)

  async function fetchProduct(productId?: number) {
    const response = await api
      .get<ProductOverviewResponse>(`/api/product/show/${productId}`)
      .then((res) => res.data)

    product.value = response.product
    rating.value = response.rating

    return { status: response.status, message: response.message }
  }

  return {
    product,
    rating,
    fetchProduct,
  }
})
