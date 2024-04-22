import React, { useState } from "react";
import { userRows } from "../../Data";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const UserList = () => {
  const [userDatas, setUserDatas] = useState(userRows);
  const userDelete = (userId) => {
    setUserDatas(userDatas.filter((user) => user.id != userId));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="user-list">
              <img src={params.row.avator} className="user-list__img" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,

      renderCell: (params) => {
        return (
          <div className="user-list__actions">
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="user-list__edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="user-list__delete"
              onClick={() => userDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="users__list">
      <DataGrid
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserList;
