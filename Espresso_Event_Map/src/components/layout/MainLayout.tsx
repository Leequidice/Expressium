import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-espresso-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
