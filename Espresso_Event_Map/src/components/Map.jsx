import React, { useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import Modal from '@/components/Modal'

// Approximate coordinates for upcoming events
const EVENT_COORDS = {
  'Espresso & Partner Brews | KBW': {
    position: [37.535, 127.0], // Seoul (Hannam vicinity)
  },
  'Espresso Buenos Aires Conference': {
    position: [-34.577, -58.42], // La Rural, Buenos Aires vicinity
  },
}

function FitBounds({ positions }) {
  const map = useMap()
  React.useEffect(() => {
    if (!positions.length) return
    const bounds = positions.reduce(
      (acc, pos) => acc.extend(pos),
      L.latLngBounds(positions[0], positions[0])
    )
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 6 })
  }, [map, positions])
  return null
}

export default function Map({ onSelect }) {
  const [selected, setSelected] = useState(null)
  const markers = useMemo(() => {
    return [
      { title: 'Espresso & Partner Brews | KBW', featured: false, ...EVENT_COORDS['Espresso & Partner Brews | KBW'] },
      { title: 'Espresso Buenos Aires Conference', featured: true, ...EVENT_COORDS['Espresso Buenos Aires Conference'] },
    ]
  }, [])

  const positions = markers.map((m) => m.position)

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-beige-bg">
      <MapContainer
        className="h-full w-full rounded-lg overflow-hidden border border-border"
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom
        aria-label="Events map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((m) => {
          const icon = L.icon({
            iconUrl: m.featured
              ? '/markers/espresso-cup-upcoming.svg'
              : '/markers/espresso-cup-upcoming.svg',
            iconSize: m.featured ? [36, 36] : [32, 32],
            iconAnchor: m.featured ? [18, 34] : [16, 30],
            popupAnchor: [0, -24],
            className: m.featured ? 'marker-featured' : 'marker-upcoming',
          })
          return (
            <Marker key={m.title} position={m.position} icon={icon} eventHandlers={{ click: () => { setSelected(m); onSelect?.(m) } }}>
              <Popup>
                <div className="p-2">
                  <div className="text-sm font-semibold text-text-primary">{m.title}</div>
                  <div className="text-xs text-text-muted mt-1">Upcoming event</div>
                </div>
              </Popup>
            </Marker>
          )
        })}

        <FitBounds positions={positions} />
      </MapContainer>
      {/* Map-local modal removed: handled by parent */}
    </div>
  )
}


