'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Home } from 'lucide-react'
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'
import { BackToTop } from '@/components/home/BackToTop'
import { FilterBar, type ProjectFilter } from '@/components/projects/FilterBar'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projectFilters, projectFilterMap, projects } from '@/components/projects/project-data'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650)
    return () => window.clearTimeout(timer)
  }, [])

  const filteredProjects = useMemo(() => {
    const names = projectFilterMap[activeFilter]
    return projects.filter((project) => names.includes(project.title))
  }, [activeFilter])

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <section className="section-spacing pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-foreground/55 transition-colors hover:text-accent"><ArrowLeft size={15} /> Back home</Link>
          <div className="mb-10 max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium text-foreground/45"><Home size={13} /><Link href="/" className="hover:text-accent">Home</Link><span>/</span><span className="text-accent">Projects</span></div>
            <p className="prose-label mb-2 text-accent">Selected Work</p>
            <h1 className="prose-heading text-5xl sm:text-6xl">Projects</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/65 sm:text-lg">A selection of front-end projects showcasing thoughtful interfaces, polished interactions, and practical development craft.</p>
          </div>
          <FilterBar active={activeFilter} onChange={setActiveFilter} filters={projectFilters} />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {isLoading ? Array.from({ length: 4 }).map((_, index) => <div key={index} className="min-h-[360px] animate-pulse rounded-xl border border-border bg-card/60" />) : filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </div>
      </section>
      <section className="section-spacing pt-4">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-xl border border-accent/25 bg-accent/10 p-8 sm:flex-row sm:items-center sm:p-10">
          <div><p className="prose-label mb-2 text-accent">Let&apos;s create</p><h2 className="font-serif text-3xl sm:text-4xl">Have a project in mind?</h2><p className="mt-2 text-sm text-foreground/60">Let&apos;s turn the next good idea into something people love to use.</p></div>
          <a href="mailto:hello@hamza.design" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20">Let&apos;s Talk <ArrowUpRight size={17} /></a>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </main>
  )
}
