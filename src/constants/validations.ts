import { EFormState } from ".";

export enum EInputValidations {
  IsUndefined = "isUndefined",
  IsEmpty = "isEmpty",
  HasSpecialChars = "hasSpecialChars",
  IsNotNumeric = "isNotNumeric",
  AreObjectValuesFalse = "areObjectValuesFalse",
}

export const ERROR_MESSAGE = {
  [EFormState.Name]: {
    [EInputValidations.IsEmpty]: "Please enter your name",
    [EInputValidations.HasSpecialChars]:
      "Please enter a valid name. Special charaters are not accepted",
  },
  [EFormState.Temperature]: {
    [EInputValidations.IsEmpty]: "Please enter your temperature",
    [EInputValidations.IsNotNumeric]:
      "Please enter a valid temperature reading",
  },
  [EFormState.Symptoms]: {
    [EInputValidations.AreObjectValuesFalse]:
      "Please specify if you had any symptoms",
  },
  [EFormState.CloseContact]: {
    [EInputValidations.IsUndefined]: "Please specify",
  },
} as {
  [fieldName in EFormState]: { [inputValidation in EInputValidations]: string };
};
