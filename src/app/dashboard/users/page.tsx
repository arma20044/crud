

import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridRowModesModel, GridToolbarContainer, GridRowModes, GridSlots } from '@mui/x-data-grid';
import { sql } from '@vercel/postgres';

import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import { Button } from '@mui/material';
import { IoAdd } from 'react-icons/io5';
import formUsers from './form';
import FormUsers from './form';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 150 },
  { field: 'email', headerName: 'email', width: 200 },
  { field: 'password', headerName: 'password', width: 250 },
];

export default async function App() {

  const response = await sql`
  SELECT * FROM users
`;
const users = response.rows;


console.log({users})



  return (
   <FormUsers columns={columns} rows={users}/>
  );
}
