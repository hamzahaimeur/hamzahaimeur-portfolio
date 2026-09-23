export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  url: string
  /** Screenshot of the project — put the PNG in /public/projects/ */
  image: string
  color: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Velora',
    description: 'A premium halal restaurant website built with HTML, CSS, and JavaScript, focused on elegant presentation and smooth user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://velora-ui.vercel.app',
    image: '/velora.png',
    color: 'from-accent to-accent/60',
  },
  {
    id: 2,
    title: 'Nova Dashboard',
    description: 'A clean, professional admin dashboard template built with React, TypeScript, and Tailwind CSS for SaaS products and internal tools.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://nova-dashboard-brown.vercel.app',
    image: '/nova-dashboard.png',
    color: 'from-secondary to-secondary/60',
  },
  {
    id: 3,
    title: 'Amana Store',
    description: 'A complete e-commerce storefront template built with Next.js, React, and TypeScript, featuring products, cart functionality, and checkout flow.',
    tech: ['Next.js', 'React', 'TypeScript'],
    url: 'https://amana-store.vercel.app',
    image: '/amana-store.png',
    color: 'from-accent to-secondary',
  },
  {
    id: 4,
    title: 'hdev-portfolio',
    description: 'A clean professional portfolio website built with HTML, CSS, and JS.',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'https://hdev-portfolio1.vercel.app',
    image: '/projects/hdev-portfolio.png',
    color: 'from-secondary to-accent',
  },
  {
    id: 5,
    title: 'Diyar',
    description: 'A professional real estate listing website built with Next.js, TypeScript, and Tailwind CSS, featuring property search, filters, saved listings, and detail pages.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: 'https://diyar-real-estate1.vercel.app/',
    image: '/diyar-real-estate.png',
    color: 'from-secondary to-accent',
  },
]

export const featuredProjects = projects.slice(0, 3)
export const projectFilters = ['All', 'Landing Page', 'Dashboard', 'E-commerce', 'Real Estate'] as const
export type ProjectFilter = (typeof projectFilters)[number]

export const projectFilterMap: Record<ProjectFilter, string[]> = {
  All: ['Velora', 'Nova Dashboard', 'Amana Store', 'hdev-portfolio', 'Diyar'],
  'Landing Page': ['Velora', 'hdev-portfolio'],
  Dashboard: ['Nova Dashboard'],
  'E-commerce': ['Amana Store'],
  'Real Estate': ['Diyar'],
}
