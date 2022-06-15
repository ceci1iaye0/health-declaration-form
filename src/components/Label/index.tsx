import { Typography, TypographyVariant } from "@mui/material";
import React from "react";

export type TLabel = {
  label?: string | React.ReactNode;
  variant: TypographyVariant;
};

const Label = ({ label, variant }: TLabel) => {
  if (!label) return null;

  return (
    <Typography data-testid="label-field" variant={variant} sx={{ py: 2 }}>
      {label}
    </Typography>
  );
};

export default Label;
