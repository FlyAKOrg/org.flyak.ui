import React from "react";
// import { Grommet, Box, Grid } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { AuthProvider } from "context/auth/index";

import Login from "pages/Login";
// import Home from "pages/Home";
import Header from "components/Header";
import Register from "pages/Register";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: "#484848",
      main: "#212121",
      // dark: "#000000",
      // contrastText: "#fff",
    },
    secondary: {
      // light: "#4fb3be",
      main: "#00838e",
      // dark: "#005661",
      // contrastText: "#fff",
    },
  },
});

const Content = () => (
  <Router>
    <Header />
    {/* <Route exact path="/" component={Home} /> */}
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <Content />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
