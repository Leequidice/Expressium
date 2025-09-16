import { MapConfig, MarkerConfig } from '@/types/map'

export const mapConfig: MapConfig = {
  defaultCenter: {
    lat: 20.0,
    lng: 0.0
  },
  defaultZoom: 2,
  minZoom: 2,
  maxZoom: 18,
  tileLayer: {
    // Dark mode CartoDB tiles
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a> | Espresso Systems',
    maxZoom: 19
  },
  clustering: {
    maxClusterRadius: 50,
    disableClusteringAtZoom: 14
  }
}

export const markerConfig: MarkerConfig = {
  upcoming: {
    iconUrl: '/markers/espresso-cup-upcoming.svg',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40]
  },
  past: {
    iconUrl: '/markers/espresso-cup-past.svg',
    iconSize: [28, 35], // Slightly smaller for past events
    iconAnchor: [14, 35],
    popupAnchor: [0, -35]
  }
}

// Brand colors (should match Figma design system)
export const brandColors = {
  primary: '#FF6B35',
  secondary: '#4A4A4A',
  accent: '#FFB347',
  neutral: '#8B8B8B',
  muted: '#B0B0B0',
  background: '#FAFAFA',
  foreground: '#1A1A1A'
}

// Animation durations (in milliseconds)
export const animationConfig = {
  markerHover: 150,
  markerClick: 250,
  filterTransition: 300,
  mapPan: 500,
  popupSlide: 200
}
