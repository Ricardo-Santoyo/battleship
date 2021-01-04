import React, { useState } from 'react';

function InitializeGame(props) {
  const [value, setValue] = useState('');
  
  function handleChange(e) {
    setValue(e.target.value);
  };

  function keyPress(e) {
    if (e.keyCode === 13) {
      props.startGame(value);
    }
  };

  return (
    <div id='initializeGame'>
      <h1>BATTLESHIP</h1>
      <input type='text' placeholder='Your Name' value={value} onChange={handleChange} onKeyDown={keyPress}></input>
      <button onClick={() => props.startGame(value)}>Start Game</button>
    </div>
  );
};

export default InitializeGame;