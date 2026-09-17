import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — HAMZA HAIMEUR',
  description: 'Get in touch with HAMZA HAIMEUR about a front-end project or collaboration.',
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
