'use client'

import Link from 'next/link'
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/home/Footer'
import { Navbar } from '@/components/home/Navbar'
import { BackToTop } from '@/components/home/BackToTop'
import { skillCategories, skillMarquee } from '@/components/skills/skills-data'

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <section className="px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-foreground/55 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="prose-label mb-5 text-accent">The toolkit</p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                Skills that make <span className="text-accent">interfaces</span> feel clear.
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-md text-lg leading-relaxed text-foreground/60">
                A focused set of front-end technologies and design practices I use to create responsive, considered digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-card/30 py-5">
        <div className="flex min-w-max animate-[marquee_28s_linear_infinite] items-center gap-8 px-6 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/50">
          {[...skillMarquee, ...skillMarquee].map((skill, index) => (
            <span key={`${skill}-${index}`} className="flex items-center gap-8">
              {skill}<span className="text-accent">+</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="prose-label mb-3 text-accent">Capabilities</p>
              <h2 className="prose-heading">Built around the work.</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-foreground/50 sm:block">
              No arbitrary rankings. Just the tools and practices I reach for most often.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <article key={category.title} className="group border border-border bg-card p-6 transition-colors hover:border-accent/50 sm:p-8">
                <div className="mb-14 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <span>{category.eyebrow}</span>
                  <ArrowDownRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </div>
                <h3 className="font-serif text-3xl tracking-tight">{category.title}</h3>
                <p className="mt-4 min-h-20 text-sm leading-relaxed text-foreground/55">{category.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="border border-border px-3 py-2 text-xs text-foreground/70 transition-colors group-hover:border-accent/30">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-px w-full bg-border" />
                <p className="mt-4 text-xs uppercase tracking-widest text-foreground/35">{String(index + 1).padStart(2, '0')} / category</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="prose-label mb-4 text-accent">Next step</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">Have a project that needs a thoughtful front end?</h2>
          </div>
          <Link href="/#contact" className="group inline-flex items-center gap-3 self-start border-b border-accent pb-2 text-sm font-semibold uppercase tracking-widest text-accent transition-colors hover:text-foreground lg:self-end">
            Let&apos;s talk <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
