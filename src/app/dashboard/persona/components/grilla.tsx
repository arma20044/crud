'use client'

import { esES } from '@mui/x-data-grid/locales';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Grilla({data}) {

  const router = useRouter();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 150 },
    { field: 'nombre', headerName: 'nombre', width: 150 },
    { field: 'apellido', headerName: 'apellido', width: 200 },
    { field: 'fecha_nacimiento', headerName: 'fecha_nacimiento', width: 250 },
    { field: 'correo_electronico', headerName: 'correo_electronico', width: 250 },
  ];
  
  return (
    <div>
      <button className={
        `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }  onClick={() => router.push('/dashboard/persona/nuevo') }>Agregar</button>
      <h1>Hello Grilla</h1>
      {/* {JSON.stringify(data)} */}

      <DataGrid 
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            //  localeText={esES.components.MuiDataGrid.defaultProps.localeText}

      rows={data} columns={columns}
      />
    </div>
  );
}