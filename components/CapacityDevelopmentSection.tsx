import Image from 'next/image'
import LightningIcon from './LightningIcon'

const items = [
  'Tailored Training Programs',
  'Expert-Led Workshops',
  'Personalized Mentorship',
  'Technical Skills Enhancement',
  'Collaborative Learning Environment',
  'Ongoing Support and Resources',
]

export default function CapacityDevelopmentSection() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24 border-t border-gray-100"
      aria-labelledby="capacity-development-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2
            id="capacity-development-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight"
          >
            Capacity Development
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-7">
            At Tobams Group, we empower individuals and organizations through tailored training
            programs, expert-led workshops, and personalized mentorship. We are committed to your
            success and growth. We are dedicated to providing a comprehensive suite of benefits
            designed to foster your development and success:
          </p>

          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                <LightningIcon className="w-5 h-5 text-brand-purple flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      
        <div className="relative w-full h-64 md:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&q=80"
            alt="Workshop with facilitator presenting to participants"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
