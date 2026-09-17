import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'

export function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl border border-accent/30 bg-accent/10 p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="prose-label text-accent">Have a project in mind?</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-normal tracking-tight sm:text-5xl">Let&apos;s make something useful.</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">I&apos;m open to thoughtful front-end work, collaborations, and ideas worth building.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <Mail className="h-4 w-4" />
            Get in touch
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            See my work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
