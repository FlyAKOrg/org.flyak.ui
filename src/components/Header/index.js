import React from "react";
import { Avatar, Header, Box, Anchor } from "grommet";

export default function () {
  return (
    <Header background="light-2" pad="small">
      <Avatar />
      <Box gridArea="header" direction="row" gap="medium">
        <Anchor label="Home" href="#" />
        <Anchor label="Profile" href="#" />
      </Box>
    </Header>
  );
}
