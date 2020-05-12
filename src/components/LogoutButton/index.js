import React from "react";
import Button from "@material-ui/core/Button";
import { removeToken } from "utils/auth";
import { useAuthState } from "context/auth";

export default function () {
  const { updateAuthState } = useAuthState();
  function handleLogout() {
    removeToken();

    updateAuthState();
  }

  return (
    <Button color="inherit" onClick={handleLogout}>
      Logout
    </Button>
  );
}
