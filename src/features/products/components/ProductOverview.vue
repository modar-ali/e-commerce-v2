<template>
  <section
    class="py-8 lg:h-[calc(100vh_-_97.6px)] bg-white md:py-16 dark:bg-gray-900 antialiased"
  >
    <div
      class="max-w-screen-xl h-full lg:grid lg:place-items-center px-4 mx-auto 2xl:px-0"
    >
      <ProductOverviewSkeleton v-if="loading" />
      <div
        v-else
        class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-16"
      >
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
          <img
            class="w-full h-full object-cover aspect-square"
            :src="imgUrl"
            :alt="productOverviewStore.product?.name"
          />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-xl dark:text-white"
          >
            {{ productOverviewStore.product?.details }}
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
            >
              {{
                Math.trunc(
                  Number(productOverviewStore.product?.price) -
                    Number(productOverviewStore.product?.discount)
                )
              }}
              £
            </p>

            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              <RatingDisplay
                :average="Number(productOverviewStore.rating?.average)"
              />
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                {{ Number(productOverviewStore.rating?.average).toFixed(1) }}
              </p>
              <p
                class="text-sm font-medium leading-none text-gray-900 underline dark:text-white"
              >
                {{ productOverviewStore.rating?.count }} Reviews
              </p>
            </div>
          </div>

          <div class="mt-6 w-full sm:w-fit sm:mt-8">
            <div
              v-if="authStore.isLoggedIn"
              data-popover-target="popover-default"
              class="flex items-center gap-0.5 w-fit px-1.5 rounded-sm mb-3 cursor-pointer bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <span>Rate this product</span>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
            </div>
            <div
              data-popover
              id="popover-default"
              role="tooltip"
              class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            >
              <div
                class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
              >
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Did you like it ?
                </h3>
              </div>
              <div class="px-3 py-2">
                <StarRating :product-id="productOverviewStore.product?.id" />
              </div>
              <div data-popper-arrow></div>
            </div>
            <button
              @click="addToCart"
              title=""
              class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
              role="button"
            >
              <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </button>
          </div>

          <hr class="my-3 md:my-4 border-gray-200 dark:border-gray-800" />

          <div class="sm:flex sm:gap-2.5">
            <div class="mb-6 sm:mb-0 text-gray-500 dark:text-gray-400">
              <h2 class="mb-2 text-xl font-bold">Materials:</h2>
              <ul>
                <li v-for="(value, key) in material">
                  <span class="font-bold">{{ key }}:</span> {{ value }}
                </li>
              </ul>
            </div>

            <div class="text-gray-500 dark:text-gray-400">
              <h2 class="mb-2 text-xl font-bold">Dimensions:</h2>
              <ul>
                <li v-for="(value, key) in dimensions">
                  <span class="font-bold">{{ key }}:</span> {{ value }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useApiHandler } from '@/composables/useApiHandler'
import { useProductOverviewStore } from '../store/productOverviewStore'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useParseText } from '@/composables/useParseText'
import { ref } from 'vue'
import ProductOverviewSkeleton from './ProductOverviewSkeleton.vue'
import RatingDisplay from '@/features/products/components/RatingDisplay.vue'
import { initPopovers } from 'flowbite'
import StarRating from '@/features/products/components/StarRating.vue'
import { useAuthStore } from '@/features/auth/store/authStore'
import { useCartStore } from '@/features/cart/store/cartStore'

const productOverviewStore = useProductOverviewStore()
const route = useRoute()

const { loading, status, error, execute } = useApiHandler(
  productOverviewStore.fetchProduct
)

defineExpose({
  loading,
})

const material = ref<Record<string, string>>({})
const dimensions = ref<Record<string, string>>({})

onMounted(async () => {
  await execute(Number(route.params.id))
  material.value = useParseText(
    productOverviewStore.product?.material as string
  )
  dimensions.value = useParseText(
    productOverviewStore.product?.dimensions as string
  )

  initPopovers()
})

const baseUrl = import.meta.env.VITE_API_BASE_URL

const imgUrl = computed(() => baseUrl + productOverviewStore.product?.image)

const authStore = useAuthStore()

const cartStore = useCartStore()

function addToCart() {
  cartStore.addToCart({
    productId: productOverviewStore.product?.id as number,
    name: productOverviewStore.product?.name as string,
    price: Number(productOverviewStore.product?.price),
    discount: Number(productOverviewStore.product?.id),
  })
}
</script>

<style scoped></style>
