'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Heart } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/collections', label: 'Collections' },
    { href: '/artists', label: 'Artists' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-light bg-gradient-to-r from-fluent-blue via-fluent-pink to-fluent-spring bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Expressium
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium relative group transition-colors duration-200 ${
                    isActive 
                      ? 'text-fluent-blue' 
                      : 'text-text-secondary hover:text-fluent-blue'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fluent-blue to-fluent-pink transition-all duration-300 ${
                    isActive 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transition-colors duration-200 ${
                    isActive 
                      ? 'text-fluent-blue font-medium' 
                      : 'text-text-secondary hover:text-fluent-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {isActive && (
                    <div className="w-6 h-0.5 bg-gradient-to-r from-fluent-blue to-fluent-pink mt-1"></div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}