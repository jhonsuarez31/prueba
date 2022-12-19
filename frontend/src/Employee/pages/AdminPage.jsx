import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
export const AdminPage = () => {
  const { data, isLoading } = useFetch(`http://localhost:5000/get-User`, []);
  

  
  return (
    <>  
    <div className="container">
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Status</th>
            <th scope="col">Date Registry</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((user) => (
            <tr key={user.idemployee}>
              <td scope="col">{user.name}</td>
              <td scope="col">{user.last_name}</td>
              <td scope="col">{user.state}</td>
              <td scope="col">{user.date_registry}</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      </div>
    </>
  );
};
