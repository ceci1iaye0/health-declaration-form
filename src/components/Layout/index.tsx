import { AppBar } from "@mui/material";
import React from "react";

import Label from "../Label";
import { AppContainer, ChildrenContainer } from "./styles";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <AppContainer>
    <AppBar position="sticky" sx={{ px: 4 }}>
      <Label label="Covid-19 Health Declaration Form" variant="h5" />
    </AppBar>
    <ChildrenContainer>{children}</ChildrenContainer>
  </AppContainer>
);

export default Layout;
