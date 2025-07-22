import type { Products } from "../products/types"

export interface Category {
  id: number
  name: string
}

export interface CategoriesResponse {
  status?: string
  message: string | null
  categories: Category[]
}

export interface CategoryProductsResponse {
  status?: string
  message: string | null
  category: Category
  products: Products
}
