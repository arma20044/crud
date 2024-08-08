'use client'

import { esES } from '@mui/x-data-grid/locales';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowModes, GridRowSelectionModel } from "@mui/x-data-grid";
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { setCookie } from 'cookies-next'
import { Car, DeleteIcon, EditIcon, SaveIcon } from 'lucide-react';
import { IoAdd, IoDocument, IoDocumentText, IoPencil, IoTrash } from 'react-icons/io5';

export default function Grilla({data}) {

  const { pending } = useFormStatus()

  console.log('llego grilla activity: ', JSON.stringify(data))


  const router = useRouter();


  const handleEditClick  = (id ) => {
    console.log('id para borrar: ' , {id})
  }




  const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 150 },
    { field: 'nombre', headerName: 'nombre', width: 150 },
    { field: 'activo', headerName: 'activo', width: 200 },
    // { field: 'fecha_nacimiento', headerName: 'fecha_nacimiento', width: 250 },
    // { field: 'correo_electronico', headerName: 'correo_electronico', width: 250 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowSelectionModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              //onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<Car />}
              label="Cancel"
              className="textPrimary"
              //onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<IoPencil size={30} />}
            label="Edit"
            className="textPrimary"
            //onClick={() => handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<IoTrash size={30}/>}
            label="Delete"
            onClick={() => handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    }
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
      {/* <button className={
        `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }  onClick={() => router.push('/dashboard/persona/nuevo') }>Agregar</button> */}

<button className={
        `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded`
      }  onClick={handleClick } type='submit' disabled={pending}>Borrar</button>

      {/* <Link href={"/dashboard/persona/nuevo"}>Add</Link> */}

      {/* <h1>Hello Grilla</h1> */}
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