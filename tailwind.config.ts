import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4B0B3C',
        'brand-dark': '#2D0828',
        'brand-coral': '#E84545',
        'brand-lavender': '#EDE3EE',
        'brand-pink': '#FFD9DB',
        'brand-gray': '#F0ECF2',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [],
}

export default config
