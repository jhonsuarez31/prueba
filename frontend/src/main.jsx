import React from "react";
import ReactDOM from "react-dom/client";
import  { Prueba } from "./Prueba";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <Prueba/>
    </BrowserRouter>
 
);
