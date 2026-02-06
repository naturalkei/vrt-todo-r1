import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Baloo 2', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        'bubbly': ['Baloo 2', 'cursive'],
        'korean': ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        // Animal Crossing Pastel Palette
        'acnh': {
          'cream': '#FFF8E7',
          'cream-dark': '#FFE4BC',
          'mint': '#B8E6D5',
          'mint-dark': '#8ED3B8',
          'sky': '#C9E4F5',
          'sky-dark': '#A5D3F0',
          'peach': '#FFD5C2',
          'peach-dark': '#FFBB9F',
          'yellow': '#FFF4A3',
          'yellow-dark': '#FFE87C',
          'brown': '#8B6F47',
          'brown-dark': '#6B5434',
          'green': '#7EC850',
          'green-dark': '#5FA732',
        },
      },
      borderRadius: {
        'bubble': '2rem',
        'bubbly': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(0, 0, 0, 0.08)',
        'bubble': '0 6px 20px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config