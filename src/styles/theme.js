import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#669934",
    },
  },
  typography: {
    fontFamily: [
      "sans-serif",
      "Prata",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "64px",
      fontWeight: 400,
    },
    p: {
      fontSize: "18px",
      fontWeight: 400,
      color: "#000",
    },
    button: {
      fontFamily: "DM Sans",
      fontSize: "14px",
      fontWeight: 400,
    },
  },
});

export default theme;
