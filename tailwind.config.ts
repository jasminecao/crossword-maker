import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        accentBackground: 'var(--accent-background)',
        accentBackgroundLight: 'var(--accent-background-light)',
      },
      textColor: {
        DEFAULT: '#1d1616',
        accentText: 'var(--accent-text)',
      },
    },
  },
  plugins: [],
} satisfies Config
