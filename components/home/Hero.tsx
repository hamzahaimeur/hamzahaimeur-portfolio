'use client'

import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12">
      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Logo watermark */}
        <div className="flex justify-center mb-8 opacity-40 hover:opacity-60 transition-opacity">
          <div className="relative w-20 h-20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H-PVM8LfELQ7zPFB2NEV5gzlb036Km00.png"
              alt="Hamza"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-6 mb-12 animate-fade-in-up">
          <h1 className="prose-heading text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-balance">
            Design meets{' '}
            <span className="bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent">
              purpose
            </span>
          </h1>
          
          <p className="prose-label text-accent mb-4">
            HAMZA HAIMEUR — Front End Developer
          </p>
          
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance leading-relaxed">
            I craft digital experiences that are beautiful, intentional, and built to last. Specializing in design systems, web applications, and thoughtful interfaces.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#work"
            className="px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-accent text-accent font-medium rounded-lg hover:bg-accent/5 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-8 animate-float">
          <Link href="#work" className="text-accent hover:text-foreground transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
