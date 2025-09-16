import React from 'react'
import { Dropdown } from '@/components/ui/Dropdown'
import { useEventStore } from '@/context/EventDataContext'
import { EventStatus } from '@/types/event'

const statusOptions = [
  { value: 'all', label: 'All Events' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'past', label: 'Past' }
]

export function EventStatusFilter() {
  const { filters, updateFilters } = useEventStore()

  const handleStatusChange = (status: string) => {
    updateFilters({ status: status as EventStatus | 'all' })
  }

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-espresso-secondary">
        Status:
      </label>
      <Dropdown
        options={statusOptions}
        value={filters.status}
        onChange={handleStatusChange}
        className="w-32"
      />
    </div>
  )
}
