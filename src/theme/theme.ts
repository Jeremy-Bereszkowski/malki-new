"use client"
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#627062', // sage-500
            light: '#7e8a7e', // sage-400
            dark: '#4d5a4d', // sage-600
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#e9d7c3', // cream-500
            light: '#f1e7d9', // cream-400
            dark: '#d4b896', // cream-600
            contrastText: '#2c332c',
        },
        background: {
            default: '#fefefe', // cream-50
            paper: '#ffffff',
        },
        text: {
            primary: '#343c34', // sage-800
            secondary: '#627062', // sage-500
        },
        grey: {
            50: '#f6f7f6',
            100: '#e3e6e3',
            200: '#c6ccc6',
            300: '#a3aca3',
            400: '#7e8a7e',
            500: '#627062',
        }
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Merriweather", "Georgia", serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontFamily: '"Merriweather", "Georgia", serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.3,
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h3: {
            fontFamily: '"Merriweather", "Georgia", serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.4,
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 500,
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 8px rgba(98, 112, 98, 0.2)',
                    },
                },
                outlined: {
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 2px 8px rgba(98, 112, 98, 0.1)',
                    '&:hover': {
                        boxShadow: '0 4px 16px rgba(98, 112, 98, 0.15)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                    },
                },
            },
        },
    },
})

export default theme;