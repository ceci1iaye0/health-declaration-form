import { GridColDef } from "@mui/x-data-grid";

import { tickValueFormatter } from "../utils/helpers/columns";
import { EFormState } from ".";

const healthDeclarationResponsesColumns: GridColDef[] = [
  {
    field: EFormState.Name,
    headerName: "Name",
    width: 250,
  },
  {
    field: EFormState.Temperature,
    headerName: "Temperature (°C)",
    width: 200,
  },
  {
    field: EFormState.Symptoms,
    headerName: "Has Symptoms",
    valueFormatter: (params) => tickValueFormatter(params),
    width: 200,
  },
  {
    field: EFormState.CloseContact,
    headerName: "Has Close Contact",
    valueFormatter: (params) => tickValueFormatter(params),
    width: 200,
  },
];

export { healthDeclarationResponsesColumns };
