'use client'

import { useState } from 'react'
import Navigation from '@/_components/layout/Navigation'
import SpotlightSection from '@/_components/SpotlightSection'
import LightboxModal from '@/_components/gallery/LightboxModal'
import Footer from '@/_components/ui/Footer'
import { ArrowRight, Palette, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { mockWorks } from '@/_lib/mock-data'
import { Work } from '@/_types'

export default function HomePage() {
  // Get featured works for spotlight
  const featuredWorks = mockWorks.filter(work => work.is_featured)
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work)
    setCurrentIndex(featuredWorks.findIndex(w => w.id === work.id))
  }

  const handlePrevious = () => {
    if (featuredWorks.length === 0) return
    const newIndex = currentIndex > 0 ? currentIndex - 1 : featuredWorks.length - 1
    setCurrentIndex(newIndex)
    setSelectedWork(featuredWorks[newIndex])
  }

  const handleNext = () => {
    if (featuredWorks.length === 0) return
    const newIndex = currentIndex < featuredWorks.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedWork(featuredWorks[newIndex])
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-fluent-blue/5 via-fluent-pink/3 to-fluent-spring/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-fluent-blue/10 to-fluent-pink/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-fluent-spring/10 to-fluent-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            {/* Main title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
                <span className="bg-gradient-to-r from-fluent-blue via-fluent-pink to-fluent-spring bg-clip-text text-transparent animate-gradient-shift bg-300%">
                  Welcome to
                </span>
                <br />
                <span className="bg-gradient-to-r from-fluent-spring via-fluent-cyan to-fluent-blue bg-clip-text text-transparent">
                  Expressium
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A digital gallery built for the Fluent community. Discover creative works, 
                community projects, and artworks in a minimalist, distraction-free space 
                where creativity takes the spotlight.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Explore Gallery
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-fluent-blue hover:text-fluent-blue transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <SpotlightSection works={featuredWorks} onWorkClick={handleWorkClick} />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-fluent-blue/5 to-fluent-pink/5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-fluent-blue to-fluent-pink rounded-xl flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Curated Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Every piece is carefully reviewed and curated to maintain the highest 
                artistic standards and create meaningful collections.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-fluent-spring/5 to-fluent-cyan/5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-fluent-spring to-fluent-cyan rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Artist-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Our platform puts artists first, providing them with the tools and 
                exposure they need without algorithmic interference.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-fluent-pink/5 to-fluent-murrey/5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-fluent-pink to-fluent-murrey rounded-xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Minimal Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Clean, distraction-free interface that lets the artwork speak for itself, 
                creating a gallery-like experience online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fluent-blue/10 via-fluent-pink/5 to-fluent-spring/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Ready to Discover Amazing Art?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join our community of art lovers and creators. Explore curated collections, 
            discover new artists, and experience art in a whole new way.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedWork && (
        <LightboxModal
          work={selectedWork}
          works={featuredWorks}
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