import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01', phase: 'Observe',
    agent: 'MONITOR\nAGENT',
    desc: 'Ingests every request. Builds per-key behavioral fingerprints — velocity, timing, entropy, access patterns — in real time.',
  },
  {
    num: '02', phase: 'Reason',
    agent: 'DETECTION\nAGENT',
    desc: 'Runs IsolationForest anomaly scoring on all behavioral signals simultaneously. Measures each key against its own baseline.',
  },
  {
    num: '03', phase: 'Decide',
    agent: 'DECISION\nAGENT',
    desc: 'Fuses all signals with confidence weighting. Produces a labeled verdict (LOW/MED/HIGH) with a human-readable reasoning string.',
  },
  {
    num: '04', phase: 'Act',
    agent: 'RESPONSE\nAGENT',
    desc: 'Auto-blocks, escalates, or logs. Persistent offender memory lowers the block threshold on every re-occurrence.',
  },
]

const VERDICT_LINES = [
  { cls: '', html: '<span class="cd">[2026-04-26 11:42:03]</span> <span class="cp">vigil@decision</span><span class="cd">:~$</span> evaluate sk_live_4x9mR2...' },
  { cls: '', html: '<span class="ck">label</span><span class="op">:</span> <span class="ch">■ HIGH</span> &nbsp;│&nbsp; <span class="ck">conf</span><span class="op">=</span><span class="cv">95%</span> &nbsp;│&nbsp; <span class="ck">fused_score</span><span class="op">=</span><span class="cv">97.6</span>' },
  { cls: '', html: '<span class="ck">signals</span><span class="op">:</span> <span class="cw">velocity_spike=+70%</span>, <span class="cw">entropy=0.12</span>, <span class="cbl">repeat_offender=TRUE</span>' },
  { cls: '', html: '<span class="ck">reasoning</span><span class="op">:</span> <span class="cd">"Velocity 3.2σ above baseline. Entropy collapse → scraping. Key seen in 3 prior incidents."</span>' },
  { cls: '', html: '<span class="ck">action</span><span class="op">:</span> <span class="cbl">AUTO_BLOCK</span> &nbsp;│&nbsp; <span class="ck">notified</span><span class="op">:</span> <span class="cok">Slack ✓ Email ✓</span> &nbsp;│&nbsp; <span class="ck">logged</span><span class="op">:</span> <span class="cok">vault ✓</span>' },
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="how">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="s-label">// architecture</span>
          <h2 className="s-title">4 AGENTS. ONE LOOP.<br />ZERO BLIND SPOTS.</h2>
          <p className="s-sub">
            Each agent specializes in one phase. Together they form a closed reasoning loop
            that continuously adapts — something no static rule system can do.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="pipeline">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="p-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-num">{step.num}</div>
              <div className="p-phase">{step.phase}</div>
              <div className="p-agent" style={{ whiteSpace: 'pre-line' }}>{step.agent}</div>
              <div className="p-desc">{step.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Static verdict terminal */}
        <motion.div
          className="verdict-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="term-shell" style={{ maxWidth: 720 }}>
            <div className="t-bar">
              <div className="t-dot t-r" /><div className="t-dot t-y" /><div className="t-dot t-g" />
              <span className="t-lbl">decision-agent — verdict output</span>
            </div>
            <div className="t-body">
              {VERDICT_LINES.map((l, i) => (
                <div
                  key={i}
                  style={{ marginTop: i === 4 ? 4 : 0 }}
                  dangerouslySetInnerHTML={{ __html: l.html }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
