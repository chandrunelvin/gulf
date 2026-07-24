import { useEffect, useState } from 'react'
import './launchGate.css'

// TESTING: 10-second countdown from page load. Swap this back to a fixed
// launch date/time before going live, e.g.:
//   const LAUNCH_TARGET = new Date('2026-07-24T14:00:00+04:00').getTime()
const LAUNCH_TARGET = Date.now() + 10 * 1000
const SEEN_KEY = 'gst_launch_seen'

const CONFETTI_COLORS = ['#159b94', '#1cc0b7', '#d4a24c', '#f2c879', '#ffffff', '#8a1538']

function getTimeLeft() {
  const diff = LAUNCH_TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  }
}

const pad = (n) => String(n).padStart(2, '0')

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
    const gateOpen = phase === 'counting' || phase === 'celebrating'
    document.body.style.overflow = gateOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [phase])

  const enterSite = () => {
    window.localStorage.setItem(SEEN_KEY, '1')
    setPhase('entered')
  }

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

      <div className="launch-gate-content">
        <img src="/images/GST_logo.png" alt="GST Concepts" className="launch-gate-logo" />

        {phase === 'counting' && (
          <>
            <div className="launch-gate-eyebrow">Design To Deliver With Style</div>
            <h1 className="launch-gate-title">
              We're <span>Launching</span> Soon
            </h1>
            <p className="launch-gate-sub">The new GST Concepts website goes live today at 2:00 PM.</p>
            <div className="launch-gate-clock">
              <div className="launch-gate-unit">
                <span className="launch-gate-num">{pad(timeLeft.days)}</span>
                <span className="launch-gate-unit-label">Days</span>
              </div>
              <span className="launch-gate-colon">:</span>
              <div className="launch-gate-unit">
                <span className="launch-gate-num">{pad(timeLeft.hours)}</span>
                <span className="launch-gate-unit-label">Hours</span>
              </div>
              <span className="launch-gate-colon">:</span>
              <div className="launch-gate-unit">
                <span className="launch-gate-num">{pad(timeLeft.minutes)}</span>
                <span className="launch-gate-unit-label">Minutes</span>
              </div>
              <span className="launch-gate-colon">:</span>
              <div className="launch-gate-unit">
                <span className="launch-gate-num">{pad(timeLeft.seconds)}</span>
                <span className="launch-gate-unit-label">Seconds</span>
              </div>
            </div>
          </>
        )}

        {phase === 'celebrating' && (
          <>
            <div className="launch-gate-emoji">🎉</div>
            <h1 className="launch-gate-title">We're <span>Live!</span></h1>
            <p className="launch-gate-sub">The new GST Concepts website has officially launched. Welcome in.</p>
            <button type="button" className="launch-gate-enter" onClick={enterSite}>
              Enter The Site
            </button>
          </>
        )}
      </div>
    </div>
  )
}
