import Image from 'next/image'
import Link from 'next/link'

const courses = [
  'Business Analysis',
  'Design Thinking',
  'Effective Communication',
  'Entrepreneurship',
  'Career Development',
  'Business Model',
]

export default function LearningManagementSection() {
  return (
    <section className="bg-brand-lavender py-16 md:py-20 lg:py-24" aria-labelledby="lms-heading">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Circular image */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
              alt="Two smiling professionals in a business setting"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2
            id="lms-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-purple mb-6 leading-tight"
          >
            Learning Management System
          </h2>

          {/* Info card */}
          <div className="bg-[#D9C9E0] rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-gray-800 text-base leading-relaxed mb-5">
              TG Academy is a hub of knowledge and skill-building resources designed to empower
              tech talents on their learning journey. From technical courses covering the latest
              programming languages and development frameworks to soft skills training in
              leadership, effective communication and project management, TG Academy offers a wide
              range of courses to cater to diverse learning needs. With accessible and interactive
              learning materials, individuals can enhance their skills and stay ahead in
              today&apos;s competitive tech landscape.
            </p>

            <p className="font-bold text-brand-purple mb-4">Some of our courses include:</p>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-gray-800 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0" aria-hidden="true" />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-brand-purple text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-[#3a0830] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
          >
            Learn More
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
