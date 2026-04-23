import Link from 'next/link'

export default function CTABanner() {
  return (
    <section
      className="bg-brand-dark py-14 md:py-16"
      aria-label="Call to action – book a consultation"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center text-center gap-8">
        <p className="text-white text-xl md:text-2xl font-semibold max-w-2xl leading-relaxed">
          Want to accelerate professional growth and development at your organisation?{' '}
          <span className="block">See how we can help.</span>
        </p>

        <Link
          href="#"
          className="inline-block border-2 border-white text-white px-10 py-3.5 rounded-lg font-semibold text-base hover:bg-white hover:text-brand-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}
