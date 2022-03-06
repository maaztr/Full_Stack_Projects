import React, { useState } from "react";
import { IndividualCards } from "../IndividualCards";

export const VehicleCards = () => {
  const [card, setcard] = useState([]);

  const handleButton = (e) => {
    e.preventDefault();

    if (e.target.name === "add") {
      setcard([...card, { length: card.length, key: Date.now() }]);
    } else if (e.target.name === "remove" && card.length > 0) {
      let temp = [...card];
      temp.pop();
      setcard([...temp]);
    }
  };

  return (
    <>
      <div className="btnsTotalVehicles">
        <div>
          <button name="add" onClick={handleButton}>
            +
          </button>
        </div>
        <div>
          <button name="remove" onClick={handleButton}>
            -
          </button>
        </div>
      </div>
      {card.map((val, index) => {
        return (
          <>
          {console.log(index)}
            <IndividualCards index/>
          </>
        );
      })}
    </>
  );
};
