import { motion } from 'framer-motion'

const COSTS = [
  {
    vendor: '// Splunk',
    price: '$250–400', cls: 'r',
    desc: 'per GB, per day. Your application logs alone exceed most startup cloud budgets.',
    chip: 'ENTERPRISE ONLY', chipCls: 'bad',
  },
  {
    vendor: '// Datadog',
    price: '$180–2.5K', cls: 'a',
    desc: 'per month. Usage-based overages hit unpredictably. Great product, brutal at startup scale.',
    chip: 'PRICING TRAP', chipCls: 'bad',
  },
  {
    vendor: '// AWS WAF',
    price: '$5/rule', cls: 'a',
    desc: 'Complex rule management, zero behavioral intelligence, and full cloud vendor lock-in.',
    chip: 'CLOUD LOCK-IN', chipCls: 'bad',
  },
  {
    vendor: '// Vigil AI Pro',
    price: '₹2,000', cls: 'g',
    desc: 'per month. Autonomous agent loop with full explainability, behavioral memory, and real-time blocking.',
    chip: '✓ BUILT FOR STARTUPS', chipCls: 'good',
    winner: true,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="s-label">// the problem</span>
          <h2 className="s-title">SECURITY TOOLS ARE<br />BROKEN FOR STARTUPS</h2>
          <p className="s-sub">
            Enterprise pricing was never designed for solo SaaS founders getting scraped.
            You're choosing between leaving your APIs exposed — or spending more on
            monitoring than your entire cloud bill.
          </p>
        </motion.div>

        <div className="cost-grid">
          {COSTS.map((c, i) => (
            <motion.div
              key={c.vendor}
              className={`cost-card${c.winner ? ' winner' : ''}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
            >
              <div className="cost-vendor">{c.vendor}</div>
              <div className={`cost-price ${c.cls}`}>{c.price}</div>
              <div className="cost-desc">{c.desc}</div>
              <div className={`chip ${c.chipCls}`}>{c.chip}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
