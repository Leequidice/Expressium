import { useEffect, useMemo } from 'react'
import { useEventStore } from '@/context/EventDataContext'
import { filterEvents, sortEventsByDate } from '@/utils/helpers'

/**
 * Custom hook for filtering and sorting events based on current filters
 */
export function useFilteredEvents() {
  const { 
    events, 
    filters, 
  // ...existing code...
    setFilteredEvents 
  } = useEventStore()

  // Memoize filtered and sorted events to prevent unnecessary recalculations
  const processedEvents = useMemo(() => {
    const filtered = filterEvents(events, filters)
    return sortEventsByDate(filtered)
  }, [events, filters])

  // Update the store when processed events change
  useEffect(() => {
    setFilteredEvents(processedEvents)
  }, [processedEvents, setFilteredEvents])

  // Count events by status for UI display
  const eventCounts = useMemo(() => {
    const upcoming = processedEvents.filter(e => e.status === 'upcoming').length
    const past = processedEvents.filter(e => e.status === 'past').length
    
    return {
      total: processedEvents.length,
      upcoming,
      past
    }
  }, [processedEvents])

  // Group events by region for advanced filtering
  const eventsByRegion = useMemo(() => {
    const regions: Record<string, number> = {}
    
    processedEvents.forEach(event => {
      // Simple region mapping - in production this would be more sophisticated
      let region = 'Other'
      const { country } = event
      
      if (['United States', 'Canada', 'Mexico'].includes(country)) {
        region = 'North America'
      } else if (['Germany', 'United Kingdom', 'France', 'Italy', 'Spain'].includes(country)) {
        region = 'Europe'
      } else if (['Japan', 'South Korea', 'Singapore', 'Australia'].includes(country)) {
        region = 'Asia-Pacific'
      } else if (['Brazil', 'Argentina', 'Chile'].includes(country)) {
        region = 'Latin America'
      }
      
      regions[region] = (regions[region] || 0) + 1
    })
    
    return regions
  }, [processedEvents])

  return {
    filteredEvents: processedEvents,
    eventCounts,
    eventsByRegion,
    hasResults: processedEvents.length > 0,
    isEmpty: events.length === 0,
    isFiltered: Object.values(filters).some(value => 
      value !== 'all' && value !== ''
    )
  }
}
