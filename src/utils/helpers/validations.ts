import { EFormState } from "../../constants";
import { ERROR_MESSAGE } from "../../constants/validations";

export const isUndefined = (value: any): boolean => value === undefined;

export const validateIsUndefined = (
  fieldName: EFormState,
  value: any
): string => (isUndefined(value) ? ERROR_MESSAGE[fieldName].isUndefined : "");

export const isEmpty = (value: string): boolean => !!!value.trim().length;

export const validateIsEmpty = (fieldName: EFormState, value: string): string =>
  isEmpty(value) ? ERROR_MESSAGE[fieldName].isEmpty : "";

export const hasSpecialChars = (value: string): boolean => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(value);
};

export const validateHasSpecialChars = (
  fieldName: EFormState,
  value: string
): string =>
  hasSpecialChars(value) ? ERROR_MESSAGE[fieldName].hasSpecialChars : "";

const isNotNumeric = (value: string): boolean => {
  const RE = /^\d+(\.[0-9])?$/;
  return !RE.test(value);
};

export const validateIsNotNumeric = (
  fieldName: EFormState,
  value: string
): string => (isNotNumeric(value) ? ERROR_MESSAGE[fieldName].isNotNumeric : "");

export const validateInput = (fieldName: EFormState, value: any): string => {
  switch (fieldName) {
    case EFormState.Name:
      return (
        validateIsEmpty(fieldName, value) ||
        validateHasSpecialChars(fieldName, value)
      );
    case EFormState.Temperature:
      return (
        validateIsEmpty(fieldName, value) ||
        validateIsNotNumeric(fieldName, value)
      );
    case EFormState.Symptoms:
    case EFormState.CloseContact:
      return validateIsUndefined(fieldName, value);
    default:
      return "";
  }
};
