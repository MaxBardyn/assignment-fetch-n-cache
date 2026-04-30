import { createTheme } from '@mui/material/styles'

const colors = {
  accent: '#0005FF',
  textPrimary: '#000000',
  textSecondary: '#B1B1B1',
  error: '#FF0000',
} as const

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.accent,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    error: {
      main: colors.error,
    },
  },
  typography: {
    fontFamily: '"PT Sans", Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1,
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        html: {
          minHeight: '100%',
        },
        body: {
          minHeight: '100vh',
          margin: 0,
          backgroundColor: '#FFFFFF',
          color: colors.textPrimary,
        },
        '#root': {
          minHeight: '100vh',
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
      },
    },
  },
})