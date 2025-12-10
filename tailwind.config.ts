import type { Config } from 'tailwindcss';
import TailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Shades (Grayscale)
        shade: {
          '01': 'var(--shade-01)',
          '02': 'var(--shade-02)',
          '03': 'var(--shade-03)',
          '04': 'var(--shade-04)',
          '05': 'var(--shade-05)',
          '06': 'var(--shade-06)',
          '07': 'var(--shade-07)',
          '08': 'var(--shade-08)',
          '09': 'var(--shade-09)',
          '10': 'var(--shade-10)',
        },
        // Primary Colors
        'primary-01': 'var(--primary-01)',
        'primary-02': 'var(--primary-02)',
        'primary-03': 'var(--primary-03)',
        'primary-04': 'var(--primary-04)',
        'primary-05': 'var(--primary-05)',
        // Secondary Colors
        'secondary-01': 'var(--secondary-01)',
        'secondary-02': 'var(--secondary-02)',
        'secondary-03': 'var(--secondary-03)',
        'secondary-04': 'var(--secondary-04)',
        'secondary-05': 'var(--secondary-05)',
        // Legacy compatibility
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      // Semantic Background Colors
      backgroundColor: {
        'b-surface1': 'var(--b-surface1)',
        'b-surface2': 'var(--b-surface2)',
        'b-surface3': 'var(--b-surface3)',
        'b-pop': 'var(--b-pop)',
        'b-highlight': 'var(--b-highlight)',
        'b-primary': 'var(--b-primary)',
        'b-dark1': 'var(--b-dark1)',
        'b-dark2': 'var(--b-dark2)',
      },
      // Semantic Text Colors
      textColor: {
        't-primary': 'var(--t-primary)',
        't-secondary': 'var(--t-secondary)',
        't-tertiary': 'var(--t-tertiary)',
        't-light': 'var(--t-light)',
        't-blue': 'var(--t-blue)',
      },
      // Semantic Fill Colors (for SVGs)
      fill: {
        't-primary': 'var(--t-primary)',
        't-secondary': 'var(--t-secondary)',
        't-light': 'var(--t-light)',
      },
      // Semantic Border Colors
      borderColor: {
        's-stroke2': 'var(--s-stroke2)',
        's-highlight': 'var(--s-highlight)',
        's-subtle': 'var(--s-subtle)',
        's-border': 'var(--s-border)',
        's-focus': 'var(--s-focus)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [TailwindcssAnimate],
} satisfies Config;
