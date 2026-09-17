export type SkillCategory = {
  eyebrow: string
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    eyebrow: '01 / Core',
    title: 'Front end foundations',
    description: 'The tools I use to turn clear ideas into accessible, responsive interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    eyebrow: '02 / Interface',
    title: 'UI and interaction',
    description: 'A practical visual toolkit for thoughtful layouts, reusable systems, and polished details.',
    skills: ['Tailwind CSS', 'Responsive Design', 'Accessibility', 'Figma', 'Design Systems', 'Motion'],
  },
  {
    eyebrow: '03 / Workflow',
    title: 'Building and shipping',
    description: 'The workflow around the interface: collaboration, iteration, and reliable delivery.',
    skills: ['Git', 'GitHub', 'REST APIs', 'Vercel', 'VS Code', 'Component Architecture'],
  },
]

export const skillMarquee = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma']
