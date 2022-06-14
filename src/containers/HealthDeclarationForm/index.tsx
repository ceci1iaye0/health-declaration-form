import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { selector } from "../../store/HealthDeclaration/reducer";
import FormSection from "./FormSection";

const HealthDeclarationForm = () => {
  const { isSumbitHealthDeclarationLoading } = useSelector(selector);

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Error visible={false} label="Some error message" />
      <FormSection />
      <Loader visible={isSumbitHealthDeclarationLoading} />
    </Container>
  );
};

export default HealthDeclarationForm;
