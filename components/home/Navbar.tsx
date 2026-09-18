'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download, Mail, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { useActiveSection } from './BackToTop'

const navLinks = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'Work', href: '/projects', id: 'work' },
  { label: 'Skills', href: '/skills', id: 'skills' },
  { label: 'Stats', href: '/#stats', id: 'stats' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const activeSection = useActiveSection()
  const isProjectsPage = pathname === '/projects'
  const isSkillsPage = pathname === '/skills'
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b border-border bg-background/90 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link href="/" onClick={closeMenu} className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <span className="relative h-8 w-8 overflow-hidden rounded-sm">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H-PVM8LfELQ7zPFB2NEV5gzlb036Km00.png" alt="Hamza" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="font-serif text-base font-semibold tracking-[0.24em]">HAMZA</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = (isHomePage && link.id === 'home') || (isProjectsPage && link.id === 'work') || (isSkillsPage && link.id === 'skills') || (isHomePage && link.id !== 'home' && activeSection === link.id)
            return (
              <Link key={link.href} href={link.href} className={`text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${active ? 'text-accent' : 'text-foreground/65 hover:text-foreground'}`}>
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <a href="/contact" className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:flex">
            <Mail size={15} /> Get In Touch
          </a>
          <a href="/cv.pdf" download className="hidden items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:flex">
            <Download size={15} /> CV
          </a>
          <ThemeToggle />
          <button type="button" onClick={() => setIsOpen((open) => !open)} className="rounded-md p-2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-border bg-background px-6 pb-5 pt-2 shadow-lg md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = (isHomePage && link.id === 'home') || (isProjectsPage && link.id === 'work') || (isSkillsPage && link.id === 'skills') || (isHomePage && link.id !== 'home' && activeSection === link.id)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors ${active ? 'bg-accent/10 text-accent' : 'text-foreground/75 hover:bg-muted hover:text-foreground'}`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a href="/#contact" onClick={closeMenu} className="flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-accent"><Mail size={15} /> Get In Touch</a>
            <a href="/cv.pdf" download className="flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-foreground/75"><Download size={15} /> Download CV</a>
          </div>
        </div>
      )}
    </nav>
  )
}
