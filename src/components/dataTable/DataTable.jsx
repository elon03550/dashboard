import React from "react";
import "./dataTable.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

// type Props = {
//   columns: object[],
//   rows: object[],
// };

function DataTable(props) {
  const handleDelete = (id) => {
    console.log(id + "deleted");
  };

  const actionColumn = [
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/${props.action}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>

            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        );
      },
    },
  ];

  //

  return (
    <>
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        //search
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        //
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </>
  );
}

export default DataTable;
