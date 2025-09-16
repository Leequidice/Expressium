import React, { useEffect, useRef } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { EspressoEvent } from '@/types/event'
import { markerConfig } from '../../../config/mapConfig'
import { createCustomMarkerIcon } from '@/lib/mapUtils'

interface EventMarkerProps {
  event: EspressoEvent
  isSelected: boolean
  onClick: (event: EspressoEvent) => void
}

export function EventMarker({ 
  event, 
  isSelected, 
  onClick
}: EventMarkerProps) {
  const markerRef = useRef<L.Marker>(null)
  const map = useMap()

  // Create appropriate icon based on event status
  const icon = createCustomMarkerIcon(
    event.status === 'upcoming' 
      ? markerConfig.upcoming.iconUrl 
      : markerConfig.past.iconUrl,
    event.status === 'upcoming' 
      ? markerConfig.upcoming.iconSize 
      : markerConfig.past.iconSize,
    event.status === 'upcoming' 
      ? markerConfig.upcoming.iconAnchor 
      : markerConfig.past.iconAnchor,
    event.status === 'upcoming' 
      ? markerConfig.upcoming.popupAnchor 
      : markerConfig.past.popupAnchor,
    event.status === 'upcoming' ? 'espresso-marker-upcoming' : 'espresso-marker-past'
  )

  // Handle marker animations based on state
  useEffect(() => {
    const marker = markerRef.current
    if (marker) {
      const element = marker.getElement()
      if (element) {
        // Apply hover/selected styles
  element.style.transform = '';
  element.style.filter = '';
      }
    }
  }, [isSelected])

  const handleClick = () => {
    console.debug('[EventMarker] click', { id: event.id, name: event.name })
    onClick(event)
    // Fly the map tightly to the marker
    try {
      map.flyTo([event.latitude, event.longitude], 13, { animate: true, duration: 0.7 })
    } catch (err) {
      console.warn('[EventMarker] flyTo failed', err)
    }
    // Open the popup after the fly animation starts (pan can close popups)
    setTimeout(() => {
      try {
        markerRef.current?.openPopup()
      } catch (err) {
        console.warn('[EventMarker] delayed openPopup failed', err)
      }
    }, 250)
    // Bounce animation feedback
    const element = markerRef.current?.getElement()
    if (element) {
      element.classList.add('animate-marker-bounce')
      setTimeout(() => element.classList.remove('animate-marker-bounce'), 600)
    }
  }

  return (
    <Marker
      ref={markerRef}
      position={[event.latitude, event.longitude]}
      icon={icon}
      riseOnHover={true}
      riseOffset={250}
      zIndexOffset={isSelected ? 1200 : 600}
      interactive={true}
      bubblingMouseEvents={true}
      eventHandlers={{
        click: (e) => {
          e.originalEvent.stopPropagation()
          handleClick()
        }
      }}
    >
      <Popup
        position={[event.latitude, event.longitude]}
        closeButton={true}
        closeOnClick={false}
        autoPan={true}
        autoPanPadding={[24, 24]}
        keepInView={true}
        offset={[0, -20]}
      >
        <div className="event-popup-content">
          <div className="mb-2">
            <h3 className="event-popup-header">{event.name}</h3>
            <div className="text-sm text-espresso-secondary mt-1">{event.city}, {event.country}</div>
            {event.venue_address && (
              <div className="text-sm text-espresso-neutral mt-1">Venue: {event.venue_address}</div>
            )}
            {event.datetime_utc && (
              <div className="text-sm text-espresso-secondary mt-1">
                {new Date(event.datetime_utc).toLocaleString(undefined, {
                  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
                })}
              </div>
            )}
          </div>
          {event.description_short && (
            <p className="event-popup-description mb-2">{event.description_short}</p>
          )}
        </div>
      </Popup>
    </Marker>
  )
}
