'use client'

import { Work } from '@/_types'
import ArtworkCard from './ArtworkCard'
import { cn } from '@/_lib/utils'

interface GalleryGridProps {
  works: Work[]
  onWorkClick: (work: Work) => void
  layout?: 'grid' | 'masonry' | 'list'
  className?: string
}

export default function GalleryGrid({ 
  works, 
  onWorkClick, 
  layout = 'grid',
  className 
}: GalleryGridProps) {
  
  if (works.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-fluent-blue to-fluent-pink rounded-full opacity-20"></div>
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">No artworks found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    )
  }

  const getGridClass = () => {
    switch (layout) {
      case 'list':
        return 'grid grid-cols-1 gap-6'
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6'
      case 'grid':
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
    }
  }

  return (
    <div className={cn("animate-fade-in", className)}>
      <div className={getGridClass()}>
        {works.map((work, index) => (
          <ArtworkCard
            key={work.id}
            work={work}
            onClick={() => onWorkClick(work)}
            className={cn(
              layout === 'masonry' && 'break-inside-avoid mb-6',
              layout === 'list' && 'flex flex-col sm:flex-row gap-4'
            )}
            style={{
              animationDelay: `${index * 0.05}s`
            }}
          />
        ))}
      </div>
      
      {/* Results count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Showing {works.length} artwork{works.length !== 1 ? 's' : ''}
      </div>
    </div>
  )
}