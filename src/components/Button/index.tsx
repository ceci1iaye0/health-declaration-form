import { Button as MButton, ButtonProps } from "@mui/material";
import React from "react";

export interface IButton extends Omit<ButtonProps, "disabled"> {
  label: string | React.ReactNode;
  disabled?: () => boolean;
}

const Button = ({ label, disabled, ...buttonProps }: IButton) => (
  <MButton
    data-testid="btn-field"
    {...buttonProps}
    disabled={disabled && disabled()}
  >
    {label}
  </MButton>
);

export default Button;
