import { Alert, AlertProps } from "@mui/material";
import React from "react";

export interface IError extends AlertProps {
  visible: boolean;
  label?: string;
}

const Error = ({ visible, label, ...alertProps }: IError) => {
  if (!visible) return null;

  return (
    <Alert severity="error" {...alertProps}>
      {label && label}
    </Alert>
  );
};

export default Error;
