import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mint Protocol Mappings (Inverted for Dark Theme)
        white: 'var(--color-ivory)',
        ghost: 'var(--color-obsidian)',
        mist: 'var(--color-charcoal)',
        teal: 'var(--color-amber)',
        mint: 'var(--color-ember)',
        slate: 'var(--color-ivory-muted)',
        ink: 'var(--color-ivory)',
        
        // Projects UI Mappings (Material)
        "on-primary-fixed": "var(--color-obsidian)",
        "tertiary-container": "var(--color-spark)",
        "on-error": "var(--color-obsidian)",
        "on-tertiary-fixed": "var(--color-obsidian)",
        "tertiary": "var(--color-spark)",
        "outline-variant": "var(--color-stone)",
        "on-surface": "var(--color-ivory)",
        "primary-fixed": "var(--color-ember)",
        "surface-tint": "var(--color-ember)",
        "error-dim": "var(--color-ember)",
        "on-error-container": "var(--color-obsidian)",
        "secondary-container": "var(--color-amber)",
        "surface-variant": "var(--color-stone)",
        "surface-bright": "var(--color-charcoal)",
        "error-container": "var(--color-ember)",
        "secondary-fixed": "var(--color-amber)",
        "primary-fixed-dim": "var(--color-ember)",
        "surface": "var(--color-charcoal)",
        "on-secondary-fixed": "var(--color-obsidian)",
        "primary-container": "var(--color-ember)",
        "on-secondary": "var(--color-obsidian)",
        "secondary-dim": "var(--color-amber)",
        "on-secondary-fixed-variant": "var(--color-obsidian)",
        "outline": "var(--color-stone)",
        "primary": "var(--color-ember)",
        "inverse-on-surface": "var(--color-obsidian)",
        "on-secondary-container": "var(--color-obsidian)",
        "surface-container-lowest": "var(--color-obsidian)",
        "on-tertiary-fixed-variant": "var(--color-obsidian)",
        "on-primary-fixed-variant": "var(--color-obsidian)",
        "secondary": "var(--color-amber)",
        "tertiary-fixed-dim": "var(--color-spark)",
        "surface-container-highest": "var(--color-stone)",
        "on-surface-variant": "var(--color-ivory-muted)",
        "primary-dim": "var(--color-amber)",
        "on-tertiary": "var(--color-obsidian)",
        "inverse-surface": "var(--color-ivory)",
        "tertiary-fixed": "var(--color-spark)",
        "surface-container": "var(--color-charcoal)",
        "tertiary-dim": "var(--color-spark)",
        "on-primary": "var(--color-obsidian)",
        "error": "var(--color-ember)",
        "surface-container-high": "var(--color-stone)",
        "on-background": "var(--color-ivory)",
        "on-primary-container": "var(--color-obsidian)",
        "surface-dim": "var(--color-obsidian)",
        "background": "var(--color-obsidian)",
        "surface-container-low": "var(--color-obsidian)",
        "inverse-primary": "var(--color-ember)",
        "secondary-fixed-dim": "var(--color-amber)",
        "on-tertiary-container": "var(--color-obsidian)"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Inter"],
        "label": ["Space Grotesk"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
 
export default config
