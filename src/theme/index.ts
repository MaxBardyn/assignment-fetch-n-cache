import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0005FF" },
    text: { primary: "#000000", secondary: "#B1B1B1" },
    error: { main: "#FF0000" },
    success: { main: "#00A340" },
    background: { default: "#FFFFFF" },
  },
  typography: {
    fontFamily: '"PT Sans", Arial, sans-serif',
    allVariants: { lineHeight: 1, letterSpacing: 0 },
    h1: { fontSize: "32px", fontWeight: 700 },
    body1: { fontSize: "18px" },
    body2: { fontSize: "16px" },
    button: { textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": { boxSizing: "border-box" },
        "#root": { minHeight: "100vh", width: "100%" },
        img: { display: "block", maxWidth: "100%" },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { fontSize: "18px" },
        input: {
          padding: 0,
          "&::placeholder": {
            color: "#B1B1B1",
            opacity: 1,
            fontStyle: "italic",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { minWidth: "auto", padding: 0, fontSize: "18px" },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: { h1: "h1", body1: "span", body2: "span" },
      },
    },
  },
});
