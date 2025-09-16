import React from 'react'
import { useEventStore } from '@/context/EventDataContext'
import { ZoomIn, ZoomOut, Maximize2, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useMapInteractions } from '@/hooks/useMapInteractions'

export function MapControls() {
  const { mapMode, setMapMode } = useEventStore()
  const { mapState, setMapRef, fitMapToEvents, resetMapView } = useMapInteractions()

  const handleZoomIn = () => {
    // Zoom in via DOM event on map (handled in EventMap whenCreated listener)
    const event = new CustomEvent('espresso-map-zoom', { detail: { delta: 1 } })
    window.dispatchEvent(event)
  }

  const handleZoomOut = () => {
    const event = new CustomEvent('espresso-map-zoom', { detail: { delta: -1 } })
    window.dispatchEvent(event)
  }

  return (
  <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-1 mb-2 flex justify-center">
        <button
          className={`px-3 py-1 rounded-full font-medium text-sm transition-colors ${mapMode === 'dark' ? 'bg-[#4B2E19] text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setMapMode(mapMode === 'dark' ? 'light' : 'dark')}
          title="Toggle map dark mode"
        >
          {mapMode === 'dark' ? 'Light Map' : 'Dark Map'}
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleZoomIn}
          className="w-8 h-8 p-0"
          title="Zoom In"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleZoomOut}
          className="w-8 h-8 p-0"
          title="Zoom Out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={fitMapToEvents}
          className="w-8 h-8 p-0"
          title="Fit to Events"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetMapView}
          className="w-8 h-8 p-0"
          title="Reset View"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default MapControls
