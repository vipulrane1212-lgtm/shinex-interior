import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          primary: "var(--color-canvas-primary, #FBF9F5)",
          secondary: "var(--color-canvas-secondary, #F3EFE6)",
        },
        card: {
          surface: "var(--color-card-surface, #FFFFFF)",
          muted: "var(--color-card-muted, #F8F6F0)",
        },
        border: {
          subtle: "var(--color-border-subtle, #EDE7DC)",
          strong: "var(--color-border-strong, #DDD5C7)",
          divider: "var(--color-divider, #EAE3D5)",
        },
        text: {
          primary: "var(--color-text-primary, #181615)",
          secondary: "var(--color-text-secondary, #5E5952)",
          muted: "var(--color-text-muted, #8C8479)",
        },
        champagne: {
          base: "var(--color-champagne-base, #C8A97E)",
          hover: "var(--color-champagne-hover, #B69566)",
          light: "var(--color-champagne-light, #F7F1E6)",
          border: "var(--color-champagne-border, #E5D2BA)",
        },
        google: {
          star: "var(--color-google-star, #F59E0B)",
        },
        success: {
          DEFAULT: "var(--color-success, #3A6B56)",
          emerald: "var(--color-success, #3A6B56)",
        },
      },
      fontFamily: {
        editorial: ["var(--font-cormorant)", "'Cormorant Garamond'", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "'Cormorant Garamond'", "var(--font-playfair)", "'Playfair Display'", "Georgia", "serif"],
        script: ["var(--font-calligraphy)", "'Pinyon Script'", "'Italianno'", "cursive"],
        calligraphy: ["var(--font-calligraphy)", "'Pinyon Script'", "cursive"],
        display: ["var(--font-cinzel)", "Cinzel", "var(--font-playfair)", "Playfair Display", "serif"],
        heading: ["var(--font-cormorant)", "'Cormorant Garamond'", "var(--font-playfair)", "'Playfair Display'", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "'Plus Jakarta Sans'", "var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        italiana: ["var(--font-italiana)", "'Italiana'", "serif"],
      },
      boxShadow: {
        'soft-luxury': '0 10px 30px -10px rgba(24, 22, 21, 0.05), 0 2px 8px -2px rgba(24, 22, 21, 0.03)',
        'luxury-hover': '0 20px 45px -15px rgba(24, 22, 21, 0.09), 0 6px 16px -4px rgba(200, 169, 126, 0.12)',
        'card-depth': '0 4px 20px -2px rgba(24, 22, 21, 0.04)',
        'glow-champagne': '0 0 28px -4px rgba(200, 169, 126, 0.4)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9', boxShadow: '0 0 0 0 rgba(200, 169, 126, 0.6)' },
          '50%': { transform: 'scale(1.05)', opacity: '1', boxShadow: '0 0 0 12px rgba(200, 169, 126, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'shimmer': 'shimmer 3s infinite linear',
      },
    },
  },
  plugins: [],
};
export default config;
