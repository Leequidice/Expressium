import L from 'leaflet'
import { EspressoEvent, LatLng } from '@/types/event'
import { LeafletMap } from '@/types/map'

/**
 * Haversine distance in kilometers
 */
export function haversineDistance(point1: LatLng, point2: LatLng): number {
  const R = 6371 // km
  const dLat = (point2.lat - point1.lat) * Math.PI / 180
  const dLng = (point2.lng - point1.lng) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * Creates a custom marker icon for Leaflet
 */
export function createCustomMarkerIcon(
  iconUrl: string,
  iconSize: [number, number],
  iconAnchor: [number, number],
  popupAnchor: [number, number],
  className?: string
): L.Icon {
  return L.icon({
    iconUrl,
    iconSize,
    iconAnchor,
    popupAnchor,
    className: ['leaflet-interactive', className].filter(Boolean).join(' '),
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
  })
}

/**
 * Smoothly animates map to fit bounds containing given events
 */
export function fitMapToBounds(
  map: LeafletMap,
  events: EspressoEvent[],
  options: { padding?: number; maxZoom?: number; duration?: number } = {}
): void {
  if (events.length === 0) return

  const { padding = 20, maxZoom = 10, duration = 500 } = options

  let minLat = events[0].latitude
  let maxLat = events[0].latitude
  let minLng = events[0].longitude
  let maxLng = events[0].longitude

  events.forEach((event) => {
    minLat = Math.min(minLat, event.latitude)
    maxLat = Math.max(maxLat, event.latitude)
    minLng = Math.min(minLng, event.longitude)
    maxLng = Math.max(maxLng, event.longitude)
  })

  const bounds: [[number, number], [number, number]] = [
    [minLat, minLng],
    [maxLat, maxLng],
  ]

  map.fitBounds(bounds, {
    padding: [padding, padding],
    maxZoom,
    animate: true,
    duration: duration / 1000,
  })
}

/**
 * Animates map to center on a specific location
 */
export function centerMapOnLocation(
  map: LeafletMap,
  location: LatLng,
  zoom: number = 8,
  duration: number = 500
): void {
  map.flyTo(location, zoom, {
    animate: true,
    duration: duration / 1000,
  })
}

/**
 * Gets the current viewport bounds of the map
 */
export function getMapViewportBounds(map: any): [[number, number], [number, number]] {
  const bounds = map.getBounds()
  return [[bounds.getSouth(), bounds.getWest()], [bounds.getNorth(), bounds.getEast()]]
}

/**
 * Checks if a point is within the current map viewport
 */
export function isPointInViewport(map: any, point: LatLng): boolean {
  const bounds = map.getBounds()
  return bounds.contains([point.lat, point.lng])
}

/**
 * Generates cluster icon HTML for marker clustering
 */
export function createClusterIcon(
  cluster: any,
  upcomingCount: number,
  pastCount: number
): L.DivIcon {
  const totalCount = cluster.getChildCount()
  const size = Math.min(40 + totalCount * 2, 80)

  return L.divIcon({
    html: `
      <div class="cluster-marker" style="
        width: ${size}px;
        height: ${size}px;
        background: #4B2E2B; /* coffee primary */
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: ${Math.max(12, size / 6)}px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        border: 3px solid white;
        position: relative;
      ">
        ${totalCount}
        ${upcomingCount > 0 ? `<div style="
          position: absolute;
          top: -2px;
          right: -2px;
          width: 12px;
          height: 12px;
          background: #C69C6D; /* cookie accent */
          border-radius: 50%;
          border: 2px solid white;
        "></div>` : ''}
      </div>
    `,
    className: 'custom-cluster-icon',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}
