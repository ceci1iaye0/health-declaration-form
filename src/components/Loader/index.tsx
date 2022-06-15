import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

export interface ILoader {
  visible: boolean;
}

const Loader = ({ visible }: ILoader) => (
  <Backdrop
    data-testid="loader"
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={visible}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default Loader;
