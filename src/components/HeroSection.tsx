export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <img
        src="/images/hero-3.jpg"
        alt="Tazz, a fire performer, spinning a flaming four-torch fire fork during a night performance"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[60%_35%] brightness-110 saturate-[1.15]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-char-950 via-char-950/45 to-char-950/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-char-950/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-ember-500/40 bg-ember-500/10 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-ember-400">
            Licensed Flame Effects Operator
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
            Fire Performance <span className="text-flame-500">Texas</span> Trusts
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Tazz Fire Entertainment brings professional fire dancing, fire breathing, and
            permitted open-flame effects to weddings, festivals, and corporate events across
            Austin and Central Texas — backed by an official flame effects operator license.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Book Your Event
            </a>
            <a href="#gallery" className="btn-secondary">
              See Tazz Perform
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
