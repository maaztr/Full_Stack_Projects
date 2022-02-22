import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FullName } from "../FullName";
import { VehicleCards } from "../VehicleCards";
import { Delete } from "../Delete";

export const App = () => {
  /*   const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };
  console.log(data); */
  return (
    <div className="main">
      <div>
        <h1 id="test">Registratioin Form</h1>
      </div>
      <div>
        <h2>How many vehicles do you want to buy?</h2>
      </div>

      <FullName />

      <VehicleCards />

      <div id="end"></div>
    </div>
  );
};
