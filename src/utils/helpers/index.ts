import { ESymptoms } from "../../constants";
import { TCheckBoxOption, TSymptoms } from "../../constants/types";

export const disableOtherSymptoms = (
  option: TCheckBoxOption,
  symptoms: TSymptoms
): boolean => {
  return symptoms.none && option.name !== ESymptoms.None;
};
