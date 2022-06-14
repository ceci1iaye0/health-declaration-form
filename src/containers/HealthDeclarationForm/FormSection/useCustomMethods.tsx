import { ChangeEvent, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Action } from "redux";

import {
  DEFAULT_SYMPTOMS_OPTIONS,
  EFormState,
  ESymptoms,
} from "../../../constants";
import { TFormState, TSymptoms } from "../../../constants/types";
import { submitHealthDeclaration } from "../../../store/HealthDeclaration/reducer";
import { validateInput } from "../../../utils/helpers/inputValidation";

export default ({
  formState,
  setFormState,
}: {
  formState: TFormState;
  setFormState: (formState: TFormState) => void;
}) => {
  const dispatch: Dispatch<Action> = useDispatch();

  const navigate = useNavigate();

  const getUpdatedSymptoms = (symptom: string, checked: boolean): TSymptoms => {
    if (symptom === ESymptoms.None && checked) {
      return {
        ...DEFAULT_SYMPTOMS_OPTIONS,
        [symptom]: checked,
      };
    }
    return {
      ...formState.symptoms,
      [symptom]: checked,
    };
  };

  const handleText =
    (fieldName: EFormState) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [fieldName]: event.target.value });
    };

  const handleCheckBox =
    (fieldName: EFormState) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState({
        ...formState,
        [fieldName]: getUpdatedSymptoms(
          event.target.name,
          event.target.checked
        ),
      });
    };

  const handleToggle =
    (fieldName: EFormState) =>
    (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => {
      setFormState({ ...formState, [fieldName]: value[0] });
    };

  const handleSubmit = (): void => {
    dispatch(submitHealthDeclaration.request({ formState, navigate }));
  };

  const isFormInvalid = (): boolean => {
    let isValid = true;

    Object.entries(formState).forEach(([key, value]) => {
      if (validateInput(key as EFormState, value as string)) {
        isValid = false;
      }
    });

    return !isValid;
  };

  return {
    getUpdatedSymptoms,
    handleText,
    handleCheckBox,
    handleToggle,
    handleSubmit,
    isFormInvalid,
  };
};
