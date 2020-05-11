import React from "react";
import { Box, ResponsiveContext } from "grommet";

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {() => (
        <Box fill>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              app body
            </Box>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
