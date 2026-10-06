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
          DEFAULT: '#F8F6F1', // Primary warm cream background (travertine plaster)
          soft: '#F0EBE1',    // Secondary warmer cream for alternating panels & sections
          card: '#FFFFFF',    // Crisp elevated white card for sharp tactile definition
          border: '#E2DBD0',  // Warm limestone hairline border
        },
        gold: {
          DEFAULT: '#9E783E', // Rich burnished antique gold (contrasts with cream & white)
          light: '#B69255',   // Brighter warm gold accent
          dark: '#7A5A2B',    // Deep bronze tone
          subtle: 'rgba(158, 120, 62, 0.12)', // Soft gold tint for pills and highlights
        },
        plaster: {
          DEFAULT: '#1B1917', // Deep warm charcoal/ebony for high-contrast, editorial typography
          muted: '#54504A',   // Warm graphite for paragraphs & subheadings
          dim: '#857F76',     // Soft stone tone for captions, metadata & disclaimers
        },
      },
      fontFamily: {
        serif: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-glow': 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
