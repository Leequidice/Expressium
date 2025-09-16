// Event data structure types
export interface EspressoEvent {
  id: string
  name: string
  datetime_utc: string // ISO 8601 format
  city: string
  country: string
  latitude: number
  longitude: number
  venue_address?: string
  description_short?: string
  type: EventType
  status: EventStatus
  external_link_url?: string
  thumbnail_url?: string
}

export type EventType = 'conference' | 'hackathon' | 'meetup' | 'workshop'
export type EventStatus = 'past' | 'upcoming'

// Filter and search state types
export interface EventFilters {
  status: EventStatus | 'all'
  type: EventType | 'all'
  region: string | 'all'
  searchQuery: string
}

// Geographical types
export interface LatLng {
  lat: number
  lng: number
}

export interface MapBounds {
  north: number
  south: number
  east: number
  west: number
}

// UI state types
export interface MapState {
  center: LatLng
  zoom: number
  selectedEventId: string | null
  hoveredEventId: string | null
  isListView: boolean
}
