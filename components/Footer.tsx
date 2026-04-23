import Link from "next/link";
import TobamsLogo from "./TobamsLogo";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Programme",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-[#1B0517]">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <TobamsLogo variant="light" />
          <p className="text-white/60 text-sm leading-relaxed">
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>

          {/* Social icons */}

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* What We Do */}
        <nav aria-label="What We Do links">
          <h3 className="text-white font-bold text-base mb-5">What We Do</h3>
          <ul className="flex flex-col gap-3">
            {whatWeDo.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-white/60 text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company links">
          <h3 className="text-white font-bold text-base mb-5">Company</h3>
          <ul className="flex flex-col gap-3">
            {company.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-white/60 text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Solution */}
        <nav aria-label="Solution links">
          <h3 className="text-white font-bold text-base mb-5">Solution</h3>
          <ul className="flex flex-col gap-3">
            {solution.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-white/60 text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/*Registered offices */}
      <div className="bg-[#120212] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading */}
          <div className="md:col-span-3 mb-2">
            <h4 className="text-white font-bold text-base">
              Registered Offices
            </h4>
          </div>

          {/* UK */}
          <div>
            <p className="text-brand-coral font-semibold text-sm mb-2">
              United Kingdom
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
              RM1 4QA
            </p>
          </div>

          {/* Nigeria */}
          <div>
            <p className="text-brand-coral font-semibold text-sm mb-2">
              Nigeria
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              RC 1048722 (Registered by the Corporate Affairs Commission)
              <br />
              4, Muaz Close, Angwar-Rimi
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-3">
              Contact Information
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:theteam@tobamsgroup.com"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                theteam@tobamsgroup.com
              </a>
              <a
                href="tel:+447886600748"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                +447886600748
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
