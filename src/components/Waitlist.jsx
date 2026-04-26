import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://formspree.io/f/mlgavzvr', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Submission failed. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="waitlist-section" id="waitlist">
      <div className="container">
        <motion.div
          className="wl-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="tag" style={{ marginBottom: 22 }}>EARLY ACCESS OPEN NOW</div>

          <h2 className="wl-title">
            BE FIRST.<br />
            <span className="g-text">GET ACCESS.</span>
          </h2>

          <p className="wl-sub">
            Early members get <b>3 months free</b> and locked-in founding pricing —
            before we raise rates at public launch.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                className="wl-form"
                action="https://formspree.io/f/mlgavzvr"
                method="POST"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              >
                <input
                  className="wl-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  aria-label="Email address"
                />
                <button type="submit" className="wl-btn" disabled={loading}>
                  {loading ? 'SUBMITTING...' : 'JOIN WAITLIST →'}
                </button>
                {error && (
                  <p style={{ color: '#ff4d4d', fontSize: 13, marginTop: 10, textAlign: 'center' }}>
                    {error}
                  </p>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="wl-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                ✓ YOU'RE ON THE LIST — WE'LL EMAIL YOU WHEN WE LAUNCH
              </motion.div>
            )}
          </AnimatePresence>

          <div className="wl-note">
            NO SPAM. ONE EMAIL WHEN WE LAUNCH. UNSUBSCRIBE INSTANTLY.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
