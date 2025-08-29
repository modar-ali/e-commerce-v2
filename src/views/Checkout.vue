<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <form
      @submit.prevent="doCreateOrder"
      class="mx-auto max-w-screen-xl px-4 2xl:px-0"
    >
      <ol
        class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base"
      >
        <li
          class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
        >
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
          >
            <svg
              class="me-2 h-4 w-4 sm:h-5 sm:w-5"
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
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Cart
          </span>
        </li>

        <li
          class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
        >
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
          >
            <svg
              class="me-2 h-4 w-4 sm:h-5 sm:w-5"
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
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Checkout
          </span>
        </li>

        <li class="flex shrink-0 items-center">
          <svg
            class="me-2 h-4 w-4 sm:h-5 sm:w-5"
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
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Order summary
        </li>
      </ol>

      <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
        <div class="min-w-0 flex-1 space-y-8">
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Delivery Location
            </h2>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <div class="mb-2 flex items-center gap-2">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City <span class="text-red-600 text-lg">*</span>
                  </label>
                </div>
                <select
                  v-model="locationForm.city"
                  id="city"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  <option disabled value="">Please select a city</option>
                  <option>Tartus</option>
                  <option>Damascus</option>
                  <option>Latakia</option>
                  <option>Aleppo</option>
                  <option>Homs</option>
                </select>
                <p
                  v-if="fieldErrors?.city"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                  v-for="err of fieldErrors?.city"
                  :key="err"
                >
                  {{ err }}
                </p>
              </div>

              <div>
                <label
                  for="street"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Street <span class="text-red-600 text-lg">*</span>
                </label>
                <input
                  v-model="locationForm.street"
                  type="text"
                  id="street"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Safita - Azaitone street"
                />
                <p
                  v-if="fieldErrors?.street"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                  v-for="err of fieldErrors?.street"
                  :key="err"
                >
                  {{ err }}
                </p>
              </div>

              <div>
                <label
                  for="building"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Building <span class="text-red-600 text-lg">*</span>
                </label>
                <input
                  v-model="locationForm.building"
                  type="number"
                  id="building"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="building 123"
                />
                <p
                  v-if="fieldErrors?.building"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                  v-for="err of fieldErrors?.building"
                  :key="err"
                >
                  {{ err }}
                </p>
              </div>

              <div>
                <label
                  for="apartment_number"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Apartment <span class="text-red-600 text-lg h-7"></span>
                </label>
                <input
                  v-model="locationForm.apartment_number"
                  type="number"
                  id="apartment_number"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="apartment 6"
                />
              </div>

              <div>
                <label
                  for="zip_code"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zip code <span class="text-red-600 text-lg h-7"></span>
                </label>
                <input
                  v-model="locationForm.zip_code"
                  type="number"
                  id="zip_code"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="483259"
                />
              </div>

              <div>
                <label
                  for="more_details"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  More Details <span class="text-red-600 text-lg h-7"></span>
                </label>
                <textarea
                  v-model="locationForm.more_details"
                  rows="1"
                  id="more_details"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="add more details if you want..."
                />
              </div>

              <div class="sm:col-span-2">
                <button
                  :disabled="createLocationLoading"
                  @click.prevent="doCreateLocation"
                  class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    class="h-5 w-5"
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
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                  Add new location
                </button>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Delivery Date
            </h3>
            <VueDatePicker
              :model-value="deliveryDate ? new Date(deliveryDate) : null"
              @update:model-value="
                (date: Date) => {
                  deliveryDate = date
                    ? date.toISOString().split('T')[0]
                    : ''
                }
              "
              placeholder="Select Date"
              :enable-time-picker="false"
              disable-year-select
              :dark="isDark"
            />
            <p
              v-if="createOrderFieldErrors?.date_of_delivery"
              class="mt-2 text-sm text-red-600 dark:text-red-500"
              v-for="err of createOrderFieldErrors?.date_of_delivery"
              :key="err"
            >
              {{ err }}
            </p>
          </div>
        </div>

        <div
          class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Recently Added Locations
          </h3>
          <ul class="grid w-full gap-6">
            <LocationRadio
              v-for="location in locationStore.locations"
              :key="location.id"
              :location="location"
              :get-user-locations="getUserLocations"
              v-model:location-id="locationId"
            />
            <p
              v-if="createOrderFieldErrors?.location_id"
              class="text-sm text-red-600 dark:text-red-500"
              v-for="err of createOrderFieldErrors?.location_id"
              :key="err"
            >
              {{ err }}
            </p>
            <LocationRadioSkeleton
              v-if="createLocationLoading || userLocationLoading"
            />
          </ul>
          <div class="flow-root">
            <dl class="flex items-center justify-between -my-3 gap-4 py-3">
              <dt class="text-base font-bold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">
                {{ cartStore.totalPrice }} £
              </dd>
            </dl>
          </div>

          <div class="space-y-3">
            <button
              :disabled="createOrderLoading"
              type="submit"
              class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
    <Teleport to="body"
      ><Spinner
        v-if="
          createLocationLoading || userLocationLoading || createOrderLoading
        "
    /></Teleport>
    <Teleport to="body"
      ><PaymentForm :order-id="orderStore.orderId"
    /></Teleport>
    <Teleport to="body"
      ><Alert
        :status="cartStatus"
        error="Add some products to the cart first"
        :duration="5000"
      ></Alert
    ></Teleport>
    <Teleport to="body"
      ><Alert
        :status="createOrderStatus"
        :error="createOrderError"
        :duration="5000"
      ></Alert
    ></Teleport>
  </section>
</template>

<script setup lang="ts">
import { useApiHandler } from '@/composables/useApiHandler'
import { useLocationStore } from '@/features/location/store/locationStore'
import LocationRadio from '@/features/location/components/LocationRadio.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { computed, onMounted, ref, Teleport } from 'vue'
import type { LocationRequest } from '@/features/location/types'
import Spinner from '@/components/Spinner.vue'
import { useCartStore } from '@/features/cart/store/cartStore'
import { useOrdersStore } from '@/features/orders/store/ordersStore'
import { useDark } from '@vueuse/core'
import LocationRadioSkeleton from '@/features/location/components/LocationRadioSkeleton.vue'
import PaymentForm from '@/features/orders/components/PaymentForm.vue'
import { initModals, Modal } from 'flowbite'
import Alert from '@/components/Alert.vue'

const deliveryDate = ref('')

const locationStore = useLocationStore()

const locationForm = ref<LocationRequest>({
  city: '',
  street: '',
  building: '',
  apartment_number: null,
  zip_code: null,
  more_details: null,
})

const {
  loading: createLocationLoading,
  fieldErrors,
  execute: createLocation,
} = useApiHandler(locationStore.createLocation)

async function doCreateLocation() {
  if (createLocationLoading.value) return

  await createLocation(locationForm.value)
  await getUserLocations()

  locationForm.value = {
    city: '',
    street: '',
    building: '',
    apartment_number: null,
    zip_code: null,
    more_details: null,
  }
}

const { loading: userLocationLoading, execute: getUserLocations } =
  useApiHandler(locationStore.getUserLocations)

onMounted(async () => {
  await getUserLocations()

  initModals()
})

const locationId = ref<number>(0)

const cartStore = useCartStore()

const orderStore = useOrdersStore()

const {
  loading: createOrderLoading,
  status: createOrderStatus,
  error: createOrderError,
  fieldErrors: createOrderFieldErrors,
  execute: createOrder,
} = useApiHandler(orderStore.createOrder)

const orderProducts = computed(() =>
  cartStore.items.map(({ product_id, quantity }) => ({
    product_id,
    quantity,
  }))
)

const cartStatus = ref<'failed' | null>(null)

let modal: Modal | null = null

onMounted(() => {
  const $targetEl = document.getElementById('payment-modal')
  if ($targetEl) {
    modal = new Modal($targetEl)
  }
})

async function doCreateOrder() {
  if (!cartStore.items.length) {
    cartStatus.value = 'failed'
    setTimeout(() => {
      cartStatus.value = null
    }, 5000)
    return
  }

  if (createOrderLoading.value) return

  await createOrder({
    location_id: locationId.value,
    date_of_delivery: deliveryDate.value,
    order_items: orderProducts.value,
  })

  if (createOrderStatus.value === 'success') {
    locationId.value = 0
    deliveryDate.value = ''
    cartStore.items = []
    modal?.show()
  }
}

const isDark = useDark()
</script>

<style scoped>
.dp__theme_dark {
  --dp-background-color: #1f2937;
  --dp-hover-color: #374151;
  --dp-primary-color: #3b82f6;
  --dp-border-color: #4b5563;
}
</style>
