'use client'

import { useState } from 'react'
import Navigation from '@/_components/layout/Navigation'
import Breadcrumb from '@/_components/ui/Breadcrumb'
import Footer from '@/_components/ui/Footer'
import ArtworkCard from '@/_components/gallery/ArtworkCard'
import LightboxModal from '@/_components/gallery/LightboxModal'
import { mockCollections, mockWorks } from '@/_lib/mock-data'
import { Work, Collection } from '@/_types'
import { Calendar, User, Eye, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CollectionsPage() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null)

  // For demo purposes, assign some works to collections
  const collectionsWithWorks = mockCollections.map(collection => ({
    ...collection,
    works: mockWorks.slice(0, 2) // Assign first 2 works to each collection
  }))

  const handleWorkClick = (work: Work, collectionWorks: Work[]) => {
    setSelectedWork(work)
    setCurrentIndex(collectionWorks.findIndex(w => w.id === work.id))
  }

  const handlePrevious = () => {
    if (!selectedCollection) return
    const works = selectedCollection.works
    const newIndex = currentIndex > 0 ? currentIndex - 1 : works.length - 1
    setCurrentIndex(newIndex)
    setSelectedWork(works[newIndex])
  }

  const handleNext = () => {
    if (!selectedCollection) return
    const works = selectedCollection.works
    const newIndex = currentIndex < works.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedWork(works[newIndex])
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Page header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-light bg-gradient-to-r from-fluent-blue to-fluent-pink bg-clip-text text-transparent mb-4">
            Collections
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated exhibitions and thematic groupings that showcase the diversity and depth of creative expression.
          </p>
        </div>
        
        {/* Collections Grid */}
        <div className="space-y-16">
          {collectionsWithWorks.map((collection, index) => (
            <div 
              key={collection.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Collection Header */}
              <div className="mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-2">
                      {collection.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {collection.curator && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>Curated by {collection.curator.full_name || collection.curator.username}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(collection.created_at).getFullYear()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{collection.works.length} works</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    View Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {collection.description && (
                  <p className="text-gray-600 leading-relaxed max-w-4xl">
                    {collection.description}
                  </p>
                )}
              </div>

              {/* Collection Preview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {collection.works.map((work) => (
                  <ArtworkCard
                    key={work.id}
                    work={work}
                    onClick={() => {
                      setSelectedCollection(collection)
                      handleWorkClick(work, collection.works)
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {collectionsWithWorks.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-fluent-blue to-fluent-pink rounded-full opacity-20"></div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No collections yet</h3>
            <p className="text-gray-500 mb-8">Collections will appear here as curators create themed exhibitions.</p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </main>
      
      {/* Lightbox Modal */}
      {selectedWork && (
        <LightboxModal
          work={selectedWork}
          works={selectedCollection?.works || []}
          currentIndex={currentIndex}
          onClose={() => {
            setSelectedWork(null)
            setSelectedCollection(null)
          }}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}

      <Footer />
    </div>
  )
}