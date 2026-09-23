import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from './project-data'
import { ProjectImage } from './ProjectImage'

type ProjectCardProps = {
  project: Project
  index?: number
  compact?: boolean
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isInternal = project.url.startsWith('/')

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <ProjectImage src={project.image} title={project.title} url={project.url} color={project.color} />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">0{project.id}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>

        <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent sm:text-3xl">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full border border-border bg-background/50 px-3 py-1 text-[11px] text-muted-foreground">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-widest text-accent">
          View live project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>

      <Link
        href={project.url}
        target={isInternal ? undefined : '_blank'}
        rel={isInternal ? undefined : 'noreferrer'}
        className="absolute inset-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        aria-label={`View ${project.title} project`}
      >
        <span className="sr-only">View project</span>
      </Link>
    </article>
  )
}
