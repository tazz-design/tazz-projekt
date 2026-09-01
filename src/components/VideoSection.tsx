import { useEffect, useRef } from 'react'

function useAutoPlayOnView() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return videoRef
}

export default function VideoSection() {
  const leftVideoRef = useAutoPlayOnView()
  const rightVideoRef = useAutoPlayOnView()

  return (
    <section className="bg-char-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
          <div className="order-1 flex justify-center">
            <video
              ref={leftVideoRef}
              controls
              playsInline
              muted
              loop
              poster="/images/tazz-1-poster.jpg"
              className="aspect-[9/16] w-full max-w-[420px] rounded-2xl object-cover shadow-2xl shadow-black/50"
            >
              <source src="/videos/tazz-1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="order-2 mx-auto max-w-xs text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Watch the Show
            </h2>
            <p className="mt-6 text-zinc-300 leading-relaxed">
              A quick look at Tazz in action on the big stage: fire hoop work set
              against a full production backdrop, in front of a packed house.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Book This Show
              </a>
            </div>
          </div>

          <div className="order-3 flex justify-center">
            <video
              ref={rightVideoRef}
              controls
              playsInline
              muted
              loop
              poster="/images/fire-hoop-poster.jpg"
              className="aspect-[9/16] w-full max-w-[420px] rounded-2xl object-cover shadow-2xl shadow-black/50"
            >
              <source src="/videos/fire-hoop-clip.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
