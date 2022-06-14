import {
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
} from "@mui/material";
import React from "react";

import { InputContainer, Label } from "./styles";

export interface IText extends Omit<OutlinedTextFieldProps, "label"> {
  label?: string;
  endAdornment?: string;
}

const Text = ({ label, endAdornment, ...textProps }: IText) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
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
