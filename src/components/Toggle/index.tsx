import {
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from "@mui/material";
import React from "react";

import { TToggleOption } from "../../constants/types";
import Label from "../Label";

export interface IToggle extends Omit<ToggleButtonGroupProps, "value"> {
  label?: string;
  value: string | number | boolean;
  options: TToggleOption[];
}

const Toggle = ({ label, value, options, ...toggleProps }: IToggle) => (
  <FormControl>
    <Label label={label} variant="h6" />
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
  </FormControl>
);

export default Toggle;
