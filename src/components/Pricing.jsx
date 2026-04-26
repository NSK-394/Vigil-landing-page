import { motion } from 'framer-motion'

const PLANS = [
  {
    tag: '// Free',
    price: '₹0',
    period: 'open source · forever',
    features: [
      'Full 4-agent loop source code',
      'Self-hosted deployment',
      'FastAPI + Express middleware',
      'Unlimited local API keys',
      'Community Discord support',
    ],
    cta: 'View on GitHub ↗',
    ctaCls: '',
    href: 'https://github.com/NSK-394/Vigil-AI',
    external: true,
  },
  {
    tag: '// Pro',
    price: '₹2K',
    period: 'per month · billed monthly',
    features: [
      'Cloud SOC dashboard',
      '30-day incident history + export',
      'Slack + email alerts',
      'Managed agent updates',
      'Priority email support',
    ],
    cta: 'Join Waitlist',
    ctaCls: '',
    href: '#waitlist',
  },
  {
    tag: '// Team',
    price: '₹5K',
    period: 'per month · billed monthly',
    popular: true,
    features: [
      'Everything in Pro',
      'Multi-key management + labels',
      'LLM-generated incident reports',
      'Team access · 5 seats',
      'Webhook integrations',
      'Custom detection thresholds',
    ],
    cta: 'Join Waitlist',
    ctaCls: 'hi',
    href: '#waitlist',
  },
  {
    tag: '// Managed',
    price: '₹15K',
    period: 'per month · billed monthly',
    features: [
      'Everything in Team',
      'Done-for-you onboarding',
      'Monthly security reports',
      'Custom detection rules',
      'Dedicated engineer',
      'Uptime SLA guarantee',
    ],
    cta: 'Contact Us',
    ctaCls: '',
    href: '#waitlist',
  },
]

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="s-label">// pricing</span>
          <h2 className="s-title">TRANSPARENT.<br />NO SURPRISES.</h2>
          <p className="s-sub">
            Start free. Upgrade when it matters. No usage-based gotchas,
            no per-seat surprises, no GB overages. Ever.
          </p>
        </motion.div>

        <div className="price-grid">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.tag}
              className={`price-card${plan.popular ? ' pop' : ''}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {plan.popular && <div className="pop-badge">MOST POPULAR</div>}
              <div className="plan-tag">{plan.tag}</div>
              <div className="plan-price">{plan.price}</div>
              <div className="plan-period">{plan.period}</div>
              <ul className="plan-feats">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a
                href={plan.href}
                className={`plan-btn${plan.ctaCls ? ` ${plan.ctaCls}` : ''}`}
                {...(plan.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
