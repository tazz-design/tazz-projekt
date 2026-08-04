import { useRef } from 'react'

interface CarouselProps {
  children: React.ReactNode
  ariaLabel: string
}

export default function Carousel({ children, ariaLabel }: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        role="group"
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        aria-label={`Scroll ${ariaLabel} left`}
        onClick={() => scroll(-1)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-char-950/90 p-2.5 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-ember-500/40 hover:text-ember-400 sm:flex"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label={`Scroll ${ariaLabel} right`}
        onClick={() => scroll(1)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-char-950/90 p-2.5 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-ember-500/40 hover:text-ember-400 sm:flex"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
