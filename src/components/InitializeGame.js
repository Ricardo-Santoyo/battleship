import React, { useState } from 'react';

function InitializeGame(props) {
  const [value, setValue] = useState('');
  
  function handleChange(e) {
    setValue(e.target.value);
  };

  function keyPress(e) {
    if (e.keyCode === 13) {
      props.initializePlayer(value);
    }
  };

  return (
    <div id='initializeGameContainer'>
      <div id='initializeGame'>
        <h1>BATTLESHIP</h1>
        <input type='text' placeholder='Your Name' value={value} onChange={handleChange} onKeyDown={keyPress}></input>
        <button onClick={() => props.initializePlayer(value)}>Continue</button>
      </div>
    </div>
  );
};

export default InitializeGame;