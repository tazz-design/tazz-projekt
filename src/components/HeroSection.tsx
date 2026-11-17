export default function HeroSection() {
  return (
    <section id="top" className="relative sm:flex sm:min-h-[calc(100vh-5rem)] sm:items-center sm:overflow-hidden">
      <div className="relative z-10 bg-char-950 px-6 py-12 sm:absolute sm:inset-0 sm:z-10 sm:flex sm:items-center sm:bg-transparent sm:px-0 sm:py-0">
        <div className="mx-auto w-full max-w-7xl sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
              Fire Performance
              <br />
              <span className="block">
                <span className="text-flame-500">Texas</span> Trusts
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Tazz Fire Entertainment brings professional fire dancing, fire breathing, and
              permitted open-flame effects to weddings, festivals, and corporate events across
              Austin and Central Texas, backed by an official flame effects operator license and
              over $1,000,000 in liability insurance.
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
      </div>

      <div className="px-6 pt-6 sm:contents">
        <img
          src="/images/hero-3.jpg"
          alt="Tazz, a fire performer, spinning a flaming four-torch fire fork during a night performance"
          fetchPriority="high"
          decoding="async"
          className="h-72 w-full rounded-2xl object-cover object-[60%_35%] shadow-[0_0_35px_8px_rgba(249,114,47,0.3)] brightness-110 saturate-[1.15] sm:absolute sm:inset-0 sm:h-full sm:w-full sm:rounded-none sm:shadow-none"
        />
      </div>

      <div className="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-r sm:from-char-950 sm:via-char-950/45 sm:to-char-950/0" />
      <div className="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-t sm:from-char-950/50 sm:via-transparent sm:to-transparent" />
    </section>
  )
}
