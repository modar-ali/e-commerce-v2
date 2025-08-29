import api from '@/services/api'
import { defineStore } from 'pinia'
import type {
  Order,
  OrderRequest,
  OrdersResponse,
  PaymentForm,
  UserOrdersResponse,
} from '../types'
import { ref } from 'vue'

interface OrdersResponseWithOrderId extends OrdersResponse {
  order_id: number
}

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<Order[]>([])
  const orderId = ref<number>(0)

  async function getUserOrders() {
    const response = await api
      .get<UserOrdersResponse>('/api/order/get_user_orders')
      .then((res) => res.data)
    orders.value = response.orders
    return { status: response.status, message: response.message }
  }

  async function createOrder(payload?: OrderRequest) {
    const response = await api
      .post<OrdersResponseWithOrderId>('/api/order/create', payload)
      .then((res) => res.data)
    orderId.value = response.order_id
    return { status: response.status, message: response.message }
  }

  async function payForOrder(payload?: {
    paymentForm: PaymentForm
    orderId: number
  }) {
    const response = await api
      .post<OrdersResponse>(
        `/api/order/pay/${payload?.orderId}`,
        payload?.paymentForm
      )
      .then((res) => res.data)
    return { status: response.status, message: response.message }
  }

  return {
    orders,
    orderId,
    createOrder,
    payForOrder,
  }
})
