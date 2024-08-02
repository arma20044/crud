'use client'

import { createCars, listCars, softDelteCars } from "@/app/helpers/cars/cars";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import React from "react";

import { FormEvent, useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";


export default function FormCar({data}) {

  const router = useRouter();



  console.log('form llego: ' + JSON.stringify(data))

















  //console.log('esto llego: ' + JSON.stringify(data))

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 150 },
    { field: 'brand', headerName: 'brand', width: 150 },
    { field: 'model', headerName: 'model', width: 200 },
    { field: 'year', headerName: 'year', width: 250 },
    { field: 'activo', headerName: 'activo', width: 250 },
  ];


  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);


    useEffect(() => {
      rowSelectionModel && console.log( rowSelectionModel )
    }, [rowSelectionModel])

  function handleClick(){
    //throw new Error("Function not implemented.");
    console.log('borrar', rowSelectionModel)

    softDelteCars(rowSelectionModel[0]);

    router.refresh()
  }

  return (
    <div>
      <h1>Hello CAR Page</h1>

      {rowSelectionModel.length > 0 &&  <Button color="error" startIcon={<IoAdd size={40} />} onClick={handleClick}>
          Borrar
        </Button>}

      <DataGrid rows={data} columns={columns}
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
      />
      

        {data && data?.map(
          e =>
            <div key={e.model}>
              {e.brand + ' ' + e.model + ' ' + e.year + ' ' + e.activo}
            </div>
        )}


     


    </div>
  );
}