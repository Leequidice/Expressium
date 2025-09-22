'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Eye, User, Calendar } from 'lucide-react'
import { Work } from '@/_types'
import { cn } from '@/_lib/utils'

interface ArtworkCardProps {
  work: Work
  onClick: () => void
  className?: string
  style?: React.CSSProperties
}

export default function ArtworkCard({ work, onClick, className, style }: ArtworkCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const primaryAsset = work.media_assets.find(asset => asset.is_primary)
  const imageUrl = primaryAsset?.url || '/placeholder-artwork.jpg'
  const altText = primaryAsset?.alt_text || work.title

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <div 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:scale-[1.02]",
        className
      )}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay with interactions */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )}>
          {/* Top right actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleLike}
              className={cn(
                "p-2 rounded-full backdrop-blur-sm transition-all duration-200",
                isLiked 
                  ? "bg-red-500 text-white shadow-lg" 
                  : "bg-white/80 text-gray-700 hover:bg-white hover:scale-110"
              )}
            >
              <Heart 
                className="w-4 h-4" 
                fill={isLiked ? 'currentColor' : 'none'} 
              />
            </button>
          </div>

          {/* Bottom overlay info */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Eye className="w-4 h-4" />
              <span>{work.like_count || 0} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900 group-hover:text-fluent-blue transition-colors duration-200 line-clamp-1">
          {work.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <User className="w-3 h-3" />
          <span>{work.creator.full_name || work.creator.username}</span>
          {work.year && (
            <>
              <span>•</span>
              <Calendar className="w-3 h-3" />
              <span>{work.year}</span>
            </>
          )}
        </div>
        
        {work.medium_detail && (
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            {work.medium_detail}
          </p>
        )}

        {/* Tags */}
        {work.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {work.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md hover:bg-fluent-blue hover:text-white transition-colors duration-200"
              >
                {tag.name}
              </span>
            ))}
            {work.tags.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-400">
                +{work.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}