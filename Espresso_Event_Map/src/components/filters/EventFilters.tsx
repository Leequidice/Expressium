import React from 'react'
import { EventStatusFilter } from './EventStatusFilter'
import { EventTypeFilter } from './EventTypeFilter' 
import { RegionFilter } from './RegionFilter'
import { useFilteredEvents } from '@/hooks/useFilteredEvents'

export function EventFilters() {
  const { eventCounts, eventsByRegion } = useFilteredEvents()

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-espresso-secondary">Filter by:</span>
      </div>
      
      <EventStatusFilter />
      <EventTypeFilter />
      <RegionFilter regions={Object.keys(eventsByRegion)} />
      
      <div className="ml-auto text-sm text-espresso-neutral">
        {eventCounts.total} {eventCounts.total === 1 ? 'event' : 'events'} 
        {eventCounts.upcoming > 0 && (
          <span className="ml-2">
            <span className="inline-block w-2 h-2 bg-espresso-primary rounded-full mr-1" />
            {eventCounts.upcoming} upcoming
          </span>
        )}
        {eventCounts.past > 0 && (
          <span className="ml-2">
            <span className="inline-block w-2 h-2 bg-espresso-neutral rounded-full mr-1" />
            {eventCounts.past} past
          </span>
        )}
      </div>
    </div>
  )
}
