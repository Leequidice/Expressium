import { LatLng } from './event'

// Leaflet-specific types
export interface MarkerClusterGroup {
  addLayer: (layer: any) => void
  removeLayer: (layer: any) => void
  clearLayers: () => void
  refreshClusters: () => void
}

export interface LeafletMap {
  fitBounds: (bounds: [[number, number], [number, number]], options?: any) => void
  setView: (center: LatLng, zoom: number) => void
  getCenter: () => LatLng
  getZoom: () => number
  getBounds: () => any
  flyTo: (center: LatLng, zoom: number, options?: any) => void
}

// Map configuration types
export interface MapConfig {
  defaultCenter: LatLng
  defaultZoom: number
  minZoom: number
  maxZoom: number
  tileLayer: {
    url: string
    attribution: string
    maxZoom: number
  }
  clustering: {
    maxClusterRadius: number
    disableClusteringAtZoom: number
  }
}

// Marker types
export interface MarkerConfig {
  upcoming: {
    iconUrl: string
    iconSize: [number, number]
    iconAnchor: [number, number]
    popupAnchor: [number, number]
  }
  past: {
    iconUrl: string
    iconSize: [number, number]
    iconAnchor: [number, number]
    popupAnchor: [number, number]
  }
}
