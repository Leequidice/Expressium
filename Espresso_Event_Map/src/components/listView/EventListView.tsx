import React, { useState } from 'react'
import { EventListItem } from './EventListItem'
import { useFilteredEvents } from '@/hooks/useFilteredEvents'
import { useMapInteractions } from '@/hooks/useMapInteractions'
import { useEventStore } from '@/context/EventDataContext'
import { sortEventsByDate } from '@/utils/helpers'
import { ChevronDown, Calendar, MapPin } from 'lucide-react'
import { Dropdown } from '@/components/ui/Dropdown'

type SortOption = 'date' | 'location' | 'name' | 'type'

const sortOptions = [
  { value: 'date', label: 'Sort by Date' },
  { value: 'location', label: 'Sort by Location' },
  { value: 'name', label: 'Sort by Name' },
  { value: 'type', label: 'Sort by Type' }
]

export function EventListView() {
  const { filteredEvents, eventCounts, hasResults } = useFilteredEvents()
  const { handleEventSelect } = useMapInteractions()
  const { mapState } = useEventStore()
  const [sortBy, setSortBy] = useState<SortOption>('date')

  // Sort events based on selected option
  const getSortedEvents = () => {
    const events = [...filteredEvents]
    
    switch (sortBy) {
      case 'date':
        return sortEventsByDate(events)
      case 'location':
        return events.sort((a, b) => {
          const locationA = `${a.city}, ${a.country}`
          const locationB = `${b.city}, ${b.country}`
          return locationA.localeCompare(locationB)
        })
      case 'name':
        return events.sort((a, b) => a.name.localeCompare(b.name))
      case 'type':
        return events.sort((a, b) => {
          if (a.type === b.type) {
            return a.name.localeCompare(b.name)
          }
          return a.type.localeCompare(b.type)
        })
      default:
        return events
    }
  }

  const sortedEvents = getSortedEvents()

  if (!hasResults) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-espresso-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-espresso-primary" />
          </div>
          <h3 className="text-lg font-semibold text-espresso-secondary mb-2">
            No events found
          </h3>
          <p className="text-sm text-espresso-neutral max-w-sm">
            Try adjusting your filters or search terms to find events
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* List Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-espresso-foreground">
            Events List
          </h2>
          
          <div className="flex items-center gap-2 text-sm text-espresso-neutral">
            <span>{eventCounts.total} events</span>
            {eventCounts.upcoming > 0 && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-espresso-primary rounded-full" />
                  <span>{eventCounts.upcoming} upcoming</span>
                </div>
              </>
            )}
            {eventCounts.past > 0 && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-espresso-neutral rounded-full" />
                  <span>{eventCounts.past} past</span>
                </div>
              </>
            )}
          </div>
        </div>

        <Dropdown
          options={sortOptions}
          value={sortBy}
          onChange={(value) => setSortBy(value as SortOption)}
          className="w-40"
        />
      </div>

      {/* Events List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {sortedEvents.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            isSelected={mapState.selectedEventId === event.id}
            onClick={handleEventSelect}
          />
        ))}
      </div>
    </div>
  )
}
