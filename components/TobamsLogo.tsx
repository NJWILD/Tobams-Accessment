interface TobamsLogoProps {
  variant?: 'dark' | 'light'
}

export default function TobamsLogo({ variant = 'dark' }: TobamsLogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#4B0B3C'

  return (
    <svg
      viewBox="0 0 160 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-auto"
      aria-label="Tobams Group"
    >
      {/* Overlapping circles cluster */}
      <circle cx="22" cy="20" r="13" fill="#E84545" fillOpacity="0.95" />
      <circle cx="34" cy="12" r="13" fill="#9B1B5A" fillOpacity="0.95" />
      <circle cx="34" cy="34" r="13" fill="#C41E3A" fillOpacity="0.9" />

      {/* TOBAMS GROUP text */}
      <text
        x="56"
        y="24"
        fontFamily="inherit"
        fontWeight="800"
        fontSize="15"
        fill={textColor}
        letterSpacing="1"
      >
        TOBAMS
      </text>
      <text
        x="56"
        y="42"
        fontFamily="inherit"
        fontWeight="800"
        fontSize="15"
        fill={textColor}
        letterSpacing="1"
      >
        GROUP
      </text>
    </svg>
  )
}
