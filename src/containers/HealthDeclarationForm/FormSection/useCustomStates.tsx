import { useState } from "react";

import { DEFAULT_SYMPTOMS_OPTIONS, EFormState } from "../../../constants";
import { TFormState } from "../../../constants/types";

export default () => {
  const [formState, setFormState] = useState<TFormState>({
    [EFormState.Name]: "",
    [EFormState.Temperature]: "",
    [EFormState.Symptoms]: DEFAULT_SYMPTOMS_OPTIONS,
    [EFormState.CloseContact]: false,
  });

  return { formState, setFormState };
};
