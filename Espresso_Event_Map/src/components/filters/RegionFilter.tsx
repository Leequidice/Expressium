import React from 'react'
import { Dropdown } from '@/components/ui/Dropdown'
import { useEventStore } from '@/context/EventDataContext'

interface RegionFilterProps {
  regions: string[]
}

export function RegionFilter({ regions }: RegionFilterProps) {
  const { filters, updateFilters } = useEventStore()

  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    ...regions.map(region => ({
      value: region,
      label: region
    }))
  ]

  const handleRegionChange = (region: string) => {
    updateFilters({ region })
  }

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-espresso-secondary">
        Region:
      </label>
      <Dropdown
        options={regionOptions}
        value={filters.region}
        onChange={handleRegionChange}
        className="w-40"
      />
    </div>
  )
}
