export function Stats() {
  const stats = [
    {
      number: 'Almost 1',
      label: 'Year of Experience',
      description: 'Designing and building responsive digital experiences',
    },
    {
      number: '6',
      label: 'Projects Completed',
      description: 'From polished interfaces to full front-end builds',
    },
  ]

  return (
    <section id="stats" className="border-y border-border bg-card/30 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="prose-label mb-4 text-accent">The journey</p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-6xl">Small details. <span className="text-accent">Steady progress.</span></h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/60">
              I am early in my career and intentional about every build: learning through real projects, sharpening my front-end craft, and creating interfaces that feel useful from the first interaction.
            </p>
            <div className="mt-8 h-px w-full bg-border" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-foreground/40">A growing practice in design and development</p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <div className="font-serif text-5xl tracking-tight text-accent sm:text-6xl">{stat.number}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-widest">{stat.label}</div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground/50">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
