import React from "react";
import { Header, Box, Anchor } from "grommet";
import { useHistory } from "react-router-dom";

import { useAuthState } from "context/auth";

export default function () {
  const { isAuthenticated } = useAuthState();
  const history = useHistory();

  return (
    <Header background="light-2" pad="small">
      <Box gridArea="header" direction="row" gap="medium">
        <Anchor label="Home" href="#" />
        {isAuthenticated && <Anchor label="Sign out" href="#" />}
        {!isAuthenticated && (
          <Anchor label="Sign in" onClick={() => history.push("/login")} />
        )}
        {!isAuthenticated && (
          <Anchor label="Register" onClick={() => history.push("/register")} />
        )}
      </Box>
    </Header>
  );
}
