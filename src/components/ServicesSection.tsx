import Carousel from './Carousel'

const SERVICES = [
  {
    title: 'Fire Juggling Acts',
    description:
      'Flaming torches and props worked into fast-paced juggling routines, built for up-close crowds or big stages alike.',
    image: '/images/services-juggling.jpg',
    imageAlt: 'Tazz juggling flaming torches outdoors in a pumpkin-print shirt',
    imageAspect: 'aspect-[3/4]',
  },
  {
    title: 'Duet Acts',
    description:
      'A second performer joins Tazz for synchronized two-person routines, adding visual depth and partner choreography while keeping the intimacy of a smaller show.',
    image: '/images/services-duet.jpg',
    imageAlt: 'Tazz and a second performer spinning a flaming hoop and fire fan together at night',
  },
  {
    title: 'LED Performances',
    description:
      'Flame-free LED staff, poi, and prop routines for indoor venues, galas, and events where open flame isn’t permitted — same high-energy choreography, no permit required.',
    image: '/images/services-led.jpg',
    imageAlt: 'Tazz performing an LED staff routine indoors at a holiday event',
    imageAspect: 'aspect-[3/4]',
  },
  {
    title: 'Group Acts',
    description:
      'Full fire shows featuring four or more dancers in tight, choreographed routines — built to fill a festival main stage or anchor a large-scale production.',
    image: '/images/services-group.jpg',
    imageAlt: 'Tazz and two other performers spinning flaming fans in a synchronized group routine',
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
                className="w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-char-900 transition-colors hover:border-ember-500/40 sm:w-[320px]"
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className={`${service.imageAspect ?? 'aspect-[4/3]'} w-full object-cover`}
                    style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                  />
                ) : (
                  <div className="px-8 pt-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-fire-gradient">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        {service.icon}
                      </svg>
                    </div>
                  </div>
                )}
                <div className="p-8 pt-5">
                  <h3 className="font-heading text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
