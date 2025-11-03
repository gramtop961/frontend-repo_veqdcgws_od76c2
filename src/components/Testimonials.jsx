import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sofia R.',
    text:
      'They made our apartment look brand new for moving day. Super friendly and incredibly thorough!'
  },
  {
    name: 'James K.',
    text:
      'Booked a recurring clean for our office. Always on time, and the place is spotless every week.'
  },
  {
    name: 'Priya N.',
    text:
      'Love that they use eco products. The deep clean exceeded my expectations — five stars!'
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What customers say
          </h2>
          <p className="mt-4 text-slate-600">
            Real stories from real clients who trust us to keep their spaces shining.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
