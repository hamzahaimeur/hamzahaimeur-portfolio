import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import type { Project } from './project-data'

type ProjectCardProps = {
  project: Project
  index?: number
  compact?: boolean
}

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  const isInternal = project.url.startsWith('/')
  const Icon = project.icon ?? ArrowUpRight

  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 ${compact ? '' : 'min-h-[360px]'}`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.14]`} />
      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="mb-10 flex items-start justify-between">
          <span className="font-mono text-xs text-muted-foreground">0{project.id}</span>
          {project.status ? (
            <span className="rounded-full border border-accent/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
              {project.status}
            </span>
          ) : (
            <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-8">
            {project.tech.map((item) => (
              <span key={item} className="rounded-full border border-border bg-background/50 px-3 py-1 text-[11px] text-muted-foreground">
                {item}
              </span>
            ))}
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
        <div className="pointer-events-none absolute bottom-6 right-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View <ExternalLink className="h-3.5 w-3.5" />
        </div>
      </div>
    </article>
  )
}
