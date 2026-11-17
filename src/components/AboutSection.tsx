import { useResponsive } from '../context/ResponsiveContext'

export default function AboutSection() {
  const { isMobile } = useResponsive()

  return (
    <section id="about" className="bg-char-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className={isMobile ? 'order-2' : ''}>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Meet Tazz
            </h2>
            <p className="mt-6 text-zinc-300 leading-relaxed">
              Tazz has spent years perfecting the craft of fire performance, including poi,
              staff, fans, and fire breathing, for audiences across Austin and beyond. What sets
              Tazz apart isn't just the show: it's the license to back it up.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              As a certified <span className="font-semibold text-ember-400">Flame Effects Operator</span>,
              Tazz can work directly with any city's official fire marshal to pull the permits
              required for open-flame performance, the paperwork that trips up most fire
              acts before they ever get booked. That means venues, planners, and festival
              organizers can book with confidence that the fire code box is checked.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-heading text-3xl font-bold text-white">FEO</p>
                <p className="mt-1 text-sm text-zinc-400">Licensed &amp; permit-ready</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-white">Austin, TX</p>
                <p className="mt-1 text-sm text-zinc-400">Based &amp; touring Central Texas</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-white">Multi-Prop</p>
                <p className="mt-1 text-sm text-zinc-400">Poi · Staff · Fans · Fire Breathing</p>
              </div>
            </div>
          </div>

          <div className={isMobile ? 'order-1' : ''}>
            <img
              src="/images/hero-1.jpg"
              alt="Tazz, an Austin fire dancer, performing a single-flame fire staff routine at night"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-black/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
