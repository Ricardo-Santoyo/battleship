import React, { useState } from 'react';

function InitializeGame(props) {
  const [value, setValue] = useState('');
  const [invaildForm, setInvaildForm] = useState(false);
  
  function handleChange(e) {
    setValue(e.target.value);
  };

  function keyPress(e) {
    if (e.keyCode === 13) {
      props.initializePlayer(value);
    }
  };

  function validateForm() {
    if (/^[a-zA-Z]/.test(value)) {
      props.initializePlayer(value);
    } else {
      setInvaildForm(true);
    }
  }

  return (
    <div id='initializeGameContainer'>
      <div id='initializeGame'>
        <h1>BATTLESHIP</h1>
        <p>{invaildForm ? 'Name Required' : ''}</p>
        <input type='text' placeholder='Your Name' value={value} onChange={handleChange} onKeyDown={keyPress}></input>
        <button onClick={() => validateForm()}>Continue</button>
      </div>
    </div>
  );
};

export default InitializeGame;