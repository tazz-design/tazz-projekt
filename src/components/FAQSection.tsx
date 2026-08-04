const FAQS = [
  {
    question: 'What is a Flame Effects Operator (FEO)?',
    answer:
      "A Flame Effects Operator is a professional licensed to plan and safely execute open-flame effects at public and private events. Tazz holds an FEO license, so permits for fire performances can be pulled directly with a city's fire marshal rather than routing through a third party.",
  },
  {
    question: 'Do I need a fire permit for my event in Austin?',
    answer:
      'Most venues and cities require a permit for open-flame performances, including fire dancing and fire breathing. Because Tazz is a licensed FEO, that permit can typically be secured directly with the local fire marshal as part of booking the show.',
  },
  {
    question: 'How far will Tazz travel for a show?',
    answer:
      'Tazz is based in Austin, TX and regularly performs throughout the greater Central Texas area. Reach out with your event location and date to confirm availability.',
  },
  {
    question: 'What types of events is fire performance right for?',
    answer:
      'Fire dancing and flame effects work well for weddings, private parties, corporate events and brand activations, and festivals or other public events — anywhere a visual, high-energy moment fits the program.',
  },
  {
    question: 'How much does it cost to book a fire performer?',
    answer:
      'Pricing depends on the event length, number of props and performers, travel distance, and any permitting needs. Send over your event details through the contact form for an accurate quote.',
  },
]

export default function FAQSection() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="bg-char-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10">
          {FAQS.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="font-heading text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-2 leading-relaxed text-zinc-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  )
}
