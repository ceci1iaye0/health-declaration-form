import { EFormState } from ".";

export enum EInputValidations {
  IsEmpty = "isEmpty",
  HasSpecialChars = "hasSpecialChars",
  IsNotNumeric = "isNotNumeric",
}

export const ERROR_MESSAGE = {
  [EFormState.Name]: {
    [EInputValidations.IsEmpty]: "Please enter your name",
    // max: "Input exceeds maximum of 20 characters",
    [EInputValidations.HasSpecialChars]:
      "Please enter a valid name. Special charaters are not accepted",
  },
  [EFormState.Temperature]: {
    [EInputValidations.IsEmpty]: "Please enter your temperature",
    [EInputValidations.IsNotNumeric]:
      "Please enter a valid temperature reading",
  },
} as {
  [fieldName in EFormState]: { [inputValidation in EInputValidations]: string };
};
