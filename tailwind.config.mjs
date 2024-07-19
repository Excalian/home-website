import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#d0c6c4', 600: '#7e6560', 900: '#3a2f2d', 950: '#292221' };
const gray = { 100: '#f5f6fa', 200: '#ebedf6', 300: '#bfc1cc', 400: '#868a9e', 500: '#535769', 700: '#343748', 800: '#232635', 900: '#16181f' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};