'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Work } from '@/_types'
import ArtworkCard from '@/_components/gallery/ArtworkCard'

interface CarouselProps {
  works: Work[]
  onWorkClick: (work: Work) => void
  autoPlayInterval?: number
  visibleItems?: number
}

export default function Carousel({ 
  works, 
  onWorkClick, 
  autoPlayInterval = 5000,
  visibleItems = 3 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const totalSlides = Math.max(0, works.length - visibleItems + 1)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    )
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1
    )
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, totalSlides - 1)))
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused || totalSlides <= 1) return

    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused, nextSlide, autoPlayInterval, totalSlides])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  if (works.length === 0) {
    return null
  }

  // If we have 3 or fewer items, show them all without carousel
  if (works.length <= visibleItems) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <div 
            key={work.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ArtworkCard 
              work={work} 
              onClick={() => onWorkClick(work)}
              className="hover:shadow-xl"
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            width: `${(works.length * 100) / visibleItems}%`
          }}
        >
          {works.map((work, index) => (
            <div 
              key={work.id}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / works.length}%` }}
            >
              <ArtworkCard 
                work={work} 
                onClick={() => onWorkClick(work)}
                className="hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-fluent-blue transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-fluent-blue transition-colors" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-fluent-blue to-fluent-pink scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play Control */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
          </button>
        </div>
      )}
    </div>
  )
}