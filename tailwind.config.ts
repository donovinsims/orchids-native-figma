import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			colors: {
				border: {
					DEFAULT: 'var(--border)',
					subtle: 'var(--border-subtle)',
					strong: 'var(--border-strong)',
				},
				background: {
					DEFAULT: 'var(--background)',
					primary: 'var(--background)',
					secondary: 'var(--background-secondary)',
					tertiary: 'var(--background-tertiary)',
				},
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					tertiary: 'var(--text-tertiary)',
					muted: 'var(--text-muted)',
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				success: 'var(--success)',
				warning: 'var(--warning)',
				error: 'var(--error)',
				info: 'var(--info)',
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
			},
			spacing: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
			},
			borderRadius: {
				none: 'var(--radius-none)',
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				full: 'var(--radius-full)',
			},
			boxShadow: {
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
			},
			fontSize: {
				'display-xl': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
				'display-lg': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
				'h1': ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
				'h2': ['20px', { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '600' }],
				'h3': ['18px', { lineHeight: '1.5', fontWeight: '500' }],
				'h4': ['16px', { lineHeight: '1.6', fontWeight: '500' }],
				'body-md': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
				'body-sm': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
				'label-md': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
				'caption': ['10px', { lineHeight: '1.4', fontWeight: '400' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
