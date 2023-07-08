/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Inter', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
