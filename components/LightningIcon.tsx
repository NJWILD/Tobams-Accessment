interface LightningIconProps {
  className?: string
}

export default function LightningIcon({ className = '' }: LightningIconProps) {
  return (
    <svg
      viewBox="0 0 22 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.5 0.5L2 9H5.5L3.5 17.5L9.5 8.5H6L6.5 0.5Z" />
      <path d="M14.5 0.5L10 9H13.5L11.5 17.5L17.5 8.5H14L14.5 0.5Z" />
    </svg>
  )
}
