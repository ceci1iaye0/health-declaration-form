import React from "react";

import Button from "../../../components/Button";
import {
  CloseContactToggle,
  NameText,
  SymptomsCheckBox,
  TemparatureText,
} from "../InputFields";
import useCustomMethods from "./useCustomMethods";
import useCustomStates from "./useCustomStates";

const FormSection = () => {
  const { formState, setFormState } = useCustomStates();
  const {
    handleText,
    handleCheckBox,
    handleToggle,
    handleSubmit,
    isFormInvalid,
  } = useCustomMethods({
    formState,
    setFormState,
  });

  return (
    <>
      <NameText value={formState.name} handleText={handleText} />
      <TemparatureText value={formState.temperature} handleText={handleText} />
      <SymptomsCheckBox
        values={formState.symptoms}
        handleCheckBox={handleCheckBox}
      />
      <CloseContactToggle
        value={formState.closeContact}
        handleToggle={handleToggle}
      />
      <Button
        sx={{ mt: 4 }}
        label="Submit"
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
