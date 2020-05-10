import React from "react";
import { Header, Box, Anchor } from "grommet";

import { useAuthState } from "context/auth";

function renderLoginButton(isAuthenticated, callGetUser) {
  if (isAuthenticated) {
    return <Anchor label="Sign out" href="#" />;
  }

  return <Anchor label="Sign in" onClick={callGetUser} />;
}

export default function () {
  const { isAuthenticated, callGetUser } = useAuthState();
  return (
    <Header background="light-2" pad="small">
      <Box gridArea="header" direction="row" gap="medium">
        <Anchor label="Home" href="#" />
        {renderLoginButton(isAuthenticated, callGetUser)}
      </Box>
    </Header>
  );
}
