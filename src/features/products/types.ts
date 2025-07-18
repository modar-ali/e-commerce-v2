export interface Product {
  id: number
  name: string
  details: string
  material: string
  colors: Record<string, string>
  dimensions: string
  image: string
  is_trendy: number
  is_available: number
  price: string
  discount: string
  amount: number
  category_id: number
}

export interface PaginationLink {
  url: string | null
  label: string
  active: boolean
}

export interface Products {
  current_page: number
  data: Product[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: PaginationLink[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

export interface ProductsResponse {
  status?: string
  message: string | null
  products: Products
}
