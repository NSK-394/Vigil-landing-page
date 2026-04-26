import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    initials: 'AR',
    name: 'Arun R.',
    role: 'SOLO SAAS FOUNDER · CHENNAI',
    quote: 'Caught a scraper pulling all our pricing data that was costing us $400/month in extra compute. Vigil flagged it on day one and auto-blocked. We would have never noticed without it.',
  },
  {
    initials: 'SK',
    name: 'Shreya K.',
    role: 'BACKEND ENGINEER · BANGALORE',
    quote: 'The explainability is what sold me. Every block comes with a reasoning string — I can actually read why the agent made the call. No other tool does this at this price point.',
  },
  {
    initials: 'PM',
    name: 'Priya M.',
    role: 'CTO · EARLY-STAGE STARTUP',
    quote: 'Deployed into our FastAPI app in literally 3 minutes. The behavioral memory meant it was already adapting to our traffic patterns within the first hour. Impressive for an open-source tool.',
  },
]

export default function Testimonials() {
  return (
    <section className="testi-section" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="s-label">// early feedback</span>
          <h2 className="s-title">WHAT FOUNDERS<br />ARE SAYING</h2>
        </motion.div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="testi-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="testi-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span className="star" key={s}>★</span>
                ))}
              </div>
              <div className="testi-quote">{t.quote}</div>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
