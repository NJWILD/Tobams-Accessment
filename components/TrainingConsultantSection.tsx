import Link from 'next/link'

const gridItems = [
  {
    title: 'Expert-Led Learning',
    description:
      'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.',
  },
  {
    title: 'Interactive Workshops',
    description:
      'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.',
  },
  {
    title: 'Comprehensive Curriculum',
    description:
      'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.',
  },
  {
    title: 'Global Recognition',
    description:
      'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.',
  },
]

export default function TrainingConsultantSection() {
  return (
    <section
      className="bg-brand-gray py-16 md:py-20 lg:py-24"
      aria-labelledby="training-consultant-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2
          id="training-consultant-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-purple mb-3 leading-tight"
        >
          Training The Consultant
        </h2>
        <p className="text-brand-purple font-semibold text-base mb-5">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="text-gray-700 text-base leading-relaxed max-w-4xl mb-10">
          With the help of our Training Consultants program, take a revolutionary step toward
          becoming a distinguished certified training consultant. Learn from professionals in the
          field, immerse yourself in a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to gain expertise in
          diverse courses while also developing the abilities to mentor and encourage others in
          their career advancement.
        </p>

        
        <div className="bg-brand-purple rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {gridItems.map((item) => (
            <div key={item.title}>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
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
    </section>
  )
}
