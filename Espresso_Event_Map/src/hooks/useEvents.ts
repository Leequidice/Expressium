import { useEffect, useState } from 'react'
import { EspressoEvent } from '@/types/event'
import { apiClient } from '@/lib/apiClient'
import { useEventStore } from '@/context/EventDataContext'

/**
 * Custom hook for fetching and managing event data
 */
export function useEvents() {
  const { 
    events, 
    loading, 
    error, 
    setEvents, 
    setLoading, 
    setError 
  } = useEventStore()

  const fetchEvents = async () => {
    try {
      setLoading(true)
      setError(null)
      const eventData = await apiClient.fetchEvents()
      setEvents(eventData)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch events'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return {
    events,
    loading,
    error,
    refetch: fetchEvents
  }
}

/**
 * Custom hook for getting a specific event by ID
 */
export function useEvent(eventId: string | null): EspressoEvent | null {
  const { events } = useEventStore()
  
  return events.find(event => event.id === eventId) || null
}
