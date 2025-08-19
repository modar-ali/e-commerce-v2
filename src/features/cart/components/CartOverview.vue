<template>
  <div
    v-if="authStore.isLoggedIn"
    id="myCartDropdown1"
    class="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800"
  >
    <div
      v-show="!cartStore.items.length"
      class="w-72 h-72 m-0 grid place-items-center"
    >
      <div class="flex flex-col items-center gap-5">
        <img
          class="dark:hidden w-40"
          src="../../../assets/images/empty-cart-dark.svg"
          alt=""
        />
        <img
          class="hidden dark:block w-40"
          src="../../../assets/images/empty-cart-light.svg"
          alt=""
        />
        <button
          @click="$router.push({ name: 'Offers' })"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path
              d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
            />
          </svg>
          Shop now
        </button>
      </div>
    </div>
    <div v-for="item of cartStore.items" :key="item.productId">
      <div class="grid grid-cols-2">
        <div>
          <RouterLink
            :to="{ name: 'ProductOverview', params: { id: item.productId } }"
            class="truncate block text-sm w-36 break-words font-semibold leading-none text-gray-900 dark:text-white hover:underline"
            >{{ item.name }}</RouterLink
          >
          <p
            class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
          >
            {{ Math.trunc(Number(item.price) - Number(item.discount)) }} £
          </p>
        </div>

        <div class="flex items-center justify-end gap-6">
          <p
            class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
          >
            Qty: {{ item.quantity }}
          </p>

          <button
            @click="cartStore.removeFromCart(item.productId)"
            data-tooltip-target="tooltipRemoveItem4b"
            type="button"
            class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
          >
            <span class="sr-only"> Remove </span>
            <svg
              class="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            id="tooltipRemoveItem4b"
            role="tooltip"
            class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Remove item
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-2.5">
        <button
          @click="cartStore.decreaseQuantity(item.productId)"
          type="button"
          id="decrement-button"
          data-input-counter-decrement="counter-input"
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            class="h-2.5 w-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <span
          class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white"
          >{{ item.quantity }}</span
        >
        <button
          @click="cartStore.increaseQuantity(item.productId)"
          type="button"
          id="increment-button"
          data-input-counter-increment="counter-input"
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            class="h-2.5 w-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <a
      v-show="cartStore.items.length"
      href="#"
      title=""
      class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      role="button"
    >
      Proceed to Checkout
    </a>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/features/auth/store/authStore'
import { useCartStore } from '../store/cartStore'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const authStore = useAuthStore()

const cartStore = useCartStore()

const quantity = ref(0)
</script>

<style scoped></style>
