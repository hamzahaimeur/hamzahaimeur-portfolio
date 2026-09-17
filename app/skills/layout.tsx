import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills — HAMZA HAIMEUR',
  description: 'The front-end technologies and design practices used by HAMZA HAIMEUR.',
}

export default function SkillsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
