'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbItems(pathname)

  if (breadcrumbItems.length <= 1) {
    return null // Don't show breadcrumb for home page only
  }

  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500 mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          )}
          
          {index === 0 && (
            <Home className="w-4 h-4 mr-1" />
          )}
          
          {index === breadcrumbItems.length - 1 ? (
            // Current page - not clickable
            <span className="text-fluent-blue font-medium">
              {item.label}
            </span>
          ) : (
            // Clickable breadcrumb links
            <Link
              href={item.href}
              className="hover:text-fluent-blue transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

function generateBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]

  if (pathname === '/') {
    return items
  }

  const pathSegments = pathname.split('/').filter(Boolean)
  
  pathSegments.forEach((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const label = formatSegmentLabel(segment)
    items.push({ label, href })
  })

  return items
}

function formatSegmentLabel(segment: string): string {
  // Convert URL segments to readable labels
  const labelMap: Record<string, string> = {
    'gallery': 'Gallery',
    'collections': 'Collections',
    'artists': 'Artists',
    'about': 'About',
    'contact': 'Contact'
  }
  
  return labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
}