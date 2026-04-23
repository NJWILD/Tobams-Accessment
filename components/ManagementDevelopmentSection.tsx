import Image from 'next/image'
import LightningIcon from './LightningIcon'

const pillItems = [
  'Enhanced Leadership Skills',
  'Improved Employee Engagement',
  'Stronger Organisational Culture',
  'Sustainable Growth',
]

export default function ManagementDevelopmentSection() {
  return (
    <section
      className="bg-[#3D0A28] py-16 md:py-20 lg:py-24"
      aria-labelledby="management-dev-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative w-full h-72 md:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl order-first lg:order-first">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
            alt="Three professionals collaborating with a tablet device"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      
        <div>
          <h2
            id="management-dev-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            Management Development Program
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-4">
            Tobams Group offers a comprehensive Management Development Program designed to equip
            corporate organisations with the high-performing leaders they need to thrive.
          </p>
          <p className="text-white/80 text-base leading-relaxed mb-8">
            Our program includes workshops, seminars, coaching sessions, online courses, and
            experiential learning opportunities designed to improve leadership, strategic thinking,
            communication, and other essential managerial competencies for corporate organisations.
          </p>

          <ul className="flex flex-col gap-3">
            {pillItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-[#5B1245] text-white px-5 py-3.5 rounded-full text-sm font-medium"
              >
                <LightningIcon className="w-5 h-5 text-white flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
