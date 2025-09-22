import React from "react";
import Image from "next/image";
import { cn } from "../../_lib/utils";
import type { Work, Tag } from "../../_types/index";

// Placeholder SVGs for icons
const UserIcon = () => <span role="img" aria-label="user">👤</span>;
const CalendarIcon = () => <span role="img" aria-label="calendar">📅</span>;
const TagIcon = () => <span role="img" aria-label="tag">🏷️</span>;
const HeartIcon = ({ filled }: { filled: boolean }) => (
  <span role="img" aria-label="heart">{filled ? "❤️" : "🤍"}</span>
);
const ShareIcon = () => <span role="img" aria-label="share">🔗</span>;
const XIcon = () => <span role="img" aria-label="close">❌</span>;

export interface LightboxModalProps {
  work: Work;
  works: Work[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function LightboxModal({ work, works, currentIndex, onClose, onPrevious, onNext }: LightboxModalProps) {
  if (!work) return null;
  
  const [showMetadata, setShowMetadata] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(false);
  
  const primaryAsset = work.media_assets.find(asset => asset.is_primary);
  const imageUrl = primaryAsset?.url || '/placeholder-artwork.jpg';
  const altText = primaryAsset?.alt_text || work.title;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-hidden" onClick={onClose}>
      {/* Content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start gap-4 lg:gap-8 max-w-7xl mx-auto p-4 lg:p-6 h-full max-h-[100vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 lg:top-4 lg:right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <XIcon />
        </button>
        
        {/* Navigation buttons */}
        {works.length > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              ←
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              →
            </button>
          </>
        )}
        
        {/* Main image */}
        <div className="flex-1 flex items-center justify-center h-1/2 lg:h-full overflow-auto w-full">
          <div className="relative w-full h-full flex items-center justify-center p-2 lg:p-4">
            <Image
              src={imageUrl}
              alt={altText}
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%',
                width: 'auto',
                height: 'auto'
              }}
              priority
            />
          </div>
        </div>

        {/* Metadata panel */}
        <div className={cn(
          "w-full lg:w-96 bg-white rounded-xl shadow-2xl h-1/2 lg:h-full max-h-[50vh] lg:max-h-[90vh] flex flex-col transition-transform duration-300",
          !showMetadata && "lg:translate-x-full"
        )}>
          <div className="p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto flex-1">
            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-2xl font-light text-gray-900">{work.title}</h2>
              <div className="flex items-center gap-2 text-gray-600">
                <UserIcon />
                <span>{work.creator.full_name || work.creator.username}</span>
                {work.year && (
                  <>
                    <span>•</span>
                    <CalendarIcon />
                    <span>{work.year}</span>
                  </>
                )}
              </div>
              {work.medium_detail && (
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {work.medium_detail}
                </p>
              )}
            </div>

            {/* Description */}
            {work.description && (
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">About this work</h3>
                <p className="text-gray-700 leading-relaxed">{work.description}</p>
              </div>
            )}

            {/* Tags */}
            {work.tags.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TagIcon />
                  <h3 className="font-medium text-gray-900">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 bg-gradient-to-r from-fluent-blue/10 to-fluent-pink/10 text-fluent-blue text-sm rounded-full border border-fluent-blue/20"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                    isLiked 
                      ? "bg-red-50 text-red-600" 
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <HeartIcon filled={isLiked} />
                  <span className="text-sm">{(work.like_count || 0) + (isLiked ? 1 : 0)}</span>
                </button>
                
                <button className="flex items-center gap-2 text-gray-600 hover:text-fluent-blue transition-colors">
                  <ShareIcon />
                  <span className="text-sm">Share</span>
                </button>
              </div>

              <div className="text-xs text-gray-400">
                {currentIndex + 1} of {works.length}
              </div>
            </div>

            {/* Creator info */}
            {work.creator.bio && (
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-gray-900">About the artist</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {work.creator.bio}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Toggle metadata button on mobile */}
        <button
          onClick={() => setShowMetadata(!showMetadata)}
          className="lg:hidden fixed bottom-4 right-4 p-3 rounded-full bg-white shadow-lg text-gray-700 z-30"
        >
          {showMetadata ? <XIcon /> : <TagIcon />}
        </button>
      </div>
    </div>
  );
}

export default LightboxModal;