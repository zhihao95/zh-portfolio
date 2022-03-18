import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(9,0,12,0.86)',
    },
    secondary: {
      main: '#0b00f5',
    },
    text: {
      primary: '#ffffff',
    },
    error: {
      main: '#f43636',
    },
    background: {
      default: '#0e1111',
    },
  }
});

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
