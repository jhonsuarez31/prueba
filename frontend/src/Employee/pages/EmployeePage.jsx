import React from "react";

import { MDBInput } from "mdb-react-ui-kit";
import { useForm } from "../../Hooks/useForm";
import { useFetch } from "../../Hooks/useFetch";

const initialForm = {
  state: "",
};
export const EmployeePage = () => {
  const { Form, onInputChange, onSubmit } = useForm(initialForm);
  
  return (
    <>
      <div className="container">
        <form id="forma" onSubmit={onSubmit}>
          <div className="form-control" onChange={onInputChange}>
            <input type="radio" value="Active" name="state" /> Active
            <input type="radio" value="Inactive" name="state" /> Inactive
          </div>
          <button className="btn-confirm" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </>
  );
};
