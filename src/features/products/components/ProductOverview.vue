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
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
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
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </div>
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                (5.0)
              </p>
              <p
                class="text-sm font-medium leading-none text-gray-900 underline dark:text-white"
              >
                {{ productOverviewStore.rating?.count }} Reviews
              </p>
            </div>
          </div>

          <div class="mt-6 w-full sm:w-fit sm:mt-8">
            <a
              href="#"
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
            </a>
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
})

const baseUrl = import.meta.env.VITE_API_BASE_URL

const imgUrl = computed(() => baseUrl + productOverviewStore.product?.image)
</script>

<style scoped></style>
