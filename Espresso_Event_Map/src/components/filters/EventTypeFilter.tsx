import React from 'react'
import { Dropdown } from '@/components/ui/Dropdown'
import { useEventStore } from '@/context/EventDataContext'
import { EventType } from '@/types/event'

const typeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'conference', label: 'Conferences' },
  { value: 'hackathon', label: 'Hackathons' },
  { value: 'meetup', label: 'Meetups' },
  { value: 'workshop', label: 'Workshops' }
]

export function EventTypeFilter() {
  const { filters, updateFilters } = useEventStore()

  const handleTypeChange = (type: string) => {
    updateFilters({ type: type as EventType | 'all' })
  }

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-espresso-secondary">
        Type:
      </label>
      <Dropdown
        options={typeOptions}
        value={filters.type}
        onChange={handleTypeChange}
        className="w-36"
      />
    </div>
  )
}
