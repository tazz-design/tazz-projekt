import { useEffect, useRef } from 'react'

export default function TrustBand() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const img = imgRef.current
    if (!section || !img) return

    let ticking = false

    function update() {
      ticking = false
      if (!section || !img) return
      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const total = viewportHeight + rect.height
      const progress = Math.min(Math.max((viewportHeight - rect.top) / total, 0), 1)
      const offset = (progress - 0.5) * 140
      img.style.transform = `translateY(calc(-50% + ${offset}px))`
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative mt-16 h-[480px] overflow-hidden sm:mt-24 sm:h-[560px]">
      <img
        ref={imgRef}
        src="/images/pumpkin-nights-2.jpg"
        alt="A crowd of guests watching Tazz perform a fire show at the Pumpkin Nights festival"
        className="absolute inset-x-0 top-1/2 h-[640px] w-full -translate-y-1/2 object-cover object-[50%_75%] will-change-transform sm:h-[760px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/15 to-transparent" />
      <div className="absolute inset-0 flex items-start">
        <div className="mx-auto w-full max-w-7xl px-6 pt-10">
          <div className="ml-auto max-w-md text-right">
            <p className="text-xl font-medium text-white sm:text-2xl">
              You may have seen Tazz around Austin, most recently seen at{' '}
              <span className="text-flame-500">Pumpkin Nights</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
