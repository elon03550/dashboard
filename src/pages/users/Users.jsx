import React, { useState } from "react";
import "./users.css";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import Add from "../../components/add/Add";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  //for image
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
    // editable: true,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
    // editable: true,
  },

  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "integer",
    headerName: "Phone",
    width: 200,
  },
  //status fields
  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "boolean",
  },

  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

function Users() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="users">
        <div className="info">
          <h1>Users</h1>
          <button onClick={() => setOpen(true)}>Add New User</button>
        </div>
        <DataTable columns={columns} rows={userRows} action="users" />
        {open && <Add setOpen={setOpen} action="users" columns={columns} />}
      </div>
    </>
  );
}

export default Users;
