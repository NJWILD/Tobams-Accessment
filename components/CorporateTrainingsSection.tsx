import Image from 'next/image'
import LightningIcon from './LightningIcon'

const trainingItems = [
  'Leadership Training',
  'Strategic Planning and Implementation',
  'Project Management',
  'Sustainability Training',
  'Customised Training',
]

export default function CorporateTrainingsSection() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="corporate-trainings-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2
            id="corporate-trainings-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight"
          >
            Corporate Trainings
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-7">
            Empower your team with our customised Corporate Training programs designed to address
            the unique needs and objectives of your organisation. Our expert facilitators work
            closely with your team to deliver tailored learning experiences that align with your
            company&apos;s goals and values.
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

      
        <div className="relative w-full h-64 md:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
            alt="Corporate training session with presenter and audience"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
