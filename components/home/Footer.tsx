'use client'

import Link from 'next/link'
function GithubIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" /></svg>
}

function LinkedinIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4.9v15H.5V8Zm7.9 0H13v2.05h.07c.56-1.07 1.93-2.2 3.98-2.2 4.26 0 5.05 2.8 5.05 6.44V23h-4.9v-7.72c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V23H8.4V8Z" /></svg>
}

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/hamzahaimeur', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hamzahaimeur', icon: LinkedinIcon },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="section-spacing bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-sm overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H-PVM8LfELQ7zPFB2NEV5gzlb036Km00.png"
                  alt="Hamza"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-serif font-semibold">HAMZA HAIMEUR</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Crafting thoughtful digital experiences with design and code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="prose-label text-accent">Quick Links</p>
            <nav className="space-y-2">
              {[
                { label: 'Work', href: '#work' },
                { label: 'Projects', href: '/projects' },
                { label: 'Skills', href: '/skills' },
                { label: 'Stats', href: '#stats' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <p className="prose-label text-accent">Get in Touch</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon size={20} className="text-foreground/70 hover:text-accent transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-foreground/60 gap-4">
          <p>© {currentYear} HAMZA HAIMEUR. All rights reserved.</p>
          <p className="text-center sm:text-right">Front End Developer</p>
        </div>
      </div>
    </footer>
  )
}
