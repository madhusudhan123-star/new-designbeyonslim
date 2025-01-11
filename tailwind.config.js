module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif': ['"DM Serif Text"', 'serif'],
      },
      colors: {
        primary: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        scrollLeft: 'scrollLeft 30s linear infinite',
        scrollRight: 'scrollRight 30s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-logical'),
  ],
};
