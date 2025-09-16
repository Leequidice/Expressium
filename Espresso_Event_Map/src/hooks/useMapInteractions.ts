import { useCallback, useRef } from 'react'
import { useEventStore } from '@/context/EventDataContext'
import { EspressoEvent, LatLng } from '@/types/event'
import { LeafletMap } from '@/types/map'
import { centerMapOnLocation, fitMapToBounds } from '@/lib/mapUtils'

/**
 * Custom hook for managing map interactions and state
 */
export function useMapInteractions() {
  const mapRef = useRef<LeafletMap | null>(null)
  const { 
    mapState, 
    updateMapState, 
    selectEvent, 
    hoverEvent,
    filteredEvents 
  } = useEventStore()

  const setMapRef = useCallback((map: LeafletMap | null) => {
    mapRef.current = map
  }, [])

  /**
   * Handles map center and zoom changes
   */
  const handleMapMove = useCallback((center: LatLng, zoom: number) => {
    updateMapState({ center, zoom })
  }, [updateMapState])

  /**
   * Handles event marker selection
   */
  const handleEventSelect = useCallback((event: EspressoEvent) => {
    selectEvent(event.id)
    
    if (mapRef.current) {
      centerMapOnLocation(
        mapRef.current,
        { lat: event.latitude, lng: event.longitude },
        Math.max(mapState.zoom, 8),
        500
      )
    }
  }, [selectEvent, mapState.zoom])

  /**
   * Handles event marker hover
   */
  const handleEventHover = useCallback((eventId: string | null) => {
    hoverEvent(eventId)
  }, [hoverEvent])

  /**
   * Closes the currently selected event popup
   */
  const handleClosePopup = useCallback(() => {
    selectEvent(null)
  }, [selectEvent])

  /**
   * Fits the map to show all filtered events
   */
  const fitMapToEvents = useCallback(() => {
    if (mapRef.current && filteredEvents.length > 0) {
      fitMapToBounds(mapRef.current, filteredEvents, {
        padding: 30,
        maxZoom: 10,
        duration: 800
      })
    }
  }, [filteredEvents])

  /**
   * Centers the map on a specific location (for search)
   */
  const centerOnLocation = useCallback((location: LatLng, zoom: number = 8) => {
    if (mapRef.current) {
      centerMapOnLocation(mapRef.current, location, zoom, 600)
    }
    updateMapState({ center: location, zoom })
  }, [updateMapState])

  /**
   * Resets the map to the global view
   */
  const resetMapView = useCallback(() => {
    const globalCenter: LatLng = { lat: 20.0, lng: 0.0 }
    const globalZoom = 2
    
    if (mapRef.current) {
      centerMapOnLocation(mapRef.current, globalCenter, globalZoom, 800)
    }
    updateMapState({ center: globalCenter, zoom: globalZoom })
    selectEvent(null)
  }, [updateMapState, selectEvent])

  return {
    mapRef,
    setMapRef,
    mapState,
    handleMapMove,
    handleEventSelect,
    handleEventHover,
    handleClosePopup,
    fitMapToEvents,
    centerOnLocation,
    resetMapView
  }
}
