import { useState } from "react";

import { EFormState } from "../../../constants";
import { TFormState } from "../../../constants/types";

export default () => {
  const [formState, setFormState] = useState<TFormState>({
    [EFormState.Name]: "",
    [EFormState.Temperature]: "",
    [EFormState.Symptoms]: undefined as any,
    [EFormState.CloseContact]: undefined as any,
  });

  return { formState, setFormState };
};
