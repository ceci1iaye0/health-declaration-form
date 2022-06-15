import { EFormState } from ".";

export type TFormState = {
  [EFormState.Name]: string;
  [EFormState.Temperature]: string;
  [EFormState.Symptoms]: boolean;
  [EFormState.CloseContact]: boolean;
};

export type TToggleOption = {
  name: any;
  label: string | React.ReactNode;
};

export type TErrorResponse = {
  status: number;
  error: string;
};
