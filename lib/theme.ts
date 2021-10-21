import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles/createTypography' {
    interface Typography {
        fontWeightHeavy: number;
    }
    interface TypographyOptions {
        fontWeightHeavy: number;
    }
}

const THEME: ThemeOptions = {
    typography: {
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
        fontWeightLight: 100,
        fontWeightMedium: 300,
        fontWeightRegular: 400,
        fontWeightHeavy: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.6rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.4rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '.8rem',
            fontWeight: 400,
        },
    },
    palette: {
        primary: { main: '#016848', dark: '#1f5849', light: '#388e3c' },
        secondary: { main: '#8bc34a', dark: '#689f38', light: '#d0df63' },
        contrastThreshold: 3,
        tonalOffset: 0.5,
    },
    shape: {
        borderRadius: 4,
    },
};

const theme = responsiveFontSizes(createTheme(THEME));

export default theme;
