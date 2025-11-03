import { Home, Shield, Clock, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Home Cleaning',
    description:
      'Thorough top-to-bottom cleaning for apartments, condos, and houses. One-time or recurring.'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'Detailed attention in kitchens, bathrooms, and hard-to-reach areas. Perfect for move-ins/outs.'
  },
  {
    icon: Shield,
    title: 'Office & Commercial',
    description:
      'Reliable, discreet, and flexible schedules to keep your workplace spotless and welcoming.'
  },
  {
    icon: Clock,
    title: 'On Your Schedule',
    description:
      'Weekly, bi-weekly, monthly, or a one-off clean. We work around your life, not the other way around.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Services that fit your life
          </h2>
          <p className="mt-4 text-slate-600">
            We bring eco-friendly products, pro-grade tools, and friendly service to every job.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
