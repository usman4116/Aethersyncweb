import type { Config } from 'tailwindcss';

/**
 * Every colour, radius and font here resolves to a CSS custom property defined
 * in `app/globals.css`, so theming happens in one place and the `.light` class
 * swaps the whole system. Avoid hardcoded hex/slate values in components.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
          fg: 'rgb(var(--color-on-primary) / <alpha-value>)',
        },
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',

        background: {
          DEFAULT: 'rgb(var(--background) / <alpha-value>)',
          secondary: 'rgb(var(--background-secondary) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
          hover: 'rgb(var(--surface-hover) / <alpha-value>)',
        },

        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        /* enables `text-text-secondary`, used across the existing components */
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',

        border: {
          DEFAULT: 'rgb(var(--border-color) / var(--border-opacity))',
          strong: 'rgb(var(--border-color) / var(--border-opacity-strong))',
        },

        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
      },

      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },

      /* Responsive type scale — replaces the ad-hoc text-[10px]/text-[11px] set */
      fontSize: {
        micro: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
        label: ['0.75rem', { lineHeight: '1.1rem', letterSpacing: '0.01em' }],
        body: ['0.9375rem', { lineHeight: '1.65rem' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.75rem' }],
        'heading-sm': ['clamp(1.125rem, 1rem + 0.5vw, 1.375rem)', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        heading: ['clamp(1.5rem, 1.2rem + 1.1vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.875rem, 1.4rem + 1.8vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.028em' }],
        display: ['clamp(2.25rem, 1.6rem + 2.8vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.032em' }],
        'display-lg': ['clamp(2.75rem, 1.7rem + 4.2vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.038em' }],
      },

      maxWidth: {
        prose: '68ch',
        shell: '80rem',
      },

      transitionTimingFunction: {
        cine: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      boxShadow: {
        hair: 'inset 0 1px 0 0 rgb(255 255 255 / 0.05)',
        ember: '0 10px 40px -12px rgb(var(--color-primary) / 0.35)',
        lift: '0 20px 60px -24px rgb(0 0 0 / 0.55)',
        panel: '0 1px 2px rgb(0 0 0 / 0.2), 0 24px 70px -30px rgb(0 0 0 / 0.65)',
      },

      backgroundImage: {
        'ember-sweep':
          'linear-gradient(100deg, rgb(var(--color-primary)), rgb(var(--color-secondary)))',
        'hair-grid':
          'linear-gradient(to right, rgb(var(--border-color) / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border-color) / 0.06) 1px, transparent 1px)',
        /* Cinematography: 35mm grain, generated once as fractal noise. */
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },

      animation: {
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        marquee: 'marquee 42s linear infinite',
        caret: 'caret-blink 1.1s steps(1) infinite',
        /* Background cinematography */
        drift: 'drift 32s ease-in-out infinite',
        'drift-slow': 'drift 52s ease-in-out infinite',
        grain: 'grain 1.1s steps(6) infinite',
        scan: 'scan 9s linear infinite',
        'grid-pan': 'gridPan 26s linear infinite',
      },

      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        /* Slow parallax wander for the ambient light fields */
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)', opacity: '0.75' },
          '35%': { transform: 'translate3d(4%, -6%, 0) scale(1.12)', opacity: '1' },
          '70%': { transform: 'translate3d(-5%, 4%, 0) scale(1.04)', opacity: '0.62' },
        },
        /* Jitters the noise texture so grain reads as film, not a static overlay */
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-3%, -4%)' },
          '25%': { transform: 'translate(-8%, 3%)' },
          '40%': { transform: 'translate(4%, -6%)' },
          '55%': { transform: 'translate(-2%, 7%)' },
          '70%': { transform: 'translate(6%, 2%)' },
          '85%': { transform: 'translate(-5%, -2%)' },
        },
        /* One slow light sweep down the frame */
        scan: {
          '0%': { transform: 'translateY(-60vh)' },
          '100%': { transform: 'translateY(110vh)' },
        },
        gridPan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '64px 64px' },
        },
      },

      blur: {
        '4xl': '120px',
        '5xl': '180px',
      },

      zIndex: {
        grain: '70',   /* above content + nav, below the terms modal */
      },
    },
  },
  plugins: [],
};
export default config;
