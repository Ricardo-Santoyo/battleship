import React from 'react';

function GameText(props) {

  return (
    <div id='gameText'>
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
    </div>
  );
};

export default GameText;