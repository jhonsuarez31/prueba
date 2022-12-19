import React, { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export const ClientPage = () => {
  const { data, isLoading } = useFetch(`http://localhost:5000/get-User`, []);
  console.log(data)
  return (
    <div className="container">
    <MDBTable  className="table-container">
      <MDBTableHead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Status</th>
          <th scope="col">Date Registry</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((user) => (
          <tr key={user.idemployee}>
          <td scope="col">{user.name}</td>
            <td scope="col">{user.last_name}</td>
            <td scope="col">{user.state}</td>
            <td scope="col">{user.date_registry}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
};
