"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Icon, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "user_id", headerName: "User Id", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 100,
    editable: true,
  },
  {
    field: "module",
    headerName: "Module",
    type: "number",
    width: 100,
    editable: true,
    renderCell:(params)=>(
        <div>{params.row.module}</div>
      )
  },
  {
    field: "role",
    headerName: "Role",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "creation_date",
    headerName: "Creation Date",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <div>
        <IconButton >
          <VisibilityIcon fontSize="small"  />
        </IconButton>
        <IconButton  >
          <EditIcon fontSize="small"/>
        </IconButton>
      </div>
    ),
    editable: true,
  },
];

const rows = [
  {
    user_id: "1",
    name: "Snow",
    designation: "Jon",
    module: 14,
    role: "admin",
    status: "active",
    creation_date: "21-02-2022",
  },
  {
    user_id: "2",
    name: "Doe",
    designation: "Jane",
    module: 12,
    role: "user",
    status: "inactive",
    creation_date: "10-03-2021",
  },
  {
    user_id: 3,
    name: "Smith",
    designation: "John",
    module: 11,
    role: "admin",
    status: "active",
    creation_date: "15-05-2020",
  },
  {
    user_id: 4,
    name: "Brown",
    designation: "Charlie",
    module: 9,
    role: "user",
    status: "active",
    creation_date: "02-07-2019",
  },
  {
    user_id: 5,
    name: "Johnson",
    designation: "Emily",
    module: 8,
    role: "moderator",
    status: "inactive",
    creation_date: "29-08-2018",
  },
  {
    user_id: 6,
    name: "Williams",
    designation: "Michael",
    module: 7,
    role: "user",
    status: "active",
    creation_date: "11-09-2017",
  },
  {
    user_id: 7,
    name: "Taylor",
    designation: "Jessica",
    module: 6,
    role: "admin",
    status: "inactive",
    creation_date: "18-10-2016",
  },
  {
    user_id: 8,
    name: "Anderson",
    designation: "David",
    module: 5,
    role: "user",
    status: "active",
    creation_date: "23-11-2015",
  },
  {
    user_id: 9,
    name: "Thomas",
    designation: "Daniel",
    module: 4,
    role: "moderator",
    status: "inactive",
    creation_date: "30-12-2014",
  },
  {
    user_id: 10,
    name: "Jackson",
    designation: "Sarah",
    module: 3,
    role: "user",
    status: "active",
    creation_date: "05-01-2013",
  },
  {
    user_id: 11,
    name: "White",
    designation: "Robert",
    module: 2,
    role: "admin",
    status: "inactive",
    creation_date: "12-02-2012",
  },
  {
    user_id: 12,
    name: "Harris",
    designation: "Laura",
    module: 1,
    role: "user",
    status: "active",
    creation_date: "19-03-2011",
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ width: "90%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.user_id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{
          '.css-yrdy0g-MuiDataGrid-columnHeaderRow': {
            backgroundColor: '#0f0f0f ',
          },
        }}
      />
    </Box>
  );
}
