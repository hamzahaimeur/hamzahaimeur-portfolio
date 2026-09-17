'use client'

import type { ProjectFilter } from './project-data'

export function FilterBar({ active, onChange, filters }: { active: ProjectFilter; onChange: (filter: ProjectFilter) => void; filters: readonly ProjectFilter[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-1 sm:mx-0 sm:px-0">
      <div className="flex min-w-max gap-2 rounded-lg border border-border bg-card/60 p-1">
        {filters.map((filter) => (
          <button key={filter} type="button" onClick={() => onChange(filter)} className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${active === filter ? 'bg-accent text-accent-foreground shadow-sm' : 'text-foreground/60 hover:bg-muted hover:text-foreground'}`} aria-pressed={active === filter}>
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}
