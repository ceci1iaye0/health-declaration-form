import { TCheckBoxOption, TSymptoms, TToggleOption } from "./types";

export enum EFormState {
  Name = "name",
  Temperature = "temperature",
  Symptoms = "symptoms",
  CloseContact = "closeContact",
}

export enum ESymptoms {
  Fever = "fever",
  Flu = "flu",
  Cough = "cough",
  SmellImpairment = "smellImpairment",
  BreathingDifficulties = "breathingDifficulties",
  BodyAches = "bodyAches",
  Headaches = "headaches",
  Fatigue = "fatigue",
  SoreThroat = "soreThroat",
  Diarrhoes = "diarrhoes",
  None = "none",
}

export const SYMPTOMS_OPTIONS: TCheckBoxOption[] = [
  {
    name: ESymptoms.Fever,
    label: "Fever",
  },
  {
    name: ESymptoms.Flu,
    label: "Flu or Running nose",
  },
  {
    name: ESymptoms.Cough,
    label: "Cough",
  },
  {
    name: ESymptoms.SmellImpairment,
    label: "Smell Impairment",
  },
  {
    name: ESymptoms.BreathingDifficulties,
    label: "Breathing Difficulties",
  },
  {
    name: ESymptoms.BodyAches,
    label: "Body Aches",
  },
  {
    name: ESymptoms.Headaches,
    label: "Headaches",
  },
  {
    name: ESymptoms.Fatigue,
    label: "Fatigue",
  },
  {
    name: ESymptoms.SoreThroat,
    label: "Sore Throat",
  },
  {
    name: ESymptoms.Diarrhoes,
    label: "Diarrhoes",
  },
  {
    name: ESymptoms.None,
    label: "None of the above",
  },
];

export const DEFAULT_SYMPTOMS_OPTIONS: TSymptoms = {
  [ESymptoms.Fever]: false,
  [ESymptoms.Flu]: false,
  [ESymptoms.Cough]: false,
  [ESymptoms.SmellImpairment]: false,
  [ESymptoms.BreathingDifficulties]: false,
  [ESymptoms.BodyAches]: false,
  [ESymptoms.Headaches]: false,
  [ESymptoms.Fatigue]: false,
  [ESymptoms.SoreThroat]: false,
  [ESymptoms.Diarrhoes]: false,
  [ESymptoms.None]: false,
};

export const CLOSE_CONTACT_OPTIONS: TToggleOption[] = [
  {
    name: true,
    label: "Yes",
  },
  {
    name: false,
    label: "No",
  },
];
