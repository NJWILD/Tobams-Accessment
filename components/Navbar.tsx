'use client'

import { useState } from 'react'
import Link from 'next/link'
import TobamsLogo from './TobamsLogo'

const navLinks = [
  { label: 'About', href: '#', hasDropdown: true, active: true },
  { label: 'What We Do', href: '#', hasDropdown: true },
  { label: 'Jobs', href: '#', hasDropdown: true },
  { label: 'Projects', href: '#' },
  { label: 'TG Academy', href: '#' },
  { label: 'Strategic Partnership', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Book a Consultation', href: '#' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top row */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" aria-label="Tobams Group home" className="flex-shrink-0">
          <TobamsLogo variant="dark" />
        </Link>

        {/* Desktop right-side actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 bg-brand-purple text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3a0830] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
            Account
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>

          <button
            type="button"
            className="bg-brand-coral text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#d03b3b] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2"
          >
            Take Assessment
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Desktop nav links */}
      <nav aria-label="Main navigation" className="hidden lg:block">
        <ul className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center gap-6 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-brand-purple transition-colors pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded ${
                  link.active ? 'border-b-2 border-brand-purple text-brand-purple' : ''
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-gray-200 bg-white"
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`flex items-center justify-between py-3 px-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${
                    link.active ? 'text-brand-purple' : 'text-gray-800'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA buttons */}
          <div className="flex flex-col gap-3 px-4 pb-5 pt-2 border-t border-gray-100">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full bg-brand-purple text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#3a0830] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              Account
            </button>
            <button
              type="button"
              className="w-full bg-brand-coral text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#d03b3b] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2"
            >
              Take Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}