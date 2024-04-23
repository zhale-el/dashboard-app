import React, { useState } from "react";
import { products } from "../../Data";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Products = () => {
  const [productDatas, setProductDatas] = useState(products);

  const productDelete = (productId) => {
    setProductDatas(productDatas.filter((product) => product.id != productId));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/productitem/${params.row.id}`} className="link">
            <div className="user-list">
              <img src={params.row.avatar} className="product-list__img" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,

      renderCell: (params) => {
        return (
          <div className="user-list__actions">
            <Link to={`/productitem/${params.row.id}`} className="link">
              <button className="user-list__edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="user-list__delete"
              onClick={() => productDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="users__list">
      <DataGrid
        rows={productDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={[3]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Products;
