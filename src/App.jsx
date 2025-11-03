import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-semibold">
            <span className="inline-block rounded-md bg-cyan-600 px-2 py-1 text-white">Shine</span>
            <span className="text-slate-800">Service</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#services" className="hover:text-cyan-700">Services</a>
            <a href="#contact" className="hover:text-cyan-700">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-700 sm:inline-block"
          >
            Get a quote
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <ContactSection />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ShineService. All rights reserved.</p>
          <p className="text-slate-500">Eco-friendly. Fully insured. Satisfaction guaranteed.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
