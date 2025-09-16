// ...existing code...
import { Popup } from 'react-leaflet'
import { EspressoEvent } from '@/types/event'
import { formatEventDate } from '@/utils/helpers'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface MapPopupProps {
  event: EspressoEvent
  onClose: () => void
}

export function MapPopup({ event }: Omit<MapPopupProps, 'onClose'>) {
  const getEventTypeColor = (type: string) => {
    const colors = {
      conference: 'bg-blue-100 text-blue-800',
      hackathon: 'bg-purple-100 text-purple-800', 
      meetup: 'bg-green-100 text-green-800',
      workshop: 'bg-yellow-100 text-yellow-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getActionButtonText = (status: string) => {
    return status === 'upcoming' ? 'Register' : 'Read Recap'
  }

  return (
    <Popup
      position={[event.latitude, event.longitude]}
      closeButton={true}
      closeOnClick={false}
  // ...existing code...
      className="event-popup"
      minWidth={320}
      maxWidth={400}
      offset={[0, -20]}
      autoPan={true}
      autoPanPadding={[24, 24]}
    >
      <div className="event-popup-content">
        {/* Event Header */}
        <div className="mb-3">
          <h3 className="event-popup-header">{event.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className={`event-popup-type ${event.type} ${getEventTypeColor(event.type)}`}>
              {event.type}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              event.status === 'upcoming' 
                ? 'bg-espresso-primary/10 text-espresso-primary' 
                : 'bg-espresso-neutral/20 text-espresso-neutral'
            }`}>
              {event.status}
            </span>
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-espresso-neutral" />
          <span className="event-popup-date">
            {formatEventDate(event.datetime_utc, true)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="h-4 w-4 text-espresso-neutral mt-0.5 flex-shrink-0" />
          <div>
            <div className="event-popup-location">
              {event.city}, {event.country}
            </div>
            {event.venue_address && (
              <div className="text-xs text-espresso-neutral mt-1">
                {event.venue_address}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {event.description_short && (
          <p className="event-popup-description mb-4">
            {event.description_short}
          </p>
        )}

        {/* Thumbnail */}
        {event.thumbnail_url && (
          <div className="mb-4">
            <img 
              src={event.thumbnail_url} 
              alt={event.name}
              className="w-full h-32 object-cover rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        )}

        {/* Action Button */}
        {event.external_link_url && (
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={() => {
              window.open(event.external_link_url, '_blank', 'noopener,noreferrer')
            }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {getActionButtonText(event.status)}
          </Button>
        )}
      </div>
    </Popup>
  )
}
