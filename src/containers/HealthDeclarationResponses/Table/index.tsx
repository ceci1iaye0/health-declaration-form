import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

import { healthDeclarationResponsesColumns } from "../../../constants/columns";
import { TFormState } from "../../../constants/types";

const Table = ({ data }: { data: TFormState[] }) => {
  return (
    <Container data-testid="responses-table" sx={{ p: 4 }}>
      <DataGrid
        rows={data}
        columns={healthDeclarationResponsesColumns}
        pageSize={25}
        getRowId={(row) => row?._id}
        autoHeight={true}
        disableExtendRowFullWidth={false}
      />
    </Container>
  );
};

export default Table;
