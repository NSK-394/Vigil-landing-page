import { motion } from 'framer-motion'
import { useCounter } from '../hooks/useCounter'

function StatCard({ num, prefix = '', suffix, label, sub, delay }) {
  const [ref, value] = useCounter(num)

  return (
    <motion.div
      className="stat-card"
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stat-num">
        {prefix}{value}<span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </motion.div>
  )
}

const STATS = [
  { num: 97,  suffix: '%',      label: 'Detection Accuracy',  sub: 'Across scraping, brute-force, and velocity attacks',  delay: 0    },
  { num: 50,  suffix: 'ms',     label: 'Avg Verdict Latency', sub: 'Full 4-agent loop, async — never blocks your API',    delay: 0.08 },
  { num: 3,   suffix: ' lines', label: 'To Integrate',        sub: 'Drop-in middleware for FastAPI and Express',           delay: 0.16 },
  { num: 0,   suffix: ' $',     label: 'To Start',            sub: 'Full source on GitHub. Self-host forever for free',   delay: 0.24 },
]

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
