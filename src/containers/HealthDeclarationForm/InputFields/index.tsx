import React from "react";

import CheckBox from "../../../components/CheckBox";
import Text from "../../../components/Text";
import Toggle from "../../../components/Toggle";
import {
  CLOSE_CONTACT_OPTIONS,
  EFormState,
  SYMPTOMS_OPTIONS,
} from "../../../constants";
import { TFormState } from "../../../constants/types";
import { disableOtherSymptoms } from "../../../utils/helpers";
import { validateInput } from "../../../utils/helpers/inputValidation";

export const NameText = ({
  value,
  handleText,
}: {
  value: TFormState[EFormState.Name];
  handleText: (
    fieldName: EFormState
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Text
    label="Name"
    defaultValue={value}
    onChange={handleText(EFormState.Name)}
    error={!!validateInput(EFormState.Name, value)}
    helperText={validateInput(EFormState.Name, value)}
    variant="outlined"
  />
);

export const TemparatureText = ({
  value,
  handleText,
}: {
  value: TFormState[EFormState.Temperature];
  handleText: (
    fieldName: EFormState
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Text
    label="Temperature"
    defaultValue={value}
    onChange={handleText(EFormState.Temperature)}
    error={!!validateInput(EFormState.Temperature, value)}
    helperText={validateInput(EFormState.Temperature, value)}
    endAdornment="°C"
    variant="outlined"
  />
);

export const SymptomsCheckBox = ({
  values,
  handleCheckBox,
}: {
  values: TFormState[EFormState.Symptoms];
  handleCheckBox: (
    fieldName: EFormState
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <CheckBox
    label="Symptoms for past 14 days"
    helperText="Please declare any of the symptom(s) below:"
    values={values}
    options={SYMPTOMS_OPTIONS}
    onChange={handleCheckBox(EFormState.Symptoms)}
    disable={disableOtherSymptoms}
    // error={!!validateInput(EFormState.Temperature, value)}
  />
);

export const CloseContactToggle = ({
  value,
  handleToggle,
}: {
  value: TFormState[EFormState.CloseContact];
  handleToggle: (
    fieldName: EFormState
  ) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string | number | boolean
  ) => void;
}) => (
  <Toggle
    label="Have you been in contact with anyone who is suspected to have or/has
    been diagnosed with Covid-19 within the last 14 days?"
    value={value}
    options={CLOSE_CONTACT_OPTIONS}
    onChange={handleToggle(EFormState.CloseContact)}
    color="primary"
  />
);
