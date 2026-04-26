import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="square">
        <path d="M2 9h14M9 2l4 7-4 7M5 4l-2 5 2 5"/>
      </svg>
    ),
    name: 'CONFIDENCE-WEIGHTED FUSION',
    desc: 'Multiple signals (velocity, entropy, pattern-match) fused with learned confidence weights into a single trustable score. No arbitrary thresholds to guess.',
  },
  {
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="2" width="6" height="6"/><rect x="10" y="2" width="6" height="6"/>
        <rect x="2" y="10" width="6" height="6"/>
        <path d="M13 10v2m0 2v2M11 13h2m2 0h2"/>
      </svg>
    ),
    name: 'PER-KEY BEHAVIORAL MEMORY',
    desc: 'Every API key builds its own behavioral baseline over time. Anomalies are measured against individual history — not a global average that masks real attacks.',
  },
  {
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="square">
        <path d="M2 4h14M2 9h10M2 14h6"/>
        <circle cx="14" cy="12" r="3"/><path d="M14 11v1l1 1"/>
      </svg>
    ),
    name: 'EXPLAINABLE DECISIONS',
    desc: 'Every block, flag, or pass includes a human-readable reasoning string. Full audit trail — you always know exactly why a decision was made, guaranteed.',
  },
  {
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="square">
        <path d="M9 2v14M5 6l4-4 4 4"/>
        <path d="M3 10c0 3 2 5 6 5s6-2 6-5"/>
      </svg>
    ),
    name: 'AUTO-ESCALATION ON REPEATS',
    desc: 'Persistent offender memory escalates threats faster on every re-occurrence. Block thresholds drop automatically — adaptive defense, not static rule decay.',
  },
  {
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="4" width="14" height="10"/>
        <path d="M6 4V2M12 4V2M5 9h8M5 12h5"/>
      </svg>
    ),
    name: 'FASTAPI + EXPRESS MIDDLEWARE',
    desc: 'Drop-in async middleware for Python and Node. Add full autonomous threat detection to any existing API in under 60 seconds — zero route rewrites.',
  },
  {
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="#00e676" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="2" width="14" height="14"/>
        <path d="M2 7h14M6 2v14M10 10h4M10 13h3"/>
      </svg>
    ),
    name: 'LIVE SOC DASHBOARD',
    desc: 'Real-time threat feed, per-key analytics, verdict history, and incident timeline. Your security operations center — in a single browser tab, no setup.',
  },
]

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="s-label">// capabilities</span>
          <h2 className="s-title">EVERYTHING YOUR<br />API NEEDS TO STAY SAFE</h2>
        </motion.div>

        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.name}
              className="feat-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-name">{f.name}</div>
              <div className="feat-desc">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
