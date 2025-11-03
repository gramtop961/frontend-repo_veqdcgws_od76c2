import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // In a real app, send to backend. For now, show success state.
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Get your free quote
            </h2>
            <p className="mt-4 text-slate-600">
              Tell us a bit about your space and preferred schedule. We’ll reply within the hour during business times.
            </p>

            <div className="mt-8 space-y-3">
              <p className="flex items-center gap-2 text-slate-700"><Phone className="h-5 w-5 text-cyan-600" /> +1 (234) 567-890</p>
              <p className="flex items-center gap-2 text-slate-700"><Mail className="h-5 w-5 text-cyan-600" /> hello@shineservice.com</p>
              <p className="flex items-center gap-2 text-slate-700"><MapPin className="h-5 w-5 text-cyan-600" /> 123 Clean Ave, Sparkle City</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {sent ? (
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Thanks! We’ll be in touch shortly.</h3>
                <p className="mt-1 text-slate-600">A team member will reach out to confirm details and provide pricing.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Tell us about your space and preferred timing"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-cyan-600 px-5 py-3 text-white shadow hover:bg-cyan-700 transition"
                >
                  Request quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
