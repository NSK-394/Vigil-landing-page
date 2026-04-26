const LINKS = [
  { label: 'GitHub',       href: 'https://github.com/NSK-394/Vigil-AI', external: true },
  { label: 'Features',     href: '#features'     },
  { label: 'How it works', href: '#how'           },
  { label: 'Pricing',      href: '#pricing'       },
  { label: 'Early Access', href: '#waitlist'      },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-inner">

          <div>
            <div className="foot-logo">
              <span style={{ color: 'var(--accent)' }}>●</span> VIGIL AI
            </div>
            <div className="foot-tag">
              Autonomous API Security · Built for the modern stack
            </div>
          </div>

          <div className="foot-links">
            {LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="foot-credit">
            Built by{' '}
            <a href="https://github.com/NSK-394" target="_blank" rel="noopener">
              Nikhilsai
            </a>{' '}
            — SRM Student, Chennai
            <br />
            <span>© 2026 Vigil AI · MIT License</span>
          </div>

        </div>
      </div>
    </footer>
  )
}
