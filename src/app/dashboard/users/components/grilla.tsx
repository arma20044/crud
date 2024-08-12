'use client'

import { esES } from '@mui/x-data-grid/locales';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowModes, GridRowSelectionModel, GridToolbar } from "@mui/x-data-grid";
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { setCookie } from 'cookies-next'
import { Car, DeleteIcon, EditIcon, SaveIcon } from 'lucide-react';
import { IoAdd, IoDocument, IoDocumentText, IoPencil, IoTrash } from 'react-icons/io5';
import { eliminarActivities } from '@/app/actions/activities';
import { eliminarUsers } from '@/app/actions/usersActions';

export default function Grilla({ data }) {

  const { pending } = useFormStatus()

  //console.log('llego grilla activity: ', JSON.stringify(data))


  const router = useRouter();


  const handleEditClick = (id) => {
    console.log('id para borrar: ', { id })

    const seleccionado = data.filter(item => item.id == rowSelectionModel[0]);

    router.push(`/dashboard/activities/editar?dato=${id}`)


  }


  const handleDeleteClick = async(id) => {
    console.log('id para borrar: ', { id })

   await eliminarUsers(
      id
    );

    router.refresh();
  }




  const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 150 },
    { field: 'email', headerName: 'email', width: 150 },
    { field: 'password', headerName: 'password', width: 200 },
    { field: 'avatar_url', headerName: 'avatar_url', width: 200 },
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
            onClick={() => handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<IoTrash size={30} />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    }
  ];


  function handleClick() {
    //throw new Error("Function not implemented.");
    console.log('borrar', rowSelectionModel)

    eliminarActivities(
      rowSelectionModel[0]
    );

    router.refresh()
  }

  const borrar = () => {

    console.log('quiero borrar')
    console.log(JSON.stringify(rowSelectionModel))

    if (rowSelectionModel.length === 0) {
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

    const selectedRows = data.filter(item => item.id == rowSelectionModel[0]);

    //const selectedRows = useMemo(() => [...data].filter(row => row.id == rowSelectionModel[0]), [data])


  useEffect(() => {
    rowSelectionModel && rowSelectionModel.length > 0 && //setCookie('seleccionado', rowSelectionModel)
    console.log(JSON.stringify(rowSelectionModel))

    console.log(JSON.stringify(selectedRows))


  }, [rowSelectionModel])


  return (
    <div>
     

      {/* <button className={
        `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded`
      } onClick={handleClick} type='submit' disabled={pending}>Borrar</button> */}

      

      {
        <Box sx={{ height: 500, width: 1 }}>
          <DataGrid
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}


            rows={data} columns={columns}

            rowSelectionModel={rowSelectionModel}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
          />
        </Box>
      }
    </div>
  );
}