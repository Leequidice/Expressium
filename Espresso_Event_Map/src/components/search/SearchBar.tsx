import React, { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { useEventStore } from '@/context/EventDataContext'
import { useDebounce } from '@/hooks/useDebounce'
import { generateSearchSuggestions } from '@/utils/helpers'
import { clsx } from 'clsx'

export function SearchBar() {
  const { events, filters, updateFilters } = useEventStore()
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [inputValue, setInputValue] = useState(filters.searchQuery)
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Debounce the search input to avoid excessive filtering
  const debouncedSearchQuery = useDebounce(inputValue, 300)

  // Update the store when debounced value changes
  useEffect(() => {
    updateFilters({ searchQuery: debouncedSearchQuery })
  }, [debouncedSearchQuery, updateFilters])

  // Generate suggestions when input changes
  useEffect(() => {
    if (inputValue.length >= 2) {
      const newSuggestions = generateSearchSuggestions(events, inputValue, 5)
      setSuggestions(newSuggestions)
      setShowSuggestions(newSuggestions.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [inputValue, events])

  // Handle clicking outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    updateFilters({ searchQuery: suggestion })
    setShowSuggestions(false)
  }

  const handleClear = () => {
    setInputValue('')
    updateFilters({ searchQuery: '' })
    setShowSuggestions(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search events, cities, or countries..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          icon={<Search className="h-4 w-4" />}
          className="pr-8"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-espresso-neutral" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg animate-slide-up">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              className={clsx(
                'flex w-full items-center px-3 py-2 text-sm text-left transition-colors duration-150',
                'hover:bg-espresso-primary/10 focus:bg-espresso-primary/10 focus:outline-none',
                'first:rounded-t-lg last:rounded-b-lg'
              )}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Search className="mr-2 h-3 w-3 text-espresso-neutral" />
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
