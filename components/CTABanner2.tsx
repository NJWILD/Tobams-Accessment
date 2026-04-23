import Link from 'next/link'

export default function CTABanner2() {
  return (
    <section
      className="bg-[#3D0A28] py-14 md:py-16"
      aria-label="Call to action – get in touch"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-white/70 text-base mb-2">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Let's work together to create a difference
          </h2>
        </div>

        <Link
          href="#"
          className="flex-shrink-0 inline-block border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-white hover:text-[#3D0A28] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3D0A28]"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  )
}
