import Image from 'next/image'
import LightningIcon from './LightningIcon'

const trainingItems = [
  'Leadership Development',
  'Soft Skills Development',
  'Industry Specific Knowledge',
  'Technical Skills Enhancement',
  'Time Management and Productivity',
  'Career Development',
]

export default function PersonalisedTrainingSection() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24 border-t border-gray-100"
      aria-labelledby="personalised-training-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image – shown first on mobile, left on desktop */}
        <div className="relative w-full h-64 md:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-md order-first">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80"
            alt="Women engaged in a professional training meeting"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div>
          <h2
            id="personalised-training-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight"
          >
            Personalised Individual Training
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-7">
            Begin a journey of lifelong learning and professional development with Tobams
            Group&apos;s diverse range of training programs for individuals. From technical skills
            mastery to soft skills enhancement, our courses cover a wide spectrum of topics to
            meet the evolving needs of today&apos;s professionals.
          </p>

          <ul className="flex flex-col gap-3">
            {trainingItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                <LightningIcon className="w-5 h-5 text-brand-purple flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
