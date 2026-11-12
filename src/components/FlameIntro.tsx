import { useEffect, useRef, useState } from 'react'

const FLAMES = [
  { left: '-3%', width: 170, delay: 0, duration: 950 },
  { left: '8%', width: 150, delay: 70, duration: 1080 },
  { left: '19%', width: 190, delay: 20, duration: 960 },
  { left: '32%', width: 160, delay: 130, duration: 1120 },
  { left: '45%', width: 180, delay: 40, duration: 1000 },
  { left: '58%', width: 160, delay: 110, duration: 1080 },
  { left: '70%', width: 190, delay: 10, duration: 940 },
  { left: '82%', width: 160, delay: 90, duration: 1100 },
  { left: '93%', width: 170, delay: 55, duration: 1020 },
]

const EMBERS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3) % 100}%`,
  delay: (i * 97) % 900,
  duration: 1400 + ((i * 53) % 500),
}))

const HOLD_MS = 1300
const FADE_MS = 700

export default function FlameIntro() {
  const [stage, setStage] = useState<'hidden' | 'rising' | 'fading'>('hidden')
  const shouldAnimateRef = useRef<boolean | null>(null)

  useEffect(() => {
    if (shouldAnimateRef.current === null) {
      const alreadyShown = sessionStorage.getItem('tazzFireIntroShown') === '1'
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      shouldAnimateRef.current = !alreadyShown && !prefersReducedMotion
      sessionStorage.setItem('tazzFireIntroShown', '1')
    }

    if (!shouldAnimateRef.current) return

    document.body.style.overflow = 'hidden'
    setStage('rising')

    const fadeTimer = window.setTimeout(() => setStage('fading'), HOLD_MS)
    const doneTimer = window.setTimeout(() => {
      setStage('hidden')
      document.body.style.overflow = ''
    }, HOLD_MS + FADE_MS)

    function skip() {
      setStage('hidden')
      document.body.style.overflow = ''
    }
    window.addEventListener('keydown', skip)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
      window.removeEventListener('keydown', skip)
      document.body.style.overflow = ''
    }
  }, [])

  if (stage === 'hidden') return null

  return (
    <div
      onClick={() => setStage('hidden')}
      className={`fixed inset-0 z-[100] flex cursor-pointer items-end overflow-hidden bg-char-950 transition-opacity duration-700 ease-out ${
        stage === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,rgba(249,114,47,0.55),transparent_70%)]" />

      {FLAMES.map((flame, i) => (
        <span
          key={i}
          className="absolute bottom-0 origin-bottom rounded-[50%_50%_45%_45%/65%_65%_35%_35%] bg-fire-gradient blur-[1px]"
          style={{
            left: flame.left,
            width: flame.width,
            height: '115vh',
            animation: `flame-rise ${flame.duration}ms cubic-bezier(0.22,1,0.36,1) ${flame.delay}ms both`,
          }}
        />
      ))}

      {EMBERS.map((ember, i) => (
        <span
          key={i}
          className="absolute bottom-10 h-1.5 w-1.5 rounded-full bg-ember-400"
          style={{
            left: ember.left,
            animation: `ember-float ${ember.duration}ms ease-out ${ember.delay}ms both`,
          }}
        />
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-char-950 to-transparent" />
    </div>
  )
}
