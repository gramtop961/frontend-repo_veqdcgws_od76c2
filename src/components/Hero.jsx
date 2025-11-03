import { Sparkles, Phone } from 'lucide-react'

export default function Hero() {
  const handleCall = () => {
    window.location.href = 'tel:+1234567890'
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-cyan-700 mb-5">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted local cleaners</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              ShineService
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Cleaning that sparkles.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Professional home and office cleaning across your city. Eco-friendly products, vetted pros, and a 100% satisfaction promise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-5 py-3 text-white shadow hover:bg-cyan-700 transition"
              >
                Get a free quote
              </a>
              <button
                onClick={handleCall}
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4" /> Call us
              </button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <dt className="text-sm text-slate-500">Happy clients</dt>
                <dd className="text-2xl font-semibold text-slate-900">2,500+</dd>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <dt className="text-sm text-slate-500">Average rating</dt>
                <dd className="text-2xl font-semibold text-slate-900">4.9/5</dd>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <dt className="text-sm text-slate-500">Cities served</dt>
                <dd className="text-2xl font-semibold text-slate-900">12</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-100">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-cyan-500/10 via-cyan-600/10 to-blue-600/10 backdrop-blur flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
                  alt="Cleaning in progress"
                  className="h-full w-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
