/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Espresso Event Site Palette
        'espresso': '#B86B2D',
        'espresso-dark': '#8B4D1E',
        'beige-bg': '#F6F2EE',
        'surface': '#FFFFFF',
        'text-primary': '#0B1720',
        'text-muted': '#6B7276',
        'accent-blue': '#2DA5E8',
        'marker': '#C17D41',
        'footer': '#081221',
        'border': '#E9ECEF',
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'ui-sans-serif', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
      },
      animation: {
        'marker-bounce': 'marker-bounce 0.6s ease-in-out',
        'marker-pulse': 'marker-pulse 0.3s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'slide-up': 'slide-up 0.2s ease-out',
      },
      keyframes: {
        'marker-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'marker-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
