import React from 'react'
import { ExternalLink, Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="w-full bg-[#B8733B] py-10 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Stay Updated on Future Events</h2>
        <p className="text-lg text-white/90 mb-6">Be the first to know about upcoming Espresso events around the world</p>
        <form className="flex flex-col items-center justify-center gap-2 max-w-md mx-auto">
          <button type="button" className="w-full md:w-auto flex items-center justify-between gap-2 px-6 py-3 bg-[#A05C2A] text-white rounded-full border border-white/30 shadow hover:bg-[#8C4B1F] transition-all font-medium text-base">
            Subscribe to our newsletter
            <span className="inline-block bg-white/80 rounded-full p-2 ml-2">
              <svg width="18" height="18" fill="none" stroke="#A05C2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </button>
        </form>
      </section>

      {/* Existing Footer */}
  <footer className="bg-[#4B2E19] border-t border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="text-espresso-neutral">
              © 2025 Espresso Systems. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://espresso.systems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-espresso-neutral hover:text-espresso-primary transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Website
              </a>
              <a
                href="https://github.com/EspressoSystems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-espresso-neutral hover:text-espresso-primary transition-colors"
              >
                <Github className="h-3 w-3" />
                GitHub
              </a>
              <a
                href="https://twitter.com/EspressoSys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-espresso-neutral hover:text-espresso-primary transition-colors"
              >
                <Twitter className="h-3 w-3" />
                Twitter
              </a>
            </div>
          </div>
          <div className="text-espresso-neutral">
            Built with OpenStreetMap • Powered by Leaflet
          </div>
        </div>
      </footer>
    </>
  )
}
