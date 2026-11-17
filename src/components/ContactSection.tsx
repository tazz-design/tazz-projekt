import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      message: String(data.get('message') ?? ''),
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-char-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Book Your Event
            </h2>
            <p className="mt-4 max-w-md text-zinc-400">
              Tell me about your event: date, venue, and what you have in mind, and I'll get
              back to you with availability and permit guidance if you need it.
            </p>

            <div className="mt-8 space-y-3 text-zinc-300">
              <p>
                <span className="font-heading font-semibold text-white">Phone: </span>
                <a href="tel:+16822461060" className="hover:text-ember-400">
                  (682) 246-1060
                </a>
              </p>
              <p>
                <span className="font-heading font-semibold text-white">Email: </span>
                <a href="mailto:tazzfire.ent@gmail.com" className="hover:text-ember-400">
                  tazzfire.ent@gmail.com
                </a>
              </p>
              <p>
                <span className="font-heading font-semibold text-white">Based in: </span>
                Austin, TX, touring Central Texas
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-white/15 bg-char-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-ember-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-white/15 bg-char-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-ember-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
                Phone <span className="text-zinc-500">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-md border border-white/15 bg-char-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-ember-500 focus:outline-none"
                placeholder="(555) 555-5555"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                Event details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-md border border-white/15 bg-char-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-ember-500 focus:outline-none"
                placeholder="Event date, venue, and what you're looking for"
              />
            </div>

            <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-ember-400">
                Thanks, your message is in. I'll follow up shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-flame-500">
                Something went wrong. Please email tazzfire.ent@gmail.com directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
