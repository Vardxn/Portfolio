import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Typography Scale - Consistent heading and body text sizes
      fontSize: {
        // Headings
        'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],      // 48px - Main hero titles
        'heading-2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],    // 40px - Section titles
        'heading-3': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],      // 32px - Subsection titles
        'heading-4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],    // 24px - Card titles
        'heading-5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],   // 20px - Small headings
        
        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],                      // 18px - Large body
        'body': ['1rem', { lineHeight: '1.75' }],                             // 16px - Default body
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],                       // 14px - Small text
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],                        // 12px - Extra small
      },
      
      // Color Palette - Space theme with consistent accents
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#7042F8',
          light: '#9F7AEA',
          dark: '#5B34C7',
        },
        accent: {
          cyan: '#06B6D4',
          purple: '#A855F7',
          pink: '#EC4899',
        },
      },
      
      // Spacing Scale - Consistent spacing units
      spacing: {
        'section': '5rem',         // 80px - Between major sections
        'section-sm': '3rem',      // 48px - Smaller section gaps
        'container': '8rem',       // 128px - Container padding on large screens
      },
      
      // Background gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #7042F8, #06B6D4)',
        'gradient-accent': 'linear-gradient(to right, #A855F7, #06B6D4)',
      },
      
      // Drop shadows for glow effects
      dropShadow: {
        'glow': '0 0 8px rgba(112, 66, 248, 0.8)',
        'glow-cyan': '0 0 8px rgba(6, 182, 212, 0.8)',
        'glow-lg': '0 0 16px rgba(112, 66, 248, 0.6)',
      },
      
      // Container max widths for readability
      maxWidth: {
        'content': '65ch',         // Optimal line length for reading
      },
    },
  },
  plugins: [],
}
export default config
