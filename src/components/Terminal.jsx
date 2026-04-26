import { useEffect, useRef } from 'react'

const LINES = [
  { h: '<span class="cd">[2026-04-26 11:42:03]</span> <span class="cp">vigil@monitor</span><span class="cd">:~$</span> ingest',                                                                                         ms: 600  },
  { h: '<span class="cd">  ›</span> <span class="ck">api_key</span><span class="op">=</span><span class="cv">sk_live_4x9mR2...</span>  <span class="ck">method</span><span class="op">=</span><span class="cv">GET</span>  <span class="ck">path</span><span class="op">=</span><span class="cv">/api/products</span>', ms: 1000 },
  { h: '<span class="cd">  ›</span> <span class="ck">rate</span><span class="op">=</span><span class="cw">847/min</span>  <span class="ck">baseline</span><span class="op">=</span><span class="cv">498/min</span>  <span class="ck">delta</span><span class="op">=</span><span class="cw">+70%</span>  <span class="ck">entropy</span><span class="op">=</span><span class="cw">0.12</span>',  ms: 1360 },
  { h: '',                                                                                                                                                                                                           ms: 1620 },
  { h: '<span class="cp">vigil@detection</span><span class="cd">:~$</span> run anomaly-score',                                                                                                                           ms: 1820 },
  { h: '<span class="cd">  ›</span> isolation_score<span class="op">=</span><span class="cv">-0.312</span>  pattern<span class="op">=</span><span class="cbl">scraper</span>  repeat<span class="op">=</span><span class="cbl">TRUE</span>',                      ms: 2240 },
  { h: '',                                                                                                                                                                                                           ms: 2480 },
  { h: '<span class="cp">vigil@decision</span><span class="cd">:~$</span> fuse-and-label',                                                                                                                             ms: 2680 },
  { h: '<span class="cd">  ›</span> <span class="ck">label</span><span class="op">:</span> <span class="ch">■ HIGH</span>  <span class="ck">conf</span><span class="op">=</span><span class="cv">95%</span>  <span class="ck">fused</span><span class="op">=</span><span class="cv">97.6</span>  <span class="ck">repeat_offender</span><span class="op">=</span><span class="cbl">TRUE</span>',            ms: 3180 },
  { h: '',                                                                                                                                                                                                           ms: 3420 },
  { h: '<span class="cp">vigil@response</span><span class="cd">:~$</span> execute-action',                                                                                                                              ms: 3620 },
  { h: '<span class="cd">  ›</span> <span class="cbl">AUTO_BLOCK</span> sk_live_4x9mR2 <span class="cok">✓</span>  Slack <span class="cok">✓</span>  Email <span class="cok">✓</span>  vault <span class="cok">✓</span>',                           ms: 4100 },
]

export default function Terminal({ label = 'vigil-agent — live threat stream', style }) {
  const bodyRef = useRef(null)
  const timers  = useRef([])

  function clearTimers() {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  function run() {
    const wrap = bodyRef.current
    if (!wrap) return
    wrap.innerHTML = ''

    LINES.forEach((l, i) => {
      const t = setTimeout(() => {
        const div = document.createElement('div')
        div.style.cssText = 'opacity:0;transform:translateY(4px);transition:opacity .25s ease,transform .25s ease'
        div.innerHTML = l.h || '&nbsp;'
        wrap.appendChild(div)
        requestAnimationFrame(() => requestAnimationFrame(() => {
          div.style.opacity = '1'
          div.style.transform = 'translateY(0)'
        }))

        if (i === LINES.length - 1) {
          const ct = setTimeout(() => {
            const cur = document.createElement('div')
            cur.style.cssText = 'opacity:1'
            cur.innerHTML = '<span class="cp">vigil@response</span><span class="cd">:~$</span> <span class="t-cursor"></span>'
            wrap.appendChild(cur)
          }, 450)
          timers.current.push(ct)

          const lt = setTimeout(run, l.ms + 5500)
          timers.current.push(lt)
        }
      }, l.ms)
      timers.current.push(t)
    })
  }

  useEffect(() => {
    run()
    return clearTimers
  }, [])

  return (
    <div className="term-shell" style={style}>
      <div className="t-bar">
        <div className="t-dot t-r" /><div className="t-dot t-y" /><div className="t-dot t-g" />
        <span className="t-lbl">{label}</span>
      </div>
      <div className="t-body" ref={bodyRef} />
    </div>
  )
}
