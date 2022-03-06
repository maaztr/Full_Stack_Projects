import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Input } from 'antd';
import { Button } from 'antd';


export const IndividualCards = () => {
  const [color, setColor] = useState("#cef3cf");
  const [size, setSize] = useState({ Length: "", Width: "" });

  const colorbutton = (e) => {
    console.log(e.target.name);
    setColor(e.target.name);
  };
  const carSize = (e) => {
    console.log(e.target.id);
    setSize({ ...size, [e.target.id]: e.target.value });
    console.log(size);
  };

  return (
    <>
      <div className="vehicle">
        <div>
          <h2 id="vehicleNum"></h2>
        </div>
        <div className="colorButtons">
          <div>
            <Button name="green" id={"green_"} onClick={colorbutton}>
              green
            </Button>
          </div>
          <div>
            <button name="grey" id={"grey_"} onClick={colorbutton}>
              grey
            </button>
          </div>
          <div>
            <Button name="yellow" id={"yellow_"} onClick={colorbutton}>
              yellow
            </Button>
          </div>
          <div>
            <Button name="brown" id={"brown_"} onClick={colorbutton}>
              brown
            </Button>
          </div>
        </div>
        <div>
          <h2>What is the size of the car?</h2>
        </div>
        <div className="sizeVehicle">
          <div>
            <p>Length</p>
          </div>
          <div>
            <Input
              id="Length"
              type="text"
              placeholder="Length"
              onChange={carSize}
              value={size.Length}
            />
          </div>
          <div>
            <p>Width</p>
          </div>
          <div>
            <Input
              id="Width"
              type="text"
              placeholder="width"
              onChange={carSize}
              value={size.Width}
            />
          </div>
        </div>

        <div className="vehicleSize" style={{ background: color, width : `${size.Width}px`, height : `${size.Length}px`}}>
          <p>Car size & color</p>
        </div>
      </div>
    </>
  );
};
