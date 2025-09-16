// ...existing code...
import { MainLayout } from '@/components/layout/MainLayout'
import { EventFilters } from '@/components/filters/EventFilters'
import { EventMap } from '@/components/map/EventMap'
import { EventListView } from '@/components/listView/EventListView'
import { useEvents } from '@/hooks/useEvents'
import { useEventStore } from '@/context/EventDataContext'
import { Loader2, AlertTriangle } from 'lucide-react'

function App() {
  const { loading, error } = useEvents()
  const { mapState } = useEventStore()

  if (loading) {
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-espresso-primary" />
            <p className="text-lg font-medium text-espresso-secondary">
              Loading Espresso events...
            </p>
            <p className="text-sm text-espresso-neutral mt-1">
              Discovering events around the world
            </p>
          </div>
        </div>
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-error" />
            <h2 className="text-xl font-semibold text-espresso-secondary mb-2">
              Unable to load events
            </h2>
            <p className="text-sm text-espresso-neutral mb-4">
              {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-espresso-primary text-white rounded-lg hover:bg-espresso-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      {/* Filters */}
  <div id="event-filters-section" className="p-2 sm:p-4 bg-espresso-background mt-20 sm:mt-24">
        <EventFilters />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col sm:flex-row">
        {mapState.isListView ? (
          <EventListView />
        ) : (
          <div className="flex-1 p-2 sm:p-4">
            <div className="w-full h-full min-h-[300px] sm:min-h-[600px]">
              <EventMap />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default App
