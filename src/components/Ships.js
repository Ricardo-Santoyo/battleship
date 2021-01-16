import React from 'react';
import CreateShip from "./CreateShip";

function Ships(props) {
  return (
    <div id='shipsWrapper'>
      <button id='rotateButton' onClick={() => props.changeAxis()}>🗘Rotate</button>
      <div id='shipsContainer'>
        <CreateShip id='0' length='2' axis={props.axis} />
        <CreateShip id='1' length='3' axis={props.axis} />
        <CreateShip id='2' length='3' axis={props.axis} />
        <CreateShip id='3' length='4' axis={props.axis} />
        <CreateShip id='4' length='5' axis={props.axis} />
      </div>
    </div>
  );
};

export default Ships;