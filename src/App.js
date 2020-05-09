import React from "react";
import { Grommet, Box, Text, Grid } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <Route path="/" component={Header} />
    </Box>
    <Box gridArea="main">
      <Box gridArea="main" justify="center" align="center">
        <Text>main</Text>
      </Box>
    </Box>
  </Grid>
);

const App = () => (
  <Router>
    <Grommet theme={theme} full>
      <Content />
    </Grommet>
  </Router>
);

export default App;
