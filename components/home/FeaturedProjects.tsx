import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '@/components/projects/project-data'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function FeaturedProjects() {
  return (
    <section id="work" className="border-y border-border bg-background px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="prose-label text-accent">Selected work</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-normal tracking-tight sm:text-5xl">A few things I&apos;ve built.</h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
