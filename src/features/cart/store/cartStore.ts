import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

export interface CartItem {
  product_id: number
  name: string
  price: number
  discount?: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {

  const items = useStorage<CartItem[]>('cart_items', [])

  const totalPrice = computed(() =>
    items.value.reduce(
      (sum, i) => sum + (i.price - (i.discount || 0)) * i.quantity,
      0
    )
  )

  // Add or increment quantity
  function addToCart(item: Omit<CartItem, 'quantity'>) {
    const existing = items.value.find((i) => i.product_id === item.product_id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...item, quantity: 1 })
    }
  }

  // Remove item permanently
  function removeFromCart(product_id: number) {
    const idx = items.value.findIndex((i) => i.product_id === product_id)
    if (idx !== -1) {
      items.value.splice(idx, 1)
    }
  }

  // Decrease quantity by one, but keep item if quantity > 1
  function decreaseQuantity(product_id: number) {
    const item = items.value.find((i) => i.product_id === product_id)
    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      }
    }
  }

  // Increase quantity by one
  function increaseQuantity(product_id: number) {
    const item = items.value.find((i) => i.product_id === product_id)
    if (item) {
      item.quantity++
    }
  }

  // Clear cart (e.g. after checkout)
  function clearCart() {
    items.value = []
  }

  return {
    items,
    totalPrice,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  }
})
