'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(data?.error || 'Unable to send your message right now. Please try again.')
        return
      }

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setErrorMessage('Unable to send your message right now. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="px-6 pb-24 pt-36 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>

          <div className="mt-12 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="prose-label text-accent">Let&apos;s connect</p>
              <h1 className="mt-4 max-w-xl font-serif text-5xl font-normal tracking-tight sm:text-6xl">Have a project in mind?</h1>
              <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">Tell me a little about what you&apos;re building, what you need help with, and where you&apos;d like to take it.</p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Name
                  <input required name="name" value={form.name} onChange={(event) => updateField('name', event.target.value)} className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Email
                  <input required type="email" name="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30" placeholder="you@example.com" />
                </label>
              </div>
              <label className="mt-6 grid gap-2 text-sm font-medium">
                Subject
                <input required name="subject" value={form.subject} onChange={(event) => updateField('subject', event.target.value)} className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30" placeholder="What can I help with?" />
              </label>
              <label className="mt-6 grid gap-2 text-sm font-medium">
                Message
                <textarea required name="message" rows={7} value={form.message} onChange={(event) => updateField('message', event.target.value)} className="resize-y rounded-md border border-border bg-background px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30" placeholder="Tell me about your project..." />
              </label>

              {status === 'success' && <p role="status" className="mt-5 flex items-center gap-2 text-sm text-accent"><CheckCircle2 className="h-4 w-4" />Message sent. I&apos;ll get back to you soon.</p>}
              {status === 'error' && <p role="alert" className="mt-5 text-sm text-destructive">{errorMessage}</p>}

              <button type="submit" disabled={status === 'sending'} className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" />Sending...</> : <>Send message <ArrowUpRight className="h-4 w-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
