import { FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import React from "react";

import { TCheckBoxOption } from "../../constants/types";
import { Label } from "./styles";

export interface ICheckBox extends Omit<CheckboxProps, "label"> {
  label?: string;
  values: { [k: string]: boolean };
  options: TCheckBoxOption[];
  disable?: (option: TCheckBoxOption, values: any) => boolean;
  helperText?: string;
}

const CheckBox = ({
  label,
  values,
  options,
  helperText,
  disable,
  ...checkBoxProps
}: ICheckBox) => {
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {options?.map((option, index) => (
        <FormControlLabel
          key={index}
          name={option.name}
          label={option.label}
          control={
            <Checkbox
              {...checkBoxProps}
              checked={values[option.name]}
              disabled={disable && disable(option, values)}
            />
          }
        />
      ))}
    </FormGroup>
  );
};

export default CheckBox;
