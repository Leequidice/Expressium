'use client'

import Navigation from '../_components/layout/Navigation'
import Breadcrumb from '../_components/ui/Breadcrumb'
import Footer from '../_components/ui/Footer'
import { User, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { mockUsers, mockWorks } from '../_lib/mock-data'

export default function ArtistsPage() {
  // Get works by artist
  const artistsWithWorks = mockUsers.map(artist => ({
    ...artist,
    works: mockWorks.filter(work => work.creator.id === artist.id),
    workCount: mockWorks.filter(work => work.creator.id === artist.id).length
  }))

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-light bg-gradient-to-r from-fluent-blue to-fluent-pink bg-clip-text text-transparent mb-4">
            Artists
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented creators behind the artworks in our gallery. 
            Each artist brings their unique perspective and vision to our community.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artistsWithWorks.map((artist, index) => (
            <div 
              key={artist.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Artist Avatar/Header */}
              <div className="p-6 bg-gradient-to-br from-fluent-blue/5 to-fluent-pink/5">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-fluent-blue to-fluent-pink rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 text-center mb-2">
                  {artist.full_name || artist.username}
                </h3>
                
                {artist.username !== artist.full_name && (
                  <p className="text-sm text-gray-500 text-center mb-3">
                    @{artist.username}
                  </p>
                )}
              </div>

              {/* Artist Info */}
              <div className="p-6">
                {artist.bio && (
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {artist.bio}
                  </p>
                )}

                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {new Date(artist.created_at).getFullYear()}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{artist.workCount} artwork{artist.workCount !== 1 ? 's' : ''}</span>
                  </div>

                  {artist.website && (
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <a 
                        href={artist.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-fluent-blue hover:text-fluent-murrey transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>

                {/* Artist's works preview */}
                {artist.works.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Works</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {artist.works.slice(0, 3).map((work) => {
                        const primaryAsset = work.media_assets.find(asset => asset.is_primary)
                        return (
                          <div key={work.id} className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                            {primaryAsset && (
                              <img
                                src={primaryAsset.url}
                                alt={work.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <Link
                  href={`/artists/${artist.username}`}
                  className="block w-full px-4 py-2 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white text-center font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {artistsWithWorks.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No artists yet</h3>
            <p className="text-gray-500">Artists will appear here as they join the community.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}