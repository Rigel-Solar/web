export const theme = {
	colors: {
		brand: {
			tiffany: "#3EB3BE",
			tiffany_dark: "#218891",
			white: "#FFFFFF",
			black: "#121212",
			background: "#0D0C0D",
			pink: "#FF175B",
			rigel: "#0066D2",
			modal: "#09090B",
		},
		support: {
			support_01: "#BEDCE4",
			support_02: "#DEF8CB",
			support_03: "#FF8E29",
			success: "#66D36F",
			error: "#E14141",
			error_02: "#b81d1d",
			warning: "#F9D934",
			green_dark: '#2C372A',
			green_light: '#A3E635',
			//light
			support_01_light: "#FBFDFD",
			support_02_light: "#FDFFFC",
			support_03_light: "#FFF8F2",
			support_04: "#354ecc",
			success_light: "#B3FFB9",
			error_light: "#FCECEC",
			warning_light: "#FEFBEB",
			//dark
			support_01_dark: "#3c7585",
			support_02_dark: "#6ea348",
		},
		grayscale: {
			gray_05: "#FAFAFA",
			gray_10: "#E9EAEA",
			gray_20: "#D3D5D5",
			gray_30: "#BCC0C1",
			gray_40: "#A6ABAC",
			gray_50: "#909797",
			gray_60: "#7A8282",
			gray_70: "#646D6D",
			gray_80: "#4D5859",
			gray_90: "#374344",
		},
		animation: {
			//skeleton
			skeleton_100: "rgba(255, 255, 255, 0)",
			skeleton_50: "rgba(255, 255, 255, 0.5)",
			skeleton_base: "#ededed",
			skeleton_bg: "#f9f9f9",
		},
	},

	font: {
		h1: [
			"font: 3em 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.2em;",
		],
		h2: [
			"font: 2.4em 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.2em; ",
		],
		h3: [
			"font: 1.5em 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.2em; ",
		],
		p: {
			//normal
			large: [
				"font: 1.3em 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.2em;",
			],
			medium: [
				"font: 1.2em  'Ubuntu', sans-serif; font-weight: 400; line-height: 1.2em;",
			],
			normal: [
				"font: 1em 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.3em;",
			],
			small: [
				"font: 0.9em 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.2em;",
			],
			extra_small: [
				"font: 0.8em 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.2em;",
			],
			//bold
			large_bold: [
				"font: 1.3em 'Ubuntu', sans-serif; font-weight: 700; line-height: 1.2em;",
			],
			medium_bold: [
				"font: 1.2em 'Ubuntu', sans-serif; font-weight: 700; line-height: 1.2em;",
			],
			normal_bold: [
				"font: 1em 'Ubuntu', sans-serif; font-weight: 700; line-height: 1.3em;",
			],
			small_bold: [
				"font: 0.9em 'Ubuntu', sans-serif; font-weight: 700; line-height: 1.2em;",
			],
			extra_small_bold: [
				"font: 0.8em 'Ubuntu', sans-serif; font-weight: 700; line-height: 1.2em;",
			],
		},
	},
};

export type Theme = typeof theme;
