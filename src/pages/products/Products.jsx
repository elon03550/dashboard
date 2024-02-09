import React, { useState } from "react";
import "./products.css";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";

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
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
    // editable: true,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
    // editable: true,
  },

  {
    field: "price",
    type: "integer",
    headerName: "Price",
    width: 200,
  },
  //status fields
  {
    field: "producer",
    headerName: "Producer",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    type: "boolean",
    headerName: "In Stock",
    width: 150,
  },
];

function Products() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="products">
        <div className="info">
          <h1>Products</h1>
          <button onClick={() => setOpen(true)}>Add New Products</button>
        </div>
        <DataTable columns={columns} rows={products} action="products" />
        {open && <Add setOpen={setOpen} action="products" columns={columns} />}
      </div>
    </>
  );
}

export default Products;
