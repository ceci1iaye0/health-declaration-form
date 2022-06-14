import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from "@mui/material";
import React from "react";

import { TToggleOption } from "../../constants/types";
import { Label } from "./styles";

export interface IToggle extends Omit<ToggleButtonGroupProps, "value"> {
  label?: string;
  value: string | number | boolean;
  options: TToggleOption[];
}

const Toggle = ({ label, value, options, ...toggleProps }: IToggle) => (
  <Box>
    {label && <Label>{label}</Label>}
    <ToggleButtonGroup {...toggleProps}>
      {options?.map((option, index) => (
        <ToggleButton
          key={index}
          value={option.name}
          selected={option.name === value}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  </Box>
);

export default Toggle;
