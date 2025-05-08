/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3A5F',      // Deep Navy Blue
        accent: '#C87533',       // Copper Accent
        steelGray: '#58595B',    // Steel Gray
        electricBlue: '#4A90E2', // Electric Blue
        softWhite: '#F5F5F5',    // Soft White
        charcoal: '#2D3142',     // Charcoal
        success: '#2E7D32',      // Success Green
        warning: '#FF8F00',      // Warning Amber
        error: '#D32F2F',        // Error Red
        lightGray: '#E0E0E0',    // Light Gray
        mediumGray: '#9E9E9E',   // Medium Gray
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      boxShadow: {
        'level-1': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'level-2': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'level-3': '0 8px 16px rgba(0, 0, 0, 0.14)',
        'level-4': '0 12px 24px rgba(0, 0, 0, 0.16)',
      },
      transitionDuration: {
        'extraFast': '100ms',
        'fast': '200ms',
        'medium': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
}