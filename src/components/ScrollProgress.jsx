import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const s = document.documentElement.scrollTop
      const h = document.documentElement.scrollHeight - window.innerHeight
      setPct(h > 0 ? (s / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-prog"
      style={{ width: `${pct}%` }}
      aria-hidden="true"
    />
  )
}
