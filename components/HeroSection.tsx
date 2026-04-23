import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[520px] md:h-[600px] lg:h-[680px]" aria-label="Hero">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80"
        alt="Professional working with technology dashboards"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span className="inline-block bg-black/40 text-white text-xs font-semibold tracking-[0.2em] uppercase px-6 py-2.5 rounded-full mb-6">
          WHAT WE DO
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
          Training and Development
        </h1>

        <p className="text-white/70 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden
          knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        <Link
          href="#"
          className="inline-block bg-brand-purple text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-[#3a0830] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}
