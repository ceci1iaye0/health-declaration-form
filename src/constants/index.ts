import { TToggleOption } from "./types";

export enum EFormState {
  Name = "name",
  Temperature = "temperature",
  Symptoms = "symptoms",
  CloseContact = "closeContact",
}

export const FORM_INPUTS_LABELS = {
  [EFormState.Name]: "1. Name",
  [EFormState.Temperature]: "2. Temperature",
  [EFormState.Symptoms]:
    "3. Do you have any of the following symptoms now or within the last 14 days: Cough, smell/taste impairment, fever, breathing difficulties, body aches, headaches, fatigue, sore throat, diarrhoea, and / or runny nose (even if your symptoms are mild)?",
  [EFormState.CloseContact]:
    "4. Have you been in contact with anyone who is suspected to have or/has been diagnosed with Covid-19 within the last 14 days?",
};

export const YES_NO_OPTIONS: TToggleOption[] = [
  {
    name: true,
    label: "Yes",
  },
  {
    name: false,
    label: "No",
  },
];

export enum ESymbols {
  Tick = "✓",
}
