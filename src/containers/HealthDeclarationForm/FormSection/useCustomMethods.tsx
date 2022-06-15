import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Action } from "redux";

import { EFormState } from "../../../constants";
import { TFormState } from "../../../constants/types";
import { submitHealthDeclaration } from "../../../store/HealthDeclaration/reducer";
import { validateInput } from "../../../utils/helpers/validations";

export default ({
  formState,
  setFormState,
}: {
  formState: TFormState;
  setFormState: (formState: TFormState) => void;
}) => {
  const dispatch: Dispatch<Action> = useDispatch();

  const navigate = useNavigate();

  const handleText =
    (fieldName: EFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [fieldName]: event.target.value });
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
    handleText,
    handleToggle,
    handleSubmit,
    isFormInvalid,
  };
};
