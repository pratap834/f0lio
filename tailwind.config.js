/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        primary: '#090909',
        secondary: '#0D0D0D',
        surface: '#121212',
        'surface-hover': '#181818',
        'text-primary': '#F2F2F2',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
        border: '#262626',
        'border-subtle': '#1F1F1F',
        accent: '#E5E5E5',
        'accent-cyan': '#00ADB5',
        'border-glow': 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
