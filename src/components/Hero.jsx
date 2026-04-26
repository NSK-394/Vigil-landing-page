import { motion } from 'framer-motion'
import Terminal from './Terminal'

const EASE = [0.22, 1, 0.36, 1]

// Split headline into lines of words for per-word reveal
const HEADLINE = [
  ['STOP', 'API', { text: 'ATTACKS', glitch: true }],
  [{ text: 'BEFORE', gradient: true }, { text: 'THEY', gradient: true }],
  ['HAPPEN'],
]

function Word({ item, index }) {
  const text = typeof item === 'string' ? item : item.text

  const inner = (
    <motion.span
      style={{ display: 'inline-block' }}
      initial={{ y: '115%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.85, delay: 0.3 + index * 0.065, ease: EASE }}
    >
      {item.glitch ? (
        <span className="glitch" data-text={text}>{text}</span>
      ) : item.gradient ? (
        <span className="g-text">{text}</span>
      ) : (
        text
      )}
    </motion.span>
  )

  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.22em' }}>
      {inner}
    </span>
  )
}

export default function Hero() {
  let wordIndex = 0

  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="live-pill">
            <div className="live-pip" />
            AUTONOMOUS THREAT DETECTION — ACTIVE
          </div>
          <div className="tag">OPEN BETA</div>
        </motion.div>

        {/* Headline */}
        <h1 className="hero-h1" aria-label="Stop API Attacks Before They Happen">
          {HEADLINE.map((line, li) => (
            <span key={li} style={{ display: 'block' }}>
              {line.map((item) => {
                const idx = wordIndex++
                return <Word key={idx} item={item} index={idx} />
              })}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85, ease: EASE }}
        >
          Vigil AI is an <b>autonomous 4-agent security loop</b> that monitors, detects, and
          blocks API abuse in real time — with <b>full AI reasoning on every decision</b>.
          No black boxes. No DevSecOps team required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
        >
          <a href="#waitlist" className="btn-p">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 7L7 13M1 7H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
            </svg>
            Join Waitlist — Free
          </a>
          <a
            href="https://github.com/NSK-394/Vigil-AI"
            target="_blank" rel="noopener"
            className="btn-s"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View Source on GitHub
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.15, ease: EASE }}
        >
          <Terminal />
        </motion.div>

        {/* Proof bar */}
        <motion.div
          className="proof-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.35, ease: EASE }}
        >
          {['IsolationForest Anomaly Engine', 'Confidence-Weighted Fusion',
            'Per-Key Behavioral Memory', 'FastAPI + Express Ready', '$0 to Start'].map(t => (
            <div className="proof-item" key={t}>{t}</div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
