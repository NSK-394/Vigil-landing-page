import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth < 769) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H, pts = [], raf

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function build() {
      const count = Math.min(70, Math.floor(W * H / 14000))
      pts = Array.from({ length: count }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r:  Math.random() * 1.2 + 0.4,
        o:  Math.random() * 0.35 + 0.1,
      }))
    }

    resize()
    build()

    const MAX = 130

    function draw() {
      ctx.clearRect(0, 0, W, H)

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < MAX * MAX) {
            const a = (1 - Math.sqrt(d2) / MAX) * 0.12
            ctx.strokeStyle = `rgba(0,230,118,${a})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.fillStyle = `rgba(0,230,118,${p.o})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => { resize(); build() }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 0, pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  )
}
