import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  rootElement
);
