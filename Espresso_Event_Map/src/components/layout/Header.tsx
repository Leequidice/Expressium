import { useState, useEffect } from 'react'
import { Map, List, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'
import { SearchBar } from '@/components/search/SearchBar'
import { useEventStore } from '@/context/EventDataContext'
import { useMapInteractions } from '@/hooks/useMapInteractions'

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { mapState, toggleView, updateFilters } = useEventStore()
  const { resetMapView } = useMapInteractions()

  const handleClearFilters = () => {
    updateFilters({
      status: 'all',
      type: 'all', 
      region: 'all',
      searchQuery: ''
    })
  }

  return (
  <header className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 px-6 py-4 transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-[#7B3F00]'}`}>
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/brand/logo.svg" alt="Espresso" className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-espresso-foreground">
                Espresso World Map
              </h1>
              <p className="text-sm text-espresso-neutral">
                Discover global Espresso events
              </p>
            </div>
          </div>
        </div>

        {/* Center Controls */}
        <div className="flex items-center gap-4">
          <SearchBar />
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Clear Filters
          </Button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <ToggleSwitch
            checked={mapState.isListView}
            onChange={toggleView}
            label={mapState.isListView ? 'List View' : 'Map View'}
          />

          {/* Globe toggle removed */}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={resetMapView}
            className="flex items-center gap-2"
            title="Reset map view"
          >
            {mapState.isListView ? (
              <List className="h-4 w-4" />
            ) : (
              <Map className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
