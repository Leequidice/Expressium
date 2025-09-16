import React from 'react'
import { EspressoEvent } from '@/types/event'
import { formatEventDate, formatEventDateShort } from '@/utils/helpers'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

interface EventListItemProps {
  event: EspressoEvent
  isSelected: boolean
  onClick: (event: EspressoEvent) => void
}

export function EventListItem({ event, isSelected, onClick }: EventListItemProps) {
  const getEventTypeColor = (type: string) => {
    const colors = {
      conference: 'bg-blue-100 text-blue-800 border-blue-200',
      hackathon: 'bg-purple-100 text-purple-800 border-purple-200', 
      meetup: 'bg-green-100 text-green-800 border-green-200',
      workshop: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getActionButtonText = (status: string) => {
    return status === 'upcoming' ? 'Register' : 'Read Recap'
  }

  return (
    <div 
      className={clsx(
        'p-4 rounded-lg border cursor-pointer transition-all duration-200',
        'hover:shadow-md hover:border-espresso-primary/30',
        isSelected 
          ? 'border-espresso-primary bg-espresso-primary/5 shadow-md' 
          : 'border-gray-200 bg-white',
        event.status === 'past' && 'opacity-75'
      )}
      onClick={() => onClick(event)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          {/* Event Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-espresso-foreground truncate">
                {event.name}
              </h3>
              
              <div className="flex items-center gap-2 mt-1">
                <span className={clsx(
                  'inline-block px-2 py-1 text-xs font-medium rounded-full border',
                  getEventTypeColor(event.type)
                )}>
                  {event.type}
                </span>
                
                <span className={clsx(
                  'px-2 py-1 text-xs font-medium rounded-full',
                  event.status === 'upcoming' 
                    ? 'bg-espresso-primary/10 text-espresso-primary' 
                    : 'bg-espresso-neutral/20 text-espresso-neutral'
                )}>
                  {event.status}
                </span>
              </div>
            </div>
            
            {/* Thumbnail */}
            {event.thumbnail_url && (
              <img 
                src={event.thumbnail_url} 
                alt={event.name}
                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            )}
          </div>

          {/* Event Details */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm text-espresso-secondary">
              <Calendar className="h-4 w-4" />
              <span>{formatEventDate(event.datetime_utc, true)}</span>
            </div>
            
            <div className="flex items-start gap-2 text-sm text-espresso-secondary">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <div>{event.city}, {event.country}</div>
                {event.venue_address && (
                  <div className="text-xs text-espresso-neutral mt-0.5">
                    {event.venue_address}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          {event.description_short && (
            <p className="text-sm text-espresso-foreground leading-relaxed mb-3 line-clamp-2">
              {event.description_short}
            </p>
          )}
        </div>
      </div>

      {/* Action Button */}
      {event.external_link_url && (
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              window.open(event.external_link_url, '_blank', 'noopener,noreferrer')
            }}
            className="text-xs"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            {getActionButtonText(event.status)}
          </Button>
        </div>
      )}
    </div>
  )
}
