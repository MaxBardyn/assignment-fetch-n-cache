import { createTheme } from '@mui/material/styles'

const colors = {
  accent: '#0005FF',
  textPrimary: '#000000',
  textSecondary: '#B1B1B1',
  error: '#FF0000',
  success: '#00A340',
  background: '#FFFFFF',
} as const

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.accent },
    text: { primary: colors.textPrimary, secondary: colors.textSecondary },
    error: { main: colors.error },
    success: { main: colors.success },
    background: { default: colors.background, paper: colors.background },
  },
  typography: {
    fontFamily: '"PT Sans", Arial, sans-serif',
    h1: { fontSize: "32px", fontWeight: 700, lineHeight: 1, letterSpacing: 0 },
    body1: { fontSize: "18px", fontWeight: 400, lineHeight: 1, letterSpacing: 0 },
    body2: { fontSize: "16px", fontWeight: 400, lineHeight: 1, letterSpacing: 0 },
    button: { textTransform: "none", fontFamily: '"PT Sans", Arial, sans-serif' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        "*, *::before, *::after": { boxSizing: "border-box" },
        html: { minHeight: "100%" },
        body: {
          minHeight: "100vh",
          margin: 0,
          backgroundColor: themeParam.palette.background.default,
          color: themeParam.palette.text.primary,
          fontFamily: themeParam.typography.fontFamily,
        },
        "#root": { 
          minHeight: "100vh", 
          width: "100%", 
        },
        img: { display: "block", maxWidth: "100%" },
      }),
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"PT Sans", Arial, sans-serif',
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: 0,
        },
        input: {
          padding: 0,
          '&::placeholder': {
            color: colors.textSecondary,
            opacity: 1,
            fontStyle: 'normal',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "auto",
          padding: 0,
          fontFamily: '"PT Sans", Arial, sans-serif',
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: 0,
        },
        text: {
          color: colors.accent,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});
