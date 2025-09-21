// Comprehensive mock data for Expressium
import type { Work, User, Category, Tag, Collection, MediaAsset } from '@/_types'

// Mock users/creators
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'flaw_eth',
    email: 'flaw@example.com',
    full_name: 'Flaw',
    bio: 'Hand-drawn artist creating detailed pencil and pen artwork, exploring unified layers and character designs.',
    website: 'https://x.com/Flaw_eth',
    role: { id: '1', name: 'Contributor' },
    created_at: '2023-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    is_active: true,
  },
  {
    id: '2',
    username: 'plain3rd',
    email: 'plain3rd@example.com',
    full_name: 'Plain3rd',
    bio: 'Hand-drawn digital artist creating fluent and dynamic compositions with digital techniques.',
    website: 'https://x.com/plain3rd',
    role: { id: '1', name: 'Contributor' },
    created_at: '2023-03-20T14:00:00Z',
    updated_at: '2024-01-20T14:00:00Z',
    is_active: true,
  },
  {
    id: '3',
    username: 'sage_of_six_paths',
    email: 'sage@example.com',
    full_name: 'Sage of six paths',
    bio: 'Hand-drawn artist specializing in character design and detailed pencil work, creating compelling character studies.',
    website: 'https://x.com/PhilipAkpamgbo',
    role: { id: '1', name: 'Contributor' },
    created_at: '2023-06-10T09:00:00Z',
    updated_at: '2024-01-05T09:00:00Z',
    is_active: true,
  },
]

// Mock categories
export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Image',
    description: 'Contemporary digital artworks and generative pieces',
  },
  {
    id: '2',
    name: 'Video',
    description: 'Artistic photography across various styles and subjects',
  },
]

// Mock tags
export const mockTags: Tag[] = [
  { id: '1', name: 'abstract', slug: 'abstract' },
  { id: '2', name: 'minimal', slug: 'minimal' },
  { id: '3', name: 'geometric', slug: 'geometric' },
  { id: '4', name: 'digital', slug: 'digital' },
  { id: '5', name: 'urban', slug: 'urban' },
  { id: '6', name: 'street', slug: 'street' },
  { id: '7', name: 'architecture', slug: 'architecture' },
  { id: '8', name: 'light', slug: 'light' },
]

// Mock works using local artwork images
export const mockWorks: Work[] = [
  {
    id: '1',
    title: 'Fluent unified layer 2',
    slug: 'fluent-unified-layer-2',
    description: 'A detailed hand-drawn artwork exploring unified layers and complex geometric forms through traditional pencil and pen techniques.',
    year: '2025',
    medium_detail: 'Hand drawn, pencil, pen',
    creator: mockUsers[0],
    category: mockCategories[0],
    tags: [mockTags[0], mockTags[3], mockTags[4]],
    media_assets: [{
      id: '1',
      work_id: '1',
      asset_type: 'image',
      url: '/Flaw.jpg',
      alt_text: 'Fluent unified layer 2 - Hand-drawn artwork with unified layers and geometric forms',
      is_primary: true,
      created_at: '2024-01-10T10:00:00Z'
    }],
    status: 'published',
    is_featured: true,
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z',
    like_count: 24,
  },
  {
    id: '2',
    title: 'PumpPals cards',
    slug: 'pumppals-cards',
    description: 'Hand-drawn character cards featuring detailed pencil and pen work, showcasing character design and artistic storytelling.',
    year: '2025',
    medium_detail: 'Hand drawn, pencil, pen',
    creator: mockUsers[0],
    category: mockCategories[0],
    tags: [mockTags[5], mockTags[6], mockTags[1]],
    media_assets: [{
      id: '2',
      work_id: '2',
      asset_type: 'image',
      url: '/Flaw 2.jpg',
      alt_text: 'PumpPals cards - Hand-drawn character cards with detailed pencil and pen work',
      is_primary: true,
      created_at: '2024-01-12T15:30:00Z'
    }],
    status: 'published',
    is_featured: true,
    created_at: '2024-01-12T15:30:00Z',
    updated_at: '2024-01-12T15:30:00Z',
    like_count: 18,
  },
  {
    id: '3',
    title: 'Fluent dive',
    slug: 'fluent-dive',
    description: 'A dynamic hand-drawn digital composition exploring fluid movement and depth through modern digital techniques.',
    year: '2025',
    medium_detail: 'Hand drawn, digital',
    creator: mockUsers[1],
    category: mockCategories[1],
    tags: [mockTags[2], mockTags[3], mockTags[7]],
    media_assets: [{
      id: '3',
      work_id: '3',
      asset_type: 'image',
      url: '/Plain3rd.jpg',
      alt_text: 'Fluent dive - Hand-drawn digital composition with dynamic movement and depth',
      is_primary: true,
      created_at: '2024-01-15T09:15:00Z'
    }],
    status: 'published',
    is_featured: true,
    created_at: '2024-01-15T09:15:00Z',
    updated_at: '2024-01-15T09:15:00Z',
    like_count: 32,
  },
  {
    id: '4',
    title: 'Batman who laughs needs feedback',
    slug: 'batman-who-laughs-needs-feedback',
    description: 'A detailed character study of Batman who laughs, showcasing intricate pencil and pen work with compelling character design.',
    year: '2025',
    medium_detail: 'Hand drawn, pencil, pen',
    creator: mockUsers[2],
    category: mockCategories[0],
    tags: [mockTags[4], mockTags[6], mockTags[0]],
    media_assets: [{
      id: '4',
      work_id: '4',
      asset_type: 'image',
      url: '/Sage.jpg',
      alt_text: 'Batman who laughs needs feedback - Detailed character study with intricate pencil and pen work',
      is_primary: true,
      created_at: '2024-01-20T18:00:00Z'
    }],
    status: 'published',
    is_featured: true,
    created_at: '2024-01-20T18:00:00Z',
    updated_at: '2024-01-20T18:00:00Z',
    like_count: 15,
  },
  {
    id: '5',
    title: 'Digital Genesis',
    slug: 'digital-genesis',
    description: 'A conceptual artwork exploring the birth of digital consciousness through abstract forms and flowing compositions.',
    year: '2025',
    medium_detail: 'Digital art, conceptual design',
    creator: mockUsers[1],
    category: mockCategories[0],
    tags: [mockTags[0], mockTags[3], mockTags[4]],
    media_assets: [{
      id: '5',
      work_id: '5',
      asset_type: 'image',
      url: '/Plain3rd.jpg',
      alt_text: 'Digital Genesis - Conceptual artwork exploring digital consciousness',
      is_primary: true,
      created_at: '2024-01-25T12:00:00Z'
    }],
    status: 'published',
    is_featured: false,
    created_at: '2024-01-25T12:00:00Z',
    updated_at: '2024-01-25T12:00:00Z',
    like_count: 28,
  }
];

// Mock collections
export const mockCollections: Collection[] = [
  {
    id: '1',
    title: 'Digital Expressions',
    slug: 'digital-expressions',
    description: 'A curated collection of contemporary digital artworks exploring modern themes',
    curator: mockUsers[0],
    works: [mockWorks[0], mockWorks[3]],
    is_public: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
  },
  {
    id: '2',
    title: 'Minimalist Studies',
    slug: 'minimalist-studies',
    description: 'Clean, simple compositions that find beauty in restraint',
    curator: mockUsers[2],
    works: [mockWorks[2]],
    is_public: true,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
]