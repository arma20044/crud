'use client'

import { Button } from "@mui/material";
import { DataGrid, GridRowModes, GridRowModesModel, GridRowSelectionModel, GridRowsProp, GridSlots, GridToolbarContainer } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { redirect } from "next/navigation";
import { IoAdd } from "react-icons/io5";
import { NewUser } from "./add";
import React, { useEffect } from "react";

export default function FormUsers({ columns, rows }: any) {

  interface EditToolbarProps {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
      newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
  }

  function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<IoAdd size={40} />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }

  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);


  useEffect(() => {
    rowSelectionModel && console.log( rowSelectionModel.length )
  }, [rowSelectionModel])


  return (
    <div style={{ height: 300, width: '100%' }}>
      {/* {JSON.stringify(rows)} */}
      {JSON.stringify(rowSelectionModel)}
      {JSON.stringify(rowSelectionModel.length)}
      <div>

      </div>
      <NewUser rowSelectionModel={rowSelectionModel} />
      <DataGrid rows={rows} columns={columns}
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
      />
    </div>
  );
}