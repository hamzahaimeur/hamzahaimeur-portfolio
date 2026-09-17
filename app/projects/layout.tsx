import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — HAMZA HAIMEUR',
  description: 'A selection of front-end development projects by HAMZA HAIMEUR.',
}

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
