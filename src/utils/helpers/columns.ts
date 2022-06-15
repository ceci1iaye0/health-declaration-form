import { GridValueFormatterParams } from "@mui/x-data-grid";

import { ESymbols } from "../../constants";

export const tickValueFormatter = (params: GridValueFormatterParams): string =>
  params.value ? ESymbols.Tick : "";
