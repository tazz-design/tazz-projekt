import Carousel from './Carousel'
import MiniFlame from './MiniFlame'

const IMAGES = [
  { src: '/images/gallery-1.jpg', alt: 'Tazz spinning a flaming rope dart overhead' },
  { src: '/images/gallery-2.jpg', alt: 'Tazz holding a large flaming fire staff overhead' },
  { src: '/images/pumpkin-nights-1.jpg', alt: 'Tazz performing a fire whip routine on stage' },
  { src: '/images/gallery-3.jpg', alt: 'Tazz breathing a large fire plume across the stage' },
  { src: '/images/gallery-4.jpg', alt: 'Tazz performing a fire breathing routine with a torch' },
  { src: '/images/hero-2.jpg', alt: 'Tazz spinning two flaming fire fans crossed overhead' },
  { src: '/images/gallery-6.jpg', alt: 'Tazz spinning two flaming poi crossed overhead' },
  { src: '/images/pumpkin-nights-2.jpg', alt: 'Tazz performing for a crowd at the Pumpkin Nights festival' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-char-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="flex items-center gap-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Gallery
            <MiniFlame size={22} delay={90} />
          </h2>
          <p className="mt-4 text-zinc-400">A look at the show, live and unfiltered.</p>
        </div>

        <div className="mt-12">
          <Carousel ariaLabel="Performance gallery">
            {IMAGES.map((image) => (
              <div
                key={image.src}
                className="group w-[240px] shrink-0 snap-start overflow-hidden rounded-lg sm:w-[280px]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          Photography: Matt Hellman Photography, Richard Butts Photography, S Dot Z Photography.
        </p>
      </div>
    </section>
  )
}
