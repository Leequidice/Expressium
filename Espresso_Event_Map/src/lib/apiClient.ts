import { EspressoEvent } from '@/types/event'

/**
 * API client for fetching event data
 */
class ApiClient {
  private baseUrl: string

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || ''
  }

  /**
   * Fetches events from the static JSON file (MVP implementation)
   */
  async fetchEventsFromJson(): Promise<EspressoEvent[]> {
    try {
      const response = await fetch('/events.json')
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`)
      }
      const events: EspressoEvent[] = await response.json()
      return events
    } catch (error) {
      console.error('Error fetching events from JSON:', error)
      throw new Error('Failed to load event data')
    }
  }

  /**
   * Fetches events from API (for future implementation)
   */
  async fetchEventsFromApi(): Promise<EspressoEvent[]> {
    if (!this.baseUrl) {
      throw new Error('API base URL not configured')
    }

    try {
      const response = await fetch(`${this.baseUrl}/events`)
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`)
      }
      const events: EspressoEvent[] = await response.json()
      return events
    } catch (error) {
      console.error('Error fetching events from API:', error)
      throw new Error('Failed to load event data from API')
    }
  }

  /**
   * Main method to fetch events (tries API first, falls back to JSON)
   */
  async fetchEvents(): Promise<EspressoEvent[]> {
    // For MVP, use JSON file
    // In production, try API first, then fallback to JSON
    try {
      if (this.baseUrl) {
        return await this.fetchEventsFromApi()
      } else {
        return await this.fetchEventsFromJson()
      }
    } catch (error) {
      // Fallback to JSON if API fails
      return await this.fetchEventsFromJson()
    }
  }

  /**
   * Fetches a single event by ID (for future implementation)
   */
  async fetchEventById(id: string): Promise<EspressoEvent | null> {
    const events = await this.fetchEvents()
    return events.find(event => event.id === id) || null
  }
}

export const apiClient = new ApiClient()
export default apiClient
