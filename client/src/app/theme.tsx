import { createTheme } from '@mui/material/styles';

const themeBase = createTheme({
    palette: {
        primary: {
            light: 'hsl(26, 100%, 70%)',
            main: 'hsl(26, 100%, 55%)',
            contrastText: 'hsl(25, 100%, 94%)',
        },
        secondary: {
            light: 'hsl(223, 64%, 98%)',
            main: 'hsl(220, 14%, 75%)',
            dark: 'hsl(219, 9%, 45%)',
            contrastText: 'hsl(220, 13%, 13%)',
        },
    },
});

const themeCustomizations = createTheme({
    typography: {
        fontFamily: [
            'Kumbh Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: '.75rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            color: themeBase.palette.primary.main,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: themeBase.palette.secondary.contrastText,
            [themeBase.breakpoints.up('md')]: {
                fontSize: '2.5rem'
            }
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: themeBase.palette.secondary.contrastText,
        },
        h4: {
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: themeBase.palette.secondary.contrastText,
            [themeBase.breakpoints.up('md')]: {
                fontSize: '.875rem'
            }
        },
        body1: {
            color: themeBase.palette.secondary.dark,
            [themeBase.breakpoints.up('md')]: {
                fontSize: '.875rem'
            }
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    [themeBase.breakpoints.up('md')]: {
                        fontSize: '.875rem'
                    }
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    color: themeBase.palette.secondary.contrastText,
                },
            },
        },
    },
});

export const theme = createTheme({
    ...themeBase,
    typography: themeCustomizations.typography,
    components: themeCustomizations.components,
});
