import React from "react";

import { EFormState, ESymptoms } from ".";

export type TFormState = {
  [EFormState.Name]: string;
  [EFormState.Temperature]: string;
  [EFormState.Symptoms]: TSymptoms;
  [EFormState.CloseContact]: boolean;
};

export type TSymptoms = {
  [ESymptoms.Fever]: boolean;
  [ESymptoms.Flu]: boolean;
  [ESymptoms.Cough]: boolean;
  [ESymptoms.SmellImpairment]: boolean;
  [ESymptoms.BreathingDifficulties]: boolean;
  [ESymptoms.BodyAches]: boolean;
  [ESymptoms.Headaches]: boolean;
  [ESymptoms.Fatigue]: boolean;
  [ESymptoms.SoreThroat]: boolean;
  [ESymptoms.Diarrhoes]: boolean;
  [ESymptoms.None]: boolean;
};

export type TCheckBoxOption = {
  name: string;
  label: string | React.ReactNode;
};

export type TToggleOption = {
  name: any;
  label: string | React.ReactNode;
};
