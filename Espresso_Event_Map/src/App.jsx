import React from 'react'
import Header from '@/components/Header'
import Map from '@/components/Map'
import EventCard from '@/components/EventCard'
import Footer from '@/components/Footer'
import { events } from '@/data/events.js'
import Modal from '@/components/Modal'

export default function App() {
  const [selected, setSelected] = React.useState(null)
  const close = () => setSelected(null)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Map Section */}
      <section className="bg-beige-bg" id="map">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Map onSelect={(m) => setSelected(m)} />
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="bg-beige-bg py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Upcoming Events</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.upcoming.map((e) => (
              <EventCard key={e.title} {...e} onClick={() => setSelected({ ...e, status: 'Upcoming' })} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section id="past" className="bg-beige-bg py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">Past Events</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.past.map((e) => (
              <EventCard key={e.title} {...e} compact onClick={() => setSelected({ ...e, status: 'Past' })} />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <Modal open={!!selected} onClose={close} title={selected?.title || 'Event details'}>
        <div className="space-y-2">
          {selected?.status ? (
            <div className="text-sm"><span className="font-medium">Status:</span> {selected.status}</div>
          ) : null}
          {selected?.date ? (
            <div className="text-sm"><span className="font-medium">When:</span> {selected.date}</div>
          ) : null}
          {selected?.venue ? (
            <div className="text-sm"><span className="font-medium">Where:</span> {selected.venue}</div>
          ) : null}
          {selected?.description ? (
            <p className="text-sm leading-6">{selected.description}</p>
          ) : (
            <p className="text-sm leading-6">More details will be announced soon. Stay tuned.</p>
          )}
          <a href="#" className="inline-flex items-center text-accent-blue hover:underline">View details</a>
        </div>
      </Modal>
    </div>
  )
}


