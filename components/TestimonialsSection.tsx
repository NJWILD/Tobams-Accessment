'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Aisha Yusuf',
    role: 'Founder, CraftHub NG',
    quote:
      'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'John Davies',
    role: 'Marketing Manager, E-Commerce Emporium',
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: 'https://i.pravatar.cc/80?img=33',
  },
  {
    name: 'Chinonso Nwankwo',
    role: 'HR Director, FutureTech Solutions',
    quote:
      'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
    avatar: 'https://i.pravatar.cc/80?img=48',
  },
  {
    name: 'Emeka Obi',
    role: 'CEO, BuildRight Lagos',
    quote:
      'The training programs offered by Tobams Group transformed how our team approaches leadership. The quality of facilitators and the curriculum exceeded our expectations.',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handlePrev = () => {
    const newIndex = Math.max(index - 1, 0)
    setIndex(newIndex)
    cardRefs.current[newIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  const handleNext = () => {
    const newIndex = Math.min(index + 1, testimonials.length - 1)
    setIndex(newIndex)
    cardRefs.current[newIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  return (
    <section
      className="bg-brand-gray py-12 md:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10 md:mb-12"
        >
          Testimonials
        </h2>

        {/* Scroll container */}
        <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5 pb-2 mb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => { cardRefs.current[i] = el }}
              className="snap-start flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <article
                className="bg-white border border-gray-200 border-l-[4px] border-l-brand-coral rounded-xl p-6 flex flex-col gap-4 shadow-sm h-full"
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={`Photo of ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{t.quote}</p>
              </article>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-3">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border-2 border-brand-coral text-brand-coral flex items-center justify-center hover:bg-brand-coral hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={index === testimonials.length - 1}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border-2 border-brand-coral text-brand-coral flex items-center justify-center hover:bg-brand-coral hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}