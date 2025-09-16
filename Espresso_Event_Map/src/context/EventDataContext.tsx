import { create } from 'zustand'
import { EspressoEvent, EventFilters, MapState } from '@/types/event'

interface EventStore {
  mapMode: 'light' | 'dark'
  setMapMode: (mode: 'light' | 'dark') => void
  // Event data
  events: EspressoEvent[]
  filteredEvents: EspressoEvent[]
  loading: boolean
  error: string | null
  
  // Filters and search
  filters: EventFilters
  
  // Map state
  mapState: MapState
  
  // Actions
  setEvents: (events: EspressoEvent[]) => void
  setFilteredEvents: (events: EspressoEvent[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  updateFilters: (filters: Partial<EventFilters>) => void
  updateMapState: (mapState: Partial<MapState>) => void
  selectEvent: (eventId: string | null) => void
  hoverEvent: (eventId: string | null) => void
  toggleView: () => void
}

export const useEventStore = create<EventStore>((set) => ({
  mapMode: 'dark',
  setMapMode: (mode) => set({ mapMode: mode }),
  // Initial state
  events: [],
  filteredEvents: [],
  loading: false,
  error: null,
  
  filters: {
    status: 'all',
    type: 'all',
    region: 'all',
    searchQuery: ''
  },
  
  mapState: {
    center: { lat: 20.0, lng: 0.0 },
    zoom: 2,
    selectedEventId: null,
    hoveredEventId: null,
    isListView: false
  },
  
  
  // Actions
  setEvents: (events) => set({ events }),
  
  setFilteredEvents: (filteredEvents) => set({ filteredEvents }),
  
  setLoading: (loading) => set({ loading }),
  
  setError: (error) => set({ error }),
  
  updateFilters: (newFilters) => 
    set((state) => ({ 
      filters: { ...state.filters, ...newFilters } 
    })),
  
  updateMapState: (newMapState) =>
    set((state) => ({
      mapState: { ...state.mapState, ...newMapState }
    })),
  
  selectEvent: (eventId) =>
    set((state) => ({
      mapState: { ...state.mapState, selectedEventId: eventId }
    })),
  
  hoverEvent: (eventId) =>
    set((state) => ({
      mapState: { ...state.mapState, hoveredEventId: eventId }
    })),
  
  toggleView: () =>
    set((state) => ({
      mapState: { 
        ...state.mapState, 
        isListView: !state.mapState.isListView 
      }
    })),

}))
