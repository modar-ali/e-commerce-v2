<template>
  <li>
    <input
      type="radio"
      :id="`location-info-${location.id}`"
      :value="location.id"
      name="location"
      class="hidden peer"
      v-model="locationId"
    />
    <label
      :for="`location-info-${location.id}`"
      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div class="block basis-5/6">
        <div class="w-full text-lg font-semibold">{{ location.city }}</div>
        <div class="w-full">{{ location.street }}</div>
        <div class="w-full">building {{ location.building }}</div>
      </div>
      <button
        :disabled="loading"
        type="button"
        @click="doDeleteLocation(location.id)"
        class="w-10 h-10 grid place-items-center text-red-600 hover:text-white hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm dark:text-red-600 dark:hover:text-white"
      >
        <svg
          class="w-5 h-5"
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
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
      </button>
    </label>
  </li>
  <Teleport to="body"><Spinner v-if="loading" /></Teleport>
</template>

<script setup lang="ts">
import { useApiHandler } from '@/composables/useApiHandler'
import { useLocationStore } from '@/features/location/store/locationStore'
import type { LocationResponse } from '@/features/location/types'
import Spinner from '@/components/Spinner.vue'
import { Teleport } from 'vue'

const { location, getUserLocations } = defineProps<{
  location: LocationResponse
  getUserLocations: (
    payload?: unknown
  ) => Promise<{ status: string | undefined; message: string | null } | null>
}>()

const locationStore = useLocationStore()

const { loading, execute } = useApiHandler(locationStore.deleteLocation)

async function doDeleteLocation(locationId: number) {
  if (loading.value) return
  await execute(locationId)
  await getUserLocations()
}

const locationId = defineModel('locationId')
</script>

<style scoped></style>
