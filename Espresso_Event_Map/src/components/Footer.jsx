import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-footer text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold">Espresso</h4>
          <p className="mt-3 text-sm text-gray-300">
            The base layer for rollups. Real-time finality, crosschain composability, and Ethereum compatibility.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h5 className="text-sm font-semibold tracking-wide text-gray-200">Events</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a className="hover:text-white" href="#past">Past Events</a></li>
              <li><a className="hover:text-white" href="#upcoming">Upcoming Events</a></li>
              <li><a className="hover:text-white" href="#calendar">Event Calendar</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-wide text-gray-200">Resources</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a className="hover:text-white" href="#docs">Documentation</a></li>
              <li><a className="hover:text-white" href="#devtools">Developer Tools</a></li>
              <li><a className="hover:text-white" href="#community">Community</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-wide text-gray-200">Social</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a className="hover:text-white" href="https://discord.gg/" target="_blank" rel="noreferrer">Discord</a></li>
              <li><a className="hover:text-white" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a className="hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Espresso Systems
        </div>
      </div>
    </footer>
  )
}


