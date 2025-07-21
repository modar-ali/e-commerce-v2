import { defineStore } from 'pinia'
import api from '@/services/api'

export interface SearchResponse {
  status?: string
  message: string | null
}

export const useRatingStore = defineStore('rating', () => {
  async function rateProduct(payload?: { product_id?: number; rating: number }) {
    const response = await api
      .post<SearchResponse>('/api/rating/create', payload)
      .then((res) => res.data)

    return { status: response.status, message: response.message }
  }

  return {
    rateProduct,
  }
})
