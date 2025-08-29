export interface BaseLocation {
  city: string
  street: string
  building: string
  apartment_number: string | null
  more_details: string | null
  zip_code: string | null
}

export interface LocationResponse extends BaseLocation {
  id: number
  user_id: number
}

export interface LocationRequest extends BaseLocation {}

export interface LocationsResponse {
  status?: string
  message: string | null
}

export interface UserLocationsResponse extends LocationsResponse {
  locations: LocationResponse[]
}
