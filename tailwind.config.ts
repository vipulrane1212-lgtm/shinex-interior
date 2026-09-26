import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0B',
          soft: '#121214',
          card: '#18181B',
          border: '#27272A',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#E5D4BA',
          dark: '#9F8052',
          subtle: 'rgba(197, 168, 128, 0.15)',
        },
        plaster: {
          DEFAULT: '#F5F5F7',
          muted: '#A1A1AA',
          dim: '#71717A',
        },
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-glow': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
