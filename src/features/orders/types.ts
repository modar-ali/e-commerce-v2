import type { LocationResponse } from '../location/types'

export interface OrderRequest {
  location_id: number
  date_of_delivery: string
  order_items: {
    product_id: number
    quantity: number
  }[]
}

export interface OrdersResponse {
  status?: string
  message: string | null
}

export interface PaymentForm {
  payment_gateway: string
  payment_process_number: string
  payment_phone_number: string
}

export interface Order {
  id: number
  date_of_delivery: string
  total_price: string
  user_id: number
  location_id: number
  payment: {
    id: number
    payment_process_number: string
    payment_phone_number: string
    user_id: number
    order_id: number
    created_at: string
    payment_gateway: string
  }
  location: LocationResponse
  items: {
    id: number
    quantity: number
    price: string
    order_id: number
    product_id: number
  }[]
}

export interface UserOrdersResponse extends OrdersResponse {
  orders: Order[]
}
