import { useEffect, useRef, useState } from 'react'

export function useCounter(target, duration = 2000) {
  const [value, setValue] = useState(0)
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true)
        observer.disconnect()
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!active) return
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [active, target, duration])

  return [ref, value]
}
