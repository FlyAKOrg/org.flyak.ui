import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useAuthState } from "context/auth";
import LogoutButton from "components/LogoutButton";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function () {
  const { isAuthenticated } = useAuthState();
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.toolbarTitle}>
          Company name
        </Typography>

        {!isAuthenticated ? (
          <Button href="/login" color="inherit" className={classes.link}>
            Login
          </Button>
        ) : (
          <LogoutButton />
        )}
      </Toolbar>
    </AppBar>
  );
}
