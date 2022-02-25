import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 250},
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150,
  },
  { field: 'mobile', headerName: 'Mobile', width: 250},
  { field: 'email', headerName: 'Email', width: 250},
  { field: 'customerId', headerName: 'Ir', width: 250, renderCell: (params) => (
    <Link href={`/customer/${params.value}`}>Más...</Link>
  )},
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable({customers}) {

  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}