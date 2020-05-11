import React from "react";
import { Grommet, Box, Grid } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "context/auth/index";

import Login from "pages/Login";
import Home from "pages/Home";
import Header from "components/Header";
import Register from "pages/Register";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const Content = () => (
  <Grid
    fill
    rows={["auto", "flex"]}
    columns={["auto", "flex"]}
    areas={[
      ["header", "header"],
      ["main", "main"],
      ["footer", "footer"],
    ]}
  >
    <Box gridArea="header">
      <Header />
    </Box>
    <Box gridArea="main">
      <Box gridArea="main" justify="center" align="center">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Box>
    </Box>
  </Grid>
);

const App = () => (
  <AuthProvider>
    <Router>
      <Grommet theme={theme} full>
        <Content />
      </Grommet>
    </Router>
  </AuthProvider>
);

export default App;
