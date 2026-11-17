import { useState } from 'react'
import { useResponsive } from '../context/ResponsiveContext'
import MiniFlame from './MiniFlame'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { isMobile } = useResponsive()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 bg-char-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-1.5 font-heading text-lg font-bold tracking-wide text-white">
          TAZZ <span className="text-flame-500">FIRE</span>
          <MiniFlame size={16} delay={0} />
          <MiniFlame size={13} delay={260} />
        </a>

        {!isMobile && (
          <nav className="flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-medium text-zinc-300 transition-colors hover:text-ember-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {!isMobile && (
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Book Now
          </a>
        )}

        {isMobile && (
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        )}
      </div>

      {isMobile && open && (
        <div className="border-t border-white/10 bg-char-950 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-base font-medium text-zinc-300 hover:text-ember-400"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full text-sm">
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
