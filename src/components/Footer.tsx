import MiniFlame from './MiniFlame'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-char-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src="/images/logo-mark.png" alt="Tazz Fire Entertainment logo" className="h-9 w-9 rounded-full" />
          <p className="flex items-center gap-1.5 font-heading text-sm font-semibold text-white">
            TAZZ <span className="text-flame-500">FIRE</span> ENTERTAINMENT
            <MiniFlame size={14} delay={140} />
          </p>
        </div>
        <nav className="flex gap-6 text-sm text-zinc-400">
          <a href="#services" className="hover:text-ember-400">Services</a>
          <a href="#gallery" className="hover:text-ember-400">Gallery</a>
          <a href="#about" className="hover:text-ember-400">About</a>
          <a href="#contact" className="hover:text-ember-400">Contact</a>
        </nav>
        <p className="text-sm text-zinc-500">© {year} Tazz Fire Entertainment</p>
      </div>
    </footer>
  )
}
