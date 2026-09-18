'use client'

export function TechStack() {
  const technologies = [
    { name: 'React', icon: 'R' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Next.js', icon: 'N' },
    { name: 'Tailwind CSS', icon: 'TW' },
    { name: 'Figma', icon: 'F' },
    { name: 'Node.js', icon: 'JS' },
    { name: 'Vercel', icon: 'V' },
  ]

  return (
    <section id="skills" className="section-spacing bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="prose-label text-accent mb-2">Tech Stack</p>
          <h2 className="prose-subheading">Tools & Technologies</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border hover:border-accent hover:bg-background/50 transition-all duration-300 group glow-gold-hover"
            >
              <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-sm font-medium text-center text-foreground/80 group-hover:text-accent transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
