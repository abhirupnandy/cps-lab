/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        // make default font roboto
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
		extend: {
            colors: {
                'accent-1': '#333',
            },
        },
	},
	plugins: [],
}
