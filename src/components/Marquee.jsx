const ITEMS = [
  'ISOLATIONFOREST', '4-AGENT LOOP', 'EXPLAINABLE AI', 'FASTAPI',
  'EXPRESS.JS', 'AUTO-BLOCK', 'PER-KEY MEMORY', 'CONFIDENCE FUSION',
  'LIVE SOC DASHBOARD', 'ZERO LATENCY', 'OPEN SOURCE',
]

export default function Marquee() {
  // doubled for seamless CSS loop
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
