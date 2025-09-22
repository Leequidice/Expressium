'use client'

import React from 'react'

interface SloganProps {
  variant?: 'footer' | 'subtle' | 'hero'
  className?: string
}

export default function Slogan({ variant = 'subtle', className = '' }: SloganProps) {
  const variants = {
    footer: 'inline-flex items-center px-6 py-2 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-lg text-sm italic hover:shadow-lg transition-all duration-300',
    subtle: 'inline-flex items-center px-4 py-1 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-md text-xs italic opacity-80 hover:opacity-100 transition-all duration-300',
    hero: 'inline-flex items-center px-8 py-3 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-xl text-lg italic hover:shadow-lg transform hover:scale-105 transition-all duration-300'
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      let art be art
    </div>
  )
}