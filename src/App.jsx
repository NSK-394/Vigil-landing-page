import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Marquee       from './components/Marquee'
import Stats         from './components/Stats'
import Problem       from './components/Problem'
import HowItWorks    from './components/HowItWorks'
import Features      from './components/Features'
import Integration   from './components/Integration'
import Testimonials  from './components/Testimonials'
import Pricing       from './components/Pricing'
import Waitlist      from './components/Waitlist'
import Footer        from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Problem />
        <HowItWorks />
        <Features />
        <Integration />
        <Testimonials />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
