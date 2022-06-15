import React from "react";
import { useSelector } from "react-redux";

import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { selector } from "../../store/HealthDeclaration/reducer";
import FormSection from "./FormSection";
import { Container } from "./styles";

const HealthDeclarationForm = () => {
  const { isSumbitHealthDeclarationLoading, submitHealthDeclarationError } =
    useSelector(selector);

  if (!!submitHealthDeclarationError)
    return <Error msg={submitHealthDeclarationError} />;

  return (
    <Container>
      <FormSection />
      <Loader visible={isSumbitHealthDeclarationLoading} />
    </Container>
  );
};

export default HealthDeclarationForm;
