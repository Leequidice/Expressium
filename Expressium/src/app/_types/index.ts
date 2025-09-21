// Core entity types based on database schema

export interface User {
  id: string;
  username: string;
  email: string;
  full_name?: string;
  bio?: string;
  website?: string;
  role: Role;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

export interface Role {
  id: string;
  name: 'Administrator' | 'Contributor' | 'Curator' | 'Viewer';
  description?: string;
}

export interface Work {
  id: string;
  title: string;
  slug: string;
  description?: string;
  year?: string;
  medium_detail?: string;
  creator: User;
  category: Category;
  tags: Tag[];
  media_assets: MediaAsset[];
  status: 'draft' | 'pending_review' | 'published' | 'rejected';
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  like_count?: number;
}export interface Category {
  id: string;
  name: 'Image' | 'Video' | 'Audio' | 'Text' | '3D';
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface MediaAsset {
  id: string;
  work_id: string;
  asset_type: 'image' | 'video' | 'audio' | 'text_file' | '3d_model' | 'thumbnail';
  url: string;
  width?: number;
  height?: number;
  alt_text?: string;
  is_primary: boolean;
  created_at: string;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description?: string;
  curator?: User;
  works: Work[];
  is_public: boolean;
  created_at: string;
  updated_at: string;
}
