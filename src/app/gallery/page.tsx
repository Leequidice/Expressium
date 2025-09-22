'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/_components/layout/Navigation'
import Breadcrumb from '@/_components/ui/Breadcrumb'
import Footer from '@/_components/ui/Footer'
import FilterBar from '@/_components/filters/FilterBar'
import GalleryGrid from '@/_components/gallery/GalleryGrid'
import LightboxModal from '@/_components/gallery/LightboxModal'
import { mockWorks, mockCategories, mockTags } from '@/_lib/mock-data'
import { Work } from '@/_types'

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [layout, setLayout] = useState<'grid' | 'masonry' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('created_at')
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Filter and sort works
  const filteredAndSortedWorks = useMemo(() => {
    let filtered = mockWorks.filter(work => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (work.creator.full_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        work.creator.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (work.description?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        work.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))

      // Category filter
      const matchesCategory = selectedCategory === 'All' || work.category.name === selectedCategory

      // Tags filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tagId => work.tags.some(tag => tag.id === tagId))

      return matchesSearch && matchesCategory && matchesTags
    })

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'likes':
          return (b.like_count || 0) - (a.like_count || 0)
        case 'creator':
          return (a.creator.full_name || a.creator.username).localeCompare(
            b.creator.full_name || b.creator.username
          )
        case 'created_at':
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedTags, sortBy])

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work)
    setCurrentIndex(filteredAndSortedWorks.findIndex(w => w.id === work.id))
  }

  const handlePrevious = () => {
    if (filteredAndSortedWorks.length === 0) return
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredAndSortedWorks.length - 1
    setCurrentIndex(newIndex)
    setSelectedWork(filteredAndSortedWorks[newIndex])
  }

  const handleNext = () => {
    if (filteredAndSortedWorks.length === 0) return
    const newIndex = currentIndex < filteredAndSortedWorks.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedWork(filteredAndSortedWorks[newIndex])
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-light bg-gradient-to-r from-fluent-blue to-fluent-pink bg-clip-text text-transparent mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover curated creative works from talented artists around the world. 
            Use filters to find exactly what inspires you.
          </p>
        </div>
        
        {/* Filters */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
          categories={mockCategories}
          tags={mockTags}
          layout={layout}
          onLayoutChange={setLayout}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        
        {/* Gallery Grid */}
        <GalleryGrid
          works={filteredAndSortedWorks}
          onWorkClick={handleWorkClick}
          layout={layout}
        />
      </main>
      
      {/* Lightbox Modal */}
      {selectedWork && (
        <LightboxModal
          work={selectedWork}
          works={filteredAndSortedWorks}
          currentIndex={currentIndex}
          onClose={() => setSelectedWork(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}

      <Footer />
    </div>
  )
}