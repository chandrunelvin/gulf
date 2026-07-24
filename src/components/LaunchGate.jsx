import { useEffect, useState } from 'react'
import './launchGate.css'

// TESTING: 10-second countdown from page load. Swap this back to a fixed
// launch date/time before going live, e.g.:
//   const LAUNCH_TARGET = new Date('2026-07-24T14:00:00+04:00').getTime()
const LAUNCH_TARGET = Date.now() + 10 * 1000
const SEEN_KEY = 'gst_launch_seen'
const CELEBRATION_MS = 2000

const CONFETTI_COLORS = ['#159b94', '#1cc0b7', '#d4a24c', '#f2c879', '#ffffff', '#8a1538']

function getTimeLeft() {
  const diff = LAUNCH_TARGET - Date.now()
  if (diff <= 0) return { seconds: 0, done: true }
  return { seconds: Math.ceil(diff / 1000), done: false }
}

function makeConfetti() {
  return Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.4,
    duration: 2.8 + Math.random() * 2,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    rotate: Math.random() * 360,
    drift: (Math.random() - 0.5) * 160,
    size: 6 + Math.random() * 8,
  }))
}

export default function LaunchGate() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const [phase, setPhase] = useState(() => {
    if (typeof window === 'undefined') return 'counting'
    if (getTimeLeft().done) {
      return window.localStorage.getItem(SEEN_KEY) ? 'entered' : 'celebrating'
    }
    return 'counting'
  })
  const [confetti] = useState(makeConfetti)

  useEffect(() => {
    if (phase !== 'counting') return
    const tick = () => {
      const next = getTimeLeft()
      setTimeLeft(next)
      if (next.done) setPhase('celebrating')
    }
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'celebrating') return
    const id = setTimeout(() => {
      window.localStorage.setItem(SEEN_KEY, '1')
      setPhase('entered')
    }, CELEBRATION_MS)
    return () => clearTimeout(id)
  }, [phase])

  useEffect(() => {
    const gateOpen = phase === 'counting' || phase === 'celebrating'
    document.body.style.overflow = gateOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [phase])

  if (phase === 'entered') return null

  return (
    <div className="launch-gate">
      <div className="launch-gate-bg" />

      {phase === 'celebrating' && (
        <div className="launch-confetti-field">
          {confetti.map((p) => (
            <span
              key={p.id}
              className="launch-confetti-piece"
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size * 0.4}px`,
                '--drift': `${p.drift}px`,
                '--rotate': `${p.rotate}deg`,
              }}
            />
          ))}
        </div>
      )}

      <div className="launch-gate-layout">
        <div className="launch-gate-top">
          {phase === 'counting' && (
            <div className="launch-gate-clock">
              <div className="launch-gate-unit">
                <span className="launch-gate-num">{timeLeft.seconds}</span>
                <span className="launch-gate-unit-label">Seconds</span>
              </div>
            </div>
          )}

          {phase === 'celebrating' && (
            <div className="launch-gate-live">
              <div className="launch-gate-emoji">🎉</div>
              <h1 className="launch-gate-title">We're <span>Live!</span></h1>
            </div>
          )}
        </div>

        <div className="launch-gate-bottom">
          <img src="/images/GST_logo.png" alt="GST Concepts" className="launch-gate-logo" />
          <div className="launch-gate-eyebrow">Design To Deliver With Style</div>
          {phase === 'counting' && (
            <p className="launch-gate-sub">The new GST Concepts website goes live.</p>
          )}
          {phase === 'celebrating' && (
            <p className="launch-gate-sub">The new GST Concepts website has officially launched. Taking you in…</p>
          )}
        </div>
      </div>
    </div>
  )
}
