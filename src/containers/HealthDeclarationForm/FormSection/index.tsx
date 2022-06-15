import React from "react";

import Button from "../../../components/Button";
import {
  CloseContactToggle,
  NameText,
  SymptomsToggle,
  TemparatureText,
} from "../InputFields";
import useCustomMethods from "./useCustomMethods";
import useCustomStates from "./useCustomStates";

const FormSection = () => {
  const { formState, setFormState } = useCustomStates();
  const { handleText, handleToggle, handleSubmit, isFormInvalid } =
    useCustomMethods({
      formState,
      setFormState,
    });

  return (
    <>
      <NameText value={formState.name} handleText={handleText} />
      <TemparatureText value={formState.temperature} handleText={handleText} />
      <SymptomsToggle value={formState.symptoms} handleToggle={handleToggle} />
      <CloseContactToggle
        value={formState.closeContact}
        handleToggle={handleToggle}
      />
      <Button
        sx={{ my: 3, px: 4 }}
        label="Submit"
        size="large"
        variant="contained"
        disabled={isFormInvalid}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
};

export default FormSection;
