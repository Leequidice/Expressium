'use client'

import Navigation from '../_components/layout/Navigation'
import Breadcrumb from '../_components/ui/Breadcrumb'
import Footer from '../_components/ui/Footer'
import { Palette, Users, Sparkles, Heart, Globe, Shield } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const principles = [
    {
      icon: Palette,
      title: 'Curated Excellence',
      description: 'Every piece is carefully reviewed to maintain the highest artistic standards and create meaningful collections that inspire and educate.',
    },
    {
      icon: Users,
      title: 'Artist-Focused',
      description: 'Our platform puts creators first, providing them with the tools and exposure they need without algorithmic interference or social media noise.',
    },
    {
      icon: Sparkles,
      title: 'Minimal Design',
      description: 'Clean, distraction-free interface that lets the artwork speak for itself, creating a gallery-like experience online.',
    },
    {
      icon: Heart,
      title: 'Community-Driven',
      description: 'Built by and for the creative community, with features that foster genuine appreciation and meaningful connections between artists and audiences.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting artists and art lovers from around the world in a single, unified platform that celebrates diverse perspectives and creative expression.',
    },
    {
      icon: Shield,
      title: 'Respectful Environment',
      description: 'Maintaining a safe, respectful space where artists can share their work without fear of harassment or inappropriate behavior.',
    },
  ]

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-light bg-gradient-to-r from-fluent-blue via-fluent-pink to-fluent-spring bg-clip-text text-transparent mb-6">
            About Expressium
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Expressium is the gallery where the Fluent community gathers to showcase and celebrate creativity. Built with a minimalist approach, it offers a clean, distraction-free space where projects, art, and ideas flow together — allowing expressivity to shine in its purest form.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-fluent-blue/5 via-fluent-pink/5 to-fluent-spring/5 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to create the most thoughtful and intentional platform for 
              discovering and appreciating the creativity within the Fluent network. While 
              social media platforms chase engagement and portfolio sites emphasize self-promotion, 
              Expressium exists to spotlight the collective artistry of the Fluent community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every design decision, feature, and policy is guided by a simple 
              principle: does this serve the art, the artist, and the community that powers Fluent? 
              If the answer is no, we don't do it.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              What We Believe In
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-fluent-blue to-fluent-pink rounded-lg flex items-center justify-center">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-fluent-blue/5 via-fluent-pink/5 to-fluent-spring/5 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're an artist looking for a platform that respects your work, 
            or an art lover seeking quality over quantity, you belong here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-fluent-blue to-fluent-pink text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore Gallery
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-fluent-blue hover:text-fluent-blue transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}