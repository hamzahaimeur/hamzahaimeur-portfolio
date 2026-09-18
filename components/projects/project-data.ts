import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  url: string
  color: string
  status?: string
  icon?: LucideIcon
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Velora',
    description: 'A premium halal restaurant website built with HTML, CSS, and JavaScript, focused on elegant presentation and smooth user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://velora-ui.vercel.app',
    color: 'from-accent to-accent/60',
    icon: ArrowUpRight,
  },
  {
    id: 2,
    title: 'Nova Dashboard',
    description: 'A clean, professional admin dashboard template built with React, TypeScript, and Tailwind CSS for SaaS products and internal tools.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://nova-dashboard-brown.vercel.app',
    color: 'from-secondary to-secondary/60',
    icon: ArrowUpRight,
  },
  {
    id: 3,
    title: 'Amana Store',
    description: 'A complete e-commerce storefront template built with Next.js, React, and TypeScript, featuring products, cart functionality, and checkout flow.',
    tech: ['Next.js', 'React', 'TypeScript'],
    url: 'https://amana-store.vercel.app',
    color: 'from-accent to-secondary',
    icon: ArrowUpRight,
  },
  {
    id: 4,
    title: 'hdev-portfolio',
    description: 'A clean professional portfolio website built with HTML, CSS, and JS.',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'https://hdev-portfolio1.vercel.app',
    color: 'from-secondary to-accent',
    icon: ArrowUpRight,
  },
  {
    id: 5,
    title: 'Diyar',
    description: 'A professional real estate listing platform built with Next.js, TypeScript, and Tailwind CSS. Currently in progress.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: '/projects',
    color: 'from-secondary to-accent',
    status: 'In progress',
    icon: ArrowUpRight,
  },
]

export const featuredProjects = projects.slice(0, 3)
export const projectFilters = ['All', 'Landing Page', 'Dashboard', 'E-commerce', 'In Progress'] as const
export type ProjectFilter = (typeof projectFilters)[number]

export const projectFilterMap: Record<ProjectFilter, string[]> = {
  All: ['Velora', 'Nova Dashboard', 'Amana Store', 'hdev-portfolio', 'Diyar'],
  'Landing Page': ['Velora', 'hdev-portfolio'],
  Dashboard: ['Nova Dashboard'],
  'E-commerce': ['Amana Store'],
  'In Progress': ['Diyar'],
}
