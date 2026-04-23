import Image from 'next/image'
import Link from 'next/link'
import LightningIcon from './LightningIcon'

const featureCards = [
  'Strategic Career Guidance',
  'Leadership Development',
  'CV Development',
  'Sustainability Leadership',
  'Communication Skills',
  'Business Model',
]

export default function TransformationHubSection() {
  return (
    <section
      className="bg-brand-pink py-12 md:py-20 lg:py-24"
      aria-labelledby="transformation-hub-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="bg-[#FFD9DB] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">

          <p className="text-blue-600 italic font-semibold text-sm sm:text-base mb-2">
            Learning With Our CEO:
          </p>

          <h2
            id="transformation-hub-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold italic text-brand-purple mb-4 md:mb-6 leading-tight"
          >
            Transformation Hub With Jite Newton
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-8 md:mb-10">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO,
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities,
            this exclusive event offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your career or enhance your
            leadership skills, the Transformation Hub provides a transformative learning experience
            to unlock your full potential and drive success in your endeavours.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Image */}
            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[340px] rounded-xl md:rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80"
                alt="Woman with digital and futuristic background representing the Transformation Hub"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Feature cards + button */}
            <div className="flex flex-col gap-5 md:gap-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureCards.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3.5 shadow-sm text-gray-800 text-sm font-medium"
                  >
                    <LightningIcon className="w-4 h-4 text-brand-purple flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className="inline-flex items-center gap-2 self-start bg-brand-purple text-white px-6 py-3 md:px-7 md:py-3.5 rounded-lg font-semibold text-sm md:text-base hover:bg-[#3a0830] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
              >
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}