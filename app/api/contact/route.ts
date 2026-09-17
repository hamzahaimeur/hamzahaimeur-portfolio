import { Resend } from 'resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
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
      to: ['hello@hamza.design'],
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
