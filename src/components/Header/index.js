import React from "react";
import { Header, Box, Anchor } from "grommet";
import { useHistory } from "react-router-dom";

import { useAuthState } from "context/auth";

function renderLoginButton(isAuthenticated, history) {
  function handleLoginClick() {
    history.push("/login");
  }

  if (isAuthenticated) {
    return <Anchor label="Sign out" href="#" />;
  }

  return <Anchor label="Sign in" onClick={handleLoginClick} />;
}

export default function () {
  const { isAuthenticated } = useAuthState();
  const history = useHistory();

  return (
    <Header background="light-2" pad="small">
      <Box gridArea="header" direction="row" gap="medium">
        <Anchor label="Home" href="#" />
        {renderLoginButton(isAuthenticated, history)}
      </Box>
    </Header>
  );
}
