# Tobams Group – Training & Development Page

A pixel-perfect static implementation of the Tobams Group Training and Development page built with Next.js 14 (App Router) and Tailwind CSS v3.

## Live URL

> **[https://tobamsaccessment.vercel.app/](https://tobamsaccessment.vercel.app/)**


## Stack

- **Framework** — Next.js 14 with App Router
- **Styling** — Tailwind CSS v3 (no other CSS framework)
- **Fonts** — Google Fonts via `next/font/google` (Nunito)
- **Images** — `next/image` with Unsplash placeholder images
- **Language** — TypeScript

## Project Structure

```
/app
  layout.tsx      – Root layout with font and metadata
  page.tsx        – Page entry, assembles all sections
  globals.css     – Tailwind directives only

/components
  Navbar.tsx                    – Sticky two-row header with mobile hamburger
  HeroSection.tsx               – Full-width hero with dark overlay
  LearningManagementSection.tsx – Circular image + course list on lavender bg
  CorporateTrainingsSection.tsx – Text + image, lightning bolt list
  PersonalisedTrainingSection.tsx
  CapacityDevelopmentSection.tsx
  ManagementDevelopmentSection.tsx – Dark maroon section with pill features
  TransformationHubSection.tsx  – Pink card with CEO webinar info
  TrainingConsultantSection.tsx – 2x2 dark grid on light gray bg
  CTABanner.tsx                 – Dark purple CTA with outlined button
  TestimonialsSection.tsx       – 3-card carousel with prev/next arrows
  CTABanner2.tsx                – "Let's work together" dark banner
  Footer.tsx                    – 4-column footer with offices and contacts
  LightningIcon.tsx             – Reusable double lightning bolt SVG
  TobamsLogo.tsx                – Inline SVG logo, supports dark/light variant
```

## Design Decisions

**Images** — The Figma design uses licensed stock photography. Free Unsplash images were used as substitutes that match the subject matter closely (professionals, training rooms, workshops). All images use `next/image` with correct `sizes` attributes and `priority` on the hero for LCP.

**Logo** — Recreated as an inline SVG component to avoid any external asset dependency. Supports a `variant` prop (`dark` or `light`) so it renders correctly on both white and dark backgrounds.

**Lightning bolt icon** — The double-bolt icon used throughout the page as list bullets was recreated as a reusable `LightningIcon` component from the design reference.

**Navbar dropdowns** — The Figma only shows the static page design, not the expanded dropdown states, so dropdown functionality was not implemented. The chevron icons are present as visual indicators.

**Responsive breakpoints** — Tailwind's built-in `sm:`, `md:`, and `lg:` prefixes are used exclusively throughout. No custom `@media` queries were added, as Tailwind's default breakpoints (640px, 768px, 1024px, 1280px) cover all required widths (425px mobile, 768px tablet, 1280px+ desktop).

## Figma Reference

[Frontend Intern Assessment – Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1)

## AI Disclosure

This project was built with the assistance of DeepSeek AI. Disclosed here per assessment requirements.
