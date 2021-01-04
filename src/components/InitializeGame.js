import React from 'react';

function InitializeGame(props) {
  return (
    <div id='initializeGame'>
      <button onClick={() => props.startGame()}>Start Game</button>
    </div>
  );
};

export default InitializeGame;