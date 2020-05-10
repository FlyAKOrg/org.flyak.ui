import React from "react";
import { Grommet, Box, Grid } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "context/auth/index";

import Home from "./pages/Home";
import Header from "./components/Header";

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
        <Route path="/" component={Home} />
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
