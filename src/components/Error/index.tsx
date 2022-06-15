import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import Label from "../Label";
import { Container } from "./styles";

export type TError = {
  msg?: string | React.ReactNode;
};

const Error = ({ msg }: TError) => {
  const navigate = useNavigate();
  const refreshPage = () => navigate(0);

  return (
    <Container data-testid="error">
      <Label label={msg} variant="h5" />
      <Button
        data-testid="retry-btn"
        label="Try again"
        variant="outlined"
        onClick={refreshPage}
      />
    </Container>
  );
};

export default Error;
