'use client'

import { Work } from '@/_types'
import Carousel from '@/_components/ui/Carousel'
import { Sparkles } from 'lucide-react'

interface SpotlightSectionProps {
  works: Work[]
  onWorkClick: (work: Work) => void
}

export default function SpotlightSection({ works, onWorkClick }: SpotlightSectionProps) {
  if (works.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-fluent-blue/10 to-fluent-pink/10">
              <Sparkles className="w-6 h-6 text-fluent-blue" />
            </div>
          </div>
          <h2 className="text-4xl font-light bg-gradient-to-r from-fluent-blue via-fluent-pink to-fluent-spring bg-clip-text text-transparent mb-4">
            Spotlight
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Community favorites and curator-selected works that showcase the diversity and excellence of our artistic community.
          </p>
        </div>
        
        <Carousel 
          works={works} 
          onWorkClick={onWorkClick}
          autoPlayInterval={3000}
          visibleItems={2}
        />
      </div>
    </section>
  )
}