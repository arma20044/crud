'use client'

import { esES } from '@mui/x-data-grid/locales';
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { borrarPersona, listPersonas } from '@/app/helpers/persona/persona';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { setCookie } from 'cookies-next'

export default function Grilla({data}) {

  const { pending } = useFormStatus()


  const router = useRouter();




  const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 150 },
    { field: 'nombre', headerName: 'nombre', width: 150 },
    { field: 'apellido', headerName: 'apellido', width: 200 },
    { field: 'fecha_nacimiento', headerName: 'fecha_nacimiento', width: 250 },
    { field: 'correo_electronico', headerName: 'correo_electronico', width: 250 },
  ];


  function handleClick() {
    //throw new Error("Function not implemented.");
    console.log('borrar', rowSelectionModel)

    borrarPersona(JSON.stringify({
      "id": rowSelectionModel[0]
    }));

    router.refresh()
  }

  const borrar = () => {

    console.log('quiero borrar')
    console.log(JSON.stringify(rowSelectionModel))

    if (rowSelectionModel.length === 0 ){
      alert("Seleccionar Primero")
    }
    else {
      borrarPersona(JSON.stringify({
        "id": rowSelectionModel[0]
      })) 

      router.refresh()
      
    }

    

  }

  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

    useEffect(() => {
      rowSelectionModel && rowSelectionModel.length>0 && setCookie('seleccionado',rowSelectionModel)
    
      
    }, [rowSelectionModel])
    
  
  return (
    <div>
      <button className={
        `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }  onClick={() => router.push('/dashboard/persona/nuevo') }>Agregar</button>

<button className={
        `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded`
      }  onClick={handleClick } type='submit' disabled={pending}>Borrar</button>

      <Link href={"/dashboard/persona/nuevo"}>Add</Link>

      <h1>Hello Grilla</h1>
      {/* {JSON.stringify(data)} */}

      { 
      <div style={{ height: 350, width: '100%' }}>
      <DataGrid 
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          

      rows={data} columns={columns}

      rowSelectionModel={rowSelectionModel}
      onRowSelectionModelChange={(newRowSelectionModel) => {
        setRowSelectionModel(newRowSelectionModel);
      }}
      />
      </div>
      }
    </div>
  );
}