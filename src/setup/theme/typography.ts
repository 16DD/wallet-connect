// ----------------------------------------------------------------------

function pxToRem(value: number) {
	return `${value / 16}rem`;
}

function responsiveFontSizes({ xs, sm, md, lg }: { xs: number; sm: number; md: number; lg: number }) {
	return {
		"@media(max-width: 600px)": {
			fontSize: pxToRem(xs),
		},
		"@media (min-width:600px)": {
			fontSize: pxToRem(sm),
		},
		"@media (min-width:960px)": {
			fontSize: pxToRem(md),
		},
		"@media (min-width:1280px)": {
			fontSize: pxToRem(lg),
		},
	};
}

const FONT_PRIMARY = "Montserrat, sans-serif"; // Google Font

const typography = {
	fontFamily: FONT_PRIMARY,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
	h1: {
		fontWeight: 400,
		lineHeight: 80 / 64,
		fontSize: pxToRem(40),
		...responsiveFontSizes({ xs: 48, sm: 52, md: 58, lg: 64 }),
	},
	h2: {
		fontWeight: 400,
		lineHeight: 64 / 48,
		fontSize: pxToRem(32),
		...responsiveFontSizes({ xs: 32, sm: 36, md: 40, lg: 42 }),
	},
	h3: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ xs: 22, sm: 26, md: 30, lg: 32 }),
	},
	h4: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ xs: 16, sm: 20, md: 24, lg: 28 }),
	},
	h5: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ xs: 14, sm: 16, md: 18, lg: 20 }),
	},
	h6: {
		fontWeight: 400,
		lineHeight: 28 / 18,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ xs: 14, sm: 14, md: 16, lg: 18 }),
	},
	subtitle1: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	subtitle2: {
		fontWeight: 400,
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
	},
	body1: {
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	body2: {
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(12),
	},
	overline: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		letterSpacing: 1.1,
		textTransform: "uppercase",
	},
	s14f5: {
		fontWeight: 500,
		fontSize: pxToRem(14),
	},
	button: {
		fontWeight: 400,
		lineHeight: 24 / 14,
		fontSize: pxToRem(14),
		textTransform: "capitalize",
	},
} as const;

export default typography;
