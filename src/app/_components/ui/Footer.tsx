'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter } from 'lucide-react'
import Slogan from './Slogan'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Slogan */}
          <Slogan variant="footer" />
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://discord.gg/fluentxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Image 
                src="/discord-icon.svg" 
                alt="Discord" 
                width={20} 
                height={16} 
                className="group-hover:scale-110 transition-transform" 
              />
              Join Discord
            </Link>
            
            <Link
              href="https://x.com/fluentxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Follow Us
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2025 Expressium. All rights reserved.</p>
            <p className="mt-1">A platform where creativity meets community.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}