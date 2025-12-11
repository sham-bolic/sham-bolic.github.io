import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'sans-serif'],
			},
			scrollbar: {
				none: {
					'&::-webkit-scrollbar': { display: 'none' },
					'-ms-overflow-style': 'none' /* IE/Edge */,
					'scrollbar-width': 'none' /* Firefox */,
				},
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primarybg: '#49392C',
				secondarybg: '#2e241c',
				tertiarybg: '#453629',
				primarytext: '#f4ebd9',
				secondarytext: '#82bdae',
				// Modern neutral color palette
				neutral: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#A3A3A3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				},
				warm: {
					50: '#FEFCFB',
					100: '#FDF8F6',
					200: '#F7E6D7',
					300: '#F0D0B4',
					400: '#E8B887',
					500: '#D69E2E',
					600: '#B7791F',
					700: '#975A16',
					800: '#744210',
					900: '#5F370E',
				},
				accent: {
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#BAE6FD',
					300: '#7DD3FC',
					400: '#38BDF8',
					500: '#0EA5E9',
					600: '#0284C7',
					700: '#0369A1',
					800: '#075985',
					900: '#0C4A6E',
				},
				// Keeping some coffee theme but more subtle
				latte: {
					50: '#FAFAF9',
					100: '#F5F5F4',
					200: '#E7E5E4',
				},
				cream: {
					100: '#FFFBF7',
				},
				mocha: {
					700: '#78716C',
					800: '#57534E',
					900: '#44403C',
				},
				coffee: {
					800: '#78716C',
				},
				chai: {
					400: '#A8A29E',
					600: '#78716C',
					700: '#57534E',
					800: '#44403C',
				},
				border: '#E7E5E4',
			},
			keyframes: {
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				blink: {
					'0%, 100%': { visibility: 'visible' },
					'50%': { visibility: 'hidden' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'33%': { transform: 'translate(30px, -30px)' },
					'66%': { transform: 'translate(-20px, 20px)' },
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 1s ease-out both',
				blink: 'blink 1s steps(1, start) infinite',
				float: 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 20s ease-in-out infinite',
			},
			transitionDelay: {
				'100': '100ms',
				'200': '200ms',
				'300': '300ms',
				'400': '400ms',
				'500': '500ms',
				'600': '600ms',
				'700': '700ms',
				'800': '800ms',
				'900': '900ms',
				'1000': '1000ms',
			},
			borderRadius: {
				half: '8rem',
			},
		},
	},
	plugins: [],
} satisfies Config;
