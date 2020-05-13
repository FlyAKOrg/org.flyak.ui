import React, { useState, useEffect } from "react";
import Request from "utils/request";
import RouteTable from "components/RouteTable";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default () => {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await Request("/route");

      setRoutes(response.data);
    }

    getData();
  }, []);

  return (
    <Box clone pt={8}>
      <Container maxWidth="md" component="main">
        <RouteTable routes={routes} />
        {/* <Grid container spacing={4} justify="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box> */}
      </Container>
    </Box>
  );
};
