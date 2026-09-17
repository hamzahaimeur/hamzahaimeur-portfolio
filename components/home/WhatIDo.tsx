import { Code2, LayoutPanelTop, Sparkles } from 'lucide-react'

const services = [
  {
    icon: LayoutPanelTop,
    title: 'Responsive interfaces',
    description: 'Clean layouts that feel considered on every screen size.',
  },
  {
    icon: Code2,
    title: 'Front-end builds',
    description: 'Fast, accessible experiences built with modern tools.',
  },
  {
    icon: Sparkles,
    title: 'Product polish',
    description: 'Small details that make a digital product feel finished.',
  },
]

export function WhatIDo() {
  return (
    <section id="skills" className="border-y border-border bg-card/30 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="prose-label text-accent">What I do</p>
          <h2 className="mt-4 max-w-md font-serif text-4xl font-normal tracking-tight sm:text-5xl">Useful, thoughtful, and built to last.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-background p-6 transition-colors hover:bg-card sm:p-7">
              <Icon className="h-5 w-5 text-accent" />
              <h3 className="mt-10 font-serif text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
