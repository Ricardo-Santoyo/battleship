import React, { useState } from 'react';

function InitializeGame(props) {
  const [value, setValue] = useState('');
  
  function handleChange(e) {
    setValue(e.target.value);
  };

  return (
    <div id='initializeGame'>
      <input type='text' placeholder='Your Name' value={value} onChange={handleChange}></input>
      <button onClick={() => props.startGame(value)}>Start Game</button>
    </div>
  );
};

export default InitializeGame;