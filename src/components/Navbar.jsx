import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Features',    href: '#features'  },
  { label: 'How it works',href: '#how'        },
  { label: 'Pricing',     href: '#pricing'    },
  { label: 'GitHub ↗',    href: 'https://github.com/NSK-394/Vigil-AI', external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close on outside click
  useEffect(() => {
    if (!open) return
    const fn = e => {
      if (!e.target.closest('.nav')) setOpen(false)
    }
    document.addEventListener('click', fn)
    return () => document.removeEventListener('click', fn)
  }, [open])

  // close when viewport widens to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', fn, { passive: true })
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <div className="logo-dot" />
          VIGIL
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#waitlist" className="nav-cta">Get Early Access</a>
          </li>
        </ul>

        <button
          className={`ham-btn${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--bg)', background: 'var(--accent)',
                padding: '12px', textAlign: 'center',
                fontWeight: 700, marginTop: 8, border: 'none',
              }}
            >
              Get Early Access
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
