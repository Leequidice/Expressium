'use client'

import { useState } from 'react'
import { Search, Filter, Grid3X3, List, LayoutGrid } from 'lucide-react'
import { Category, Tag } from '@/_types'
import { cn } from '@/_lib/utils'

interface FilterBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
  categories: Category[]
  tags: Tag[]
  layout: 'grid' | 'masonry' | 'list'
  onLayoutChange: (layout: 'grid' | 'masonry' | 'list') => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export default function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagsChange,
  categories,
  tags,
  layout,
  onLayoutChange,
  sortBy,
  onSortChange
}: FilterBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleTagToggle = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      onTagsChange(selectedTags.filter(id => id !== tagId))
    } else {
      onTagsChange([...selectedTags, tagId])
    }
  }

  const clearFilters = () => {
    onSearchChange('')
    onCategoryChange('All')
    onTagsChange([])
  }

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedTags.length > 0

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
      {/* Main filter row */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search artworks, artists, or tags..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fluent-blue focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Category filter */}
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fluent-blue focus:border-transparent bg-white min-w-[150px]"
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fluent-blue focus:border-transparent bg-white min-w-[150px]"
        >
          <option value="created_at">Newest First</option>
          <option value="title">Title A-Z</option>
          <option value="likes">Most Liked</option>
          <option value="creator">Artist Name</option>
        </select>
      </div>

      {/* Second row with layout and advanced options */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Layout switcher */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onLayoutChange('grid')}
              className={cn(
                "p-2 rounded-md transition-colors",
                layout === 'grid' ? "bg-white shadow-sm text-fluent-blue" : "text-gray-600 hover:text-gray-900"
              )}
              title="Grid layout"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onLayoutChange('masonry')}
              className={cn(
                "p-2 rounded-md transition-colors",
                layout === 'masonry' ? "bg-white shadow-sm text-fluent-blue" : "text-gray-600 hover:text-gray-900"
              )}
              title="Masonry layout"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onLayoutChange('list')}
              className={cn(
                "p-2 rounded-md transition-colors",
                layout === 'list' ? "bg-white shadow-sm text-fluent-blue" : "text-gray-600 hover:text-gray-900"
              )}
              title="List layout"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Advanced filter toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Advanced</span>
          </button>

          {/* Clear filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-fluent-blue hover:text-fluent-murrey transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Advanced filters */}
      {showAdvanced && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Filter by tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleTagToggle(tag.id)}
                  className={cn(
                    "px-3 py-2 text-sm rounded-lg border transition-all duration-200",
                    selectedTags.includes(tag.id)
                      ? "bg-fluent-blue text-white border-fluent-blue"
                      : "bg-white text-gray-600 border-gray-300 hover:border-fluent-blue hover:text-fluent-blue"
                  )}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active filters summary */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-gray-500">Active filters:</span>
            {searchQuery && (
              <span className="px-2 py-1 bg-fluent-blue/10 text-fluent-blue rounded-md">
                Search: "{searchQuery}"
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="px-2 py-1 bg-fluent-pink/10 text-fluent-murrey rounded-md">
                Category: {selectedCategory}
              </span>
            )}
            {selectedTags.map((tagId) => {
              const tag = tags.find(t => t.id === tagId)
              return tag ? (
                <span key={tagId} className="px-2 py-1 bg-fluent-spring/10 text-fluent-forest rounded-md">
                  Tag: {tag.name}
                </span>
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}