import React, { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import { EventMarker } from './EventMarker'
import { MapPopup } from './MapPopup'
import { MapControls } from './MapControls'
import { useFilteredEvents } from '@/hooks/useFilteredEvents'
import { useEventStore } from '@/context/EventDataContext'
import { useMapInteractions } from '@/hooks/useMapInteractions'
import { useEvent } from '@/hooks/useEvents'
import { mapConfig } from '../../../config/mapConfig'
import { createClusterIcon } from '@/lib/mapUtils'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/markers/espresso-cup-upcoming.svg',
  iconUrl: '/markers/espresso-cup-upcoming.svg',
  shadowUrl: undefined,
})

export function EventMap() {
  const { mapMode } = useEventStore()
  const { filteredEvents, hasResults } = useFilteredEvents()
  const {
    setMapRef,
    mapRef,
    mapState,
    handleEventSelect,
    handleEventHover,
    handleClosePopup,
    handleMapMove
  } = useMapInteractions()
  
  const selectedEvent = useEvent(mapState.selectedEventId)

  // Custom cluster icon creation
  const createCustomCluster = (cluster: any) => {
    const markers = cluster.getAllChildMarkers()
    const upcomingCount = markers.filter((marker: any) => 
      marker.options.eventStatus === 'upcoming'
    ).length
    const pastCount = markers.length - upcomingCount

    return createClusterIcon(cluster, upcomingCount, pastCount)
  }

  // Tile URLs for light/dark mode
  const tileUrls = {
    light: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
  }
  return (
    <div className="relative w-full h-full espresso-map-container">
      <MapContainer
        center={[mapState.center.lat, mapState.center.lng]}
        zoom={mapState.zoom}
        className="w-full h-full"
        zoomControl={false}
        whenReady={(mapInstance) => {
          setMapRef(mapInstance.target)
          console.debug('[EventMap] map ready, ref set')
        }}
        whenCreated={(mapInstance) => {
          // ensure ref is set as soon as map is created
          setMapRef(mapInstance as any)
          // Handle map events
          mapInstance.on('moveend', () => {
            const center = mapInstance.getCenter()
            const zoom = mapInstance.getZoom()
            handleMapMove({ lat: center.lat, lng: center.lng }, zoom)
          })

          // Bridge zoom controls to leaflet
          const zoomHandler = (e: any) => {
            const delta = e?.detail?.delta || 0
            if (delta > 0) {
              mapInstance.zoomIn()
            } else if (delta < 0) {
              mapInstance.zoomOut()
            }
          }
          window.addEventListener('espresso-map-zoom', zoomHandler)
          mapInstance.on('unload', () => window.removeEventListener('espresso-map-zoom', zoomHandler))

          // Ensure marker pane is clickable and on top
          const panes = (mapInstance as any).getPanes?.()
          if (panes?.markerPane) {
            panes.markerPane.style.pointerEvents = 'auto'
            panes.markerPane.style.zIndex = '1200'
          }
        }}
      >
        <TileLayer
          attribution={mapConfig.tileLayer.attribution}
          url={tileUrls[mapMode || 'dark']}
          maxZoom={mapConfig.tileLayer.maxZoom}
        />

        {/* TEMP: render markers without clustering to debug click/hover */}
        <>
          {filteredEvents.map((event) => (
            <EventMarker
              key={event.id}
              event={event}
              isSelected={mapState.selectedEventId === event.id}
              onClick={(ev) => {
                handleEventSelect(ev)
                const target = { lat: ev.latitude, lng: ev.longitude }
                if (mapRef?.current) {
                  const targetZoom = Math.max(mapState.zoom, 13)
                  ;(mapRef.current as any).flyTo(target, targetZoom, { animate: true, duration: 0.7 })
                }
              }}
            />
          ))}
        </>

        {/* Popup is rendered inside the selected EventMarker now */}
      </MapContainer>
      {/* Hit test overlay debug (disabled by default) */}
      {/* <div className="pointer-events-none absolute inset-0 border-2 border-red-500/40"></div> */}

      <MapControls />

      {!hasResults && (
        <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-espresso-secondary">
              No events found
            </p>
            <p className="text-sm text-espresso-neutral mt-1">
              Try adjusting your filters or search terms
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
