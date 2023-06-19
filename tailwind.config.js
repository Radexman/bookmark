/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	theme: {
		extend: {
			colors: {
				softBlue: 'hsl(231, 69%, 60%)',
				softRed: 'hsl(0, 94%, 66%)',
				grayishBlue: 'hsl(229, 8%, 60%)',
				veryDarkBlue: 'hsl(229, 31%, 21%)',
			},
			screens: {
				sm: '375px',
				lg: '1440px',
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
