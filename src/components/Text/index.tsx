import {
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
} from "@mui/material";
import React from "react";

import Label from "../Label";
import { InputContainer } from "./styles";

export interface IText extends Omit<OutlinedTextFieldProps, "label"> {
  label?: string;
  endAdornment?: string;
}

const Text = ({ label, endAdornment, ...textProps }: IText) => {
  return (
    <InputContainer>
      <Label label={label} variant="h6" />
      <TextField
        {...textProps}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">{endAdornment}</InputAdornment>
          ),
        }}
      />
    </InputContainer>
  );
};

export default Text;
