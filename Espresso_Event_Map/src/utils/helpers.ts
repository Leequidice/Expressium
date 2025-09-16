import { EspressoEvent, EventFilters } from '@/types/event'
import { format, parseISO, isAfter, isBefore } from 'date-fns'

/**
 * Filters events based on the provided criteria
 */
export function filterEvents(
  events: EspressoEvent[],
  filters: EventFilters
): EspressoEvent[] {
  return events.filter(event => {
    // Status filter
    if (filters.status !== 'all' && event.status !== filters.status) {
      return false
    }

    // Type filter
    if (filters.type !== 'all' && event.type !== filters.type) {
      return false
    }

    // Region filter (simplified - in production this would be more sophisticated)
    if (filters.region !== 'all') {
      const region = getEventRegion(event)
      if (region !== filters.region) {
        return false
      }
    }

    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      const searchableText = `${event.name} ${event.city} ${event.country} ${event.description_short || ''}`.toLowerCase()
      if (!searchableText.includes(query)) {
        return false
      }
    }

    return true
  })
}

/**
 * Determines the region of an event based on country
 */
export function getEventRegion(event: EspressoEvent): string {
  const { country } = event
  
  // North America
  if (['United States', 'Canada', 'Mexico'].includes(country)) {
    return 'North America'
  }
  
  // Europe
  if (['Germany', 'United Kingdom', 'France', 'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Austria', 'Portugal', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland'].includes(country)) {
    return 'Europe'
  }
  
  // Asia-Pacific
  if (['Japan', 'South Korea', 'China', 'Singapore', 'Australia', 'New Zealand', 'India', 'Thailand', 'Malaysia', 'Philippines', 'Indonesia'].includes(country)) {
    return 'Asia-Pacific'
  }
  
  // Latin America
  if (['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Uruguay', 'Ecuador', 'Venezuela'].includes(country)) {
    return 'Latin America'
  }
  
  return 'Other'
}

/**
 * Sorts events by date (upcoming first, then past in reverse chronological order)
 */
export function sortEventsByDate(events: EspressoEvent[]): EspressoEvent[] {
  // ...existing code...
  
  const upcoming = events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => parseISO(a.datetime_utc).getTime() - parseISO(b.datetime_utc).getTime())
  
  const past = events
    .filter(event => event.status === 'past')
    .sort((a, b) => parseISO(b.datetime_utc).getTime() - parseISO(a.datetime_utc).getTime())
  
  return [...upcoming, ...past]
}

/**
 * Formats event date for display
 */
export function formatEventDate(datetime: string, includeTime = false): string {
  const date = parseISO(datetime)
  
  if (includeTime) {
    return format(date, 'MMM d, yyyy • h:mm a')
  }
  
  return format(date, 'MMM d, yyyy')
}

/**
 * Gets a shortened date format for tooltips
 */
export function formatEventDateShort(datetime: string): string {
  return format(parseISO(datetime), 'MMM yyyy')
}

/**
 * Determines if an event is coming up soon (within 30 days)
 */
export function isEventUpcomingSoon(datetime: string): boolean {
  const eventDate = parseISO(datetime)
  const now = new Date()
  const thirtyDaysFromNow = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000))
  
  return isAfter(eventDate, now) && isBefore(eventDate, thirtyDaysFromNow)
}

/**
 * Generates autocomplete suggestions based on search query
 */
export function generateSearchSuggestions(
  events: EspressoEvent[],
  query: string,
  maxSuggestions = 5
): string[] {
  if (!query || query.length < 2) return []
  
  const suggestions = new Set<string>()
  const queryLower = query.toLowerCase()
  
  events.forEach(event => {
    // City suggestions
    if (event.city.toLowerCase().includes(queryLower) && suggestions.size < maxSuggestions) {
      suggestions.add(event.city)
    }
    
    // Country suggestions
    if (event.country.toLowerCase().includes(queryLower) && suggestions.size < maxSuggestions) {
      suggestions.add(event.country)
    }
    
    // Event name suggestions
    if (event.name.toLowerCase().includes(queryLower) && suggestions.size < maxSuggestions) {
      suggestions.add(event.name)
    }
  })
  
  return Array.from(suggestions).slice(0, maxSuggestions)
}

/**
 * Calculates the bounds that contain all events
 */
export function calculateEventsBounds(events: EspressoEvent[]): [[number, number], [number, number]] | null {
  if (events.length === 0) return null
  
  let minLat = events[0].latitude
  let maxLat = events[0].latitude
  let minLng = events[0].longitude
  let maxLng = events[0].longitude
  
  events.forEach(event => {
    minLat = Math.min(minLat, event.latitude)
    maxLat = Math.max(maxLat, event.latitude)
    minLng = Math.min(minLng, event.longitude)
    maxLng = Math.max(maxLng, event.longitude)
  })
  
  // Add padding
  const latPadding = (maxLat - minLat) * 0.1
  const lngPadding = (maxLng - minLng) * 0.1
  
  return [
    [minLat - latPadding, minLng - lngPadding],
    [maxLat + latPadding, maxLng + lngPadding]
  ]
}
