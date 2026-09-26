import { Resend } from 'resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

// Best-effort in-memory rate limit: max 3 submissions per IP per 10 minutes.
// This resets when the serverless function cold-starts, so it's a deterrent
// against quick repeated spam, not a hard guarantee — fine for a portfolio site.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 3
const submissions = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const timestamps = (submissions.get(ip) ?? []).filter((time) => now - time < WINDOW_MS)
  if (timestamps.length >= MAX_PER_WINDOW) {
    submissions.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  submissions.set(ip, timestamps)
  return false
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  // Honeypot: a hidden field real visitors never fill in. If it has a value,
  // silently pretend success so the bot moves on, without sending an email.
  const honeypot = clean(body?.company, 200)
  if (honeypot) {
    return Response.json({ ok: true })
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (isRateLimited(ip)) {
    return Response.json(
      { error: 'Too many messages sent recently. Please try again in a few minutes.' },
      { status: 429 },
    )
  }

  const name = clean(body?.name, 120)
  const email = clean(body?.email, 254)
  const subject = clean(body?.subject, 160)
  const message = clean(body?.message, 5000)

  if (!name || !subject || !message || !emailPattern.test(email)) {
    return Response.json({ error: 'Please complete every field with a valid email address.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: 'Email delivery is not configured yet.' }, { status: 503 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send(
    {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['hamzahaimeur01@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    },
    { idempotencyKey: `portfolio-contact/${crypto.randomUUID()}` },
  )

  if (error) {
    console.error('[contact] Resend error:', error.message)
    return Response.json({ error: 'Unable to send your message right now.' }, { status: 502 })
  }

  return Response.json({ ok: true, id: data?.id })
}
