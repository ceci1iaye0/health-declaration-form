import React from "react";

import Text from "../../../components/Text";
import Toggle from "../../../components/Toggle";
import {
  EFormState,
  FORM_INPUTS_LABELS,
  YES_NO_OPTIONS,
} from "../../../constants";
import { TFormState } from "../../../constants/types";
import { validateInput } from "../../../utils/helpers/validations";

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
    data-testid="name-input"
    label={FORM_INPUTS_LABELS[EFormState.Name]}
    defaultValue={value}
    onChange={handleText(EFormState.Name)}
    error={!!validateInput(EFormState.Name, value)}
    helperText={validateInput(EFormState.Name, value)}
    variant="outlined"
  />
);

export const TemperatureText = ({
  value,
  handleText,
}: {
  value: TFormState[EFormState.Temperature];
  handleText: (
    fieldName: EFormState
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Text
    data-testid="temperature-input"
    label={FORM_INPUTS_LABELS[EFormState.Temperature]}
    defaultValue={value}
    onChange={handleText(EFormState.Temperature)}
    error={!!validateInput(EFormState.Temperature, value)}
    helperText={validateInput(EFormState.Temperature, value)}
    endAdornment="°C"
    variant="outlined"
  />
);

export const SymptomsToggle = ({
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
    data-testid="symptoms-input"
    label={FORM_INPUTS_LABELS[EFormState.Symptoms]}
    value={value}
    options={YES_NO_OPTIONS}
    onChange={handleToggle(EFormState.Symptoms)}
    color="primary"
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
    data-testid="close-contact-input"
    label={FORM_INPUTS_LABELS[EFormState.CloseContact]}
    value={value}
    options={YES_NO_OPTIONS}
    onChange={handleToggle(EFormState.CloseContact)}
    color="primary"
  />
);
