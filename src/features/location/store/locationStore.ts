import api from '@/services/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {
  LocationRequest,
  LocationResponse,
  LocationsResponse,
  UserLocationsResponse,
} from '../types'

export const useLocationStore = defineStore('location', () => {
  const locations = ref<LocationResponse[]>([])

  async function getUserLocations() {
    const response = await api
      .get<UserLocationsResponse>('/api/location/get_user_locations')
      .then((res) => res.data)
    locations.value = response.locations
    return { status: response.status, message: response.message }
  }

  async function createLocation(location?: LocationRequest) {
    const response = await api
      .post<LocationsResponse>('/api/location/create', location)
      .then((res) => res.data)
    return { status: response.status, message: response.message }
  }

  async function deleteLocation(locationId?: number) {
    const response = await api
      .delete<LocationsResponse>(`/api/location/delete/${locationId}`)
      .then((res) => res.data)
    return { status: response.status, message: response.message }
  }

  return {
    locations,
    getUserLocations,
    createLocation,
    deleteLocation,
  }
})
