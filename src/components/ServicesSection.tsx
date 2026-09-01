import Carousel from './Carousel'

const SERVICES = [
  {
    title: 'Fire Dance Performances',
    description:
      'Poi, staff, fans, and fire breathing choreographed to music, with solo or multi-prop routines built around your event.',
    icon: (
      <path d="M12 2c2 4-2 5-2 8 0 1.5 1 2.5 2 2.5s1.5-1 1.5-2c2 1.5 4 4 4 7.5 0 5-4 8.5-9.5 8.5S-.5 22 -.5 17c0-4.5 3-6.5 4-10 .5 2.5 1.5 3.5 2.5 3.5 1.5 0 2-1.5 1.5-3C6.5 4.5 9.5 3 12 2z" />
    ),
  },
  {
    title: 'Duet & Group Acts',
    description:
      'Beyond solo sets, Tazz can bring in additional performers for synchronized duet and group routines, built to scale up the visual impact for bigger stages and crowds.',
    icon: <path d="M9 2v6l-3 3v9a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-9l-3-3V2M9 2h6" />,
  },
  {
    title: 'Weddings & Private Events',
    description:
      'A showstopping send-off, first-dance backdrop, or after-party centerpiece for private celebrations of any size.',
    icon: <path d="M12 2l3 6 6 1-4.5 4.5L17.5 20 12 17l-5.5 3 1-6.5L3 9l6-1 3-6z" />,
  },
  {
    title: 'Festivals & Public Events',
    description:
      'Proven on the big stage: professional, insured, and experienced performing for large festival crowds.',
    icon: <path d="M3 21h18M6 21V10l6-7 6 7v11M10 21v-6h4v6" />,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-char-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">Services</h2>
          <p className="mt-4 text-zinc-400">
            From intimate ceremonies to festival main stages, every show is built around your
            venue, your timeline, and your fire code requirements.
          </p>
        </div>

        <div className="mt-14">
          <Carousel ariaLabel="Services">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="w-[280px] shrink-0 snap-start rounded-xl border border-white/10 bg-char-900 p-8 transition-colors hover:border-ember-500/40 sm:w-[320px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-fire-gradient">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
