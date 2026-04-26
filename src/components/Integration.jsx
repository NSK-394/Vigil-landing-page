import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const PY_CODE = `<span class="cm"># 1. Import the middleware</span>
<span class="kw">from</span> <span class="fn">src.middleware.fastapi_middleware</span> <span class="kw">import</span> <span class="cl">VigilMiddleware</span>

<span class="cm"># 2. Create your app as normal</span>
app <span class="op">=</span> <span class="fn">FastAPI</span>()

<span class="cm"># 3. Add Vigil — that's it.</span>
app.<span class="fn">add_middleware</span>(
    <span class="cl">VigilMiddleware</span>,
    vigil_url<span class="op">=</span><span class="str">"http://localhost:9000/ingest"</span>
)

<span class="cm"># All existing routes work unchanged ✓</span>`

const JS_CODE = `<span class="cm">// 1. Require the middleware</span>
<span class="kw">const</span> { <span class="cl">vigilMiddleware</span> } <span class="op">=</span> <span class="fn">require</span>(<span class="str">'vigil-ai'</span>)

<span class="cm">// 2. Create your app as normal</span>
<span class="kw">const</span> app <span class="op">=</span> <span class="fn">express</span>()

<span class="cm">// 3. Register Vigil — done.</span>
app.<span class="fn">use</span>(<span class="fn">vigilMiddleware</span>({
  url<span class="op">:</span> <span class="str">'http://localhost:9000/ingest'</span>
}))

<span class="cm">// All existing routes work unchanged ✓</span>`

const TABS = [
  { id: 'py', label: 'Python — FastAPI', file: 'fastapi_middleware.py', code: PY_CODE },
  { id: 'js', label: 'JavaScript — Express', file: 'vigil.js',           code: JS_CODE },
]

const POINTS = [
  { n: '01', title: 'ZERO REWRITES',       body: 'Vigil intercepts transparently at the middleware layer. Your existing routes, handlers, and auth logic stay completely untouched.' },
  { n: '02', title: 'SELF-HOSTED OR CLOUD', body: 'Run the agent locally in dev, point to our cloud endpoint in production. One environment variable to switch — no code changes.' },
  { n: '03', title: 'INSTANT BASELINE',    body: 'Behavioral memory starts building from request one. Anomaly detection precision improves automatically as traffic grows.' },
  { n: '04', title: 'NON-BLOCKING ASYNC',  body: 'Threat evaluation runs fully async. Vigil never sits in the request hot path — your API\'s P99 latency is completely unaffected.' },
]

function copyText(html) {
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  return tmp.innerText
}

export default function Integration() {
  const [activeTab, setActiveTab]   = useState('py')
  const [copyLabel, setCopyLabel]   = useState('COPY')

  const tab = TABS.find(t => t.id === activeTab)

  const handleCopy = useCallback(() => {
    const text = copyText(tab.code)
    navigator.clipboard.writeText(text).then(() => {
      setCopyLabel('COPIED ✓')
      setTimeout(() => setCopyLabel('COPY'), 2000)
    }).catch(() => {
      const ta = document.createElement('textarea')
      ta.value = text
      Object.assign(ta.style, { position: 'fixed', opacity: '0' })
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopyLabel('COPIED ✓')
      setTimeout(() => setCopyLabel('COPY'), 2000)
    })
  }, [tab])

  return (
    <section className="integration-section" id="integration">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="s-label">// integration</span>
          <h2 className="s-title">PLUG IN.<br />IN 3 LINES.</h2>
          <p className="s-sub">
            No rewrites. No SDK lock-in. Vigil middleware intercepts every request
            transparently before it reaches your handlers — async, non-blocking.
          </p>
        </motion.div>

        <div className="int-grid">

          {/* Code block with tabs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="code-shell">
              <div className="code-tabs">
                {TABS.map(t => (
                  <button
                    key={t.id}
                    className={`tab-btn${activeTab === t.id ? ' active' : ''}`}
                    onClick={() => setActiveTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="code-head">
                <span className="code-lang">{tab.file}</span>
                <button
                  className="copy-btn"
                  onClick={handleCopy}
                  style={{ color: copyLabel.includes('✓') ? 'var(--accent)' : undefined }}
                >
                  {copyLabel}
                </button>
              </div>
              <motion.pre
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                dangerouslySetInnerHTML={{ __html: tab.code }}
              />
            </div>
          </motion.div>

          {/* Integration points */}
          <motion.div
            className="int-points"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {POINTS.map((p, i) => (
              <motion.div
                key={p.n}
                className="int-pt"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="int-n">{p.n}</div>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
