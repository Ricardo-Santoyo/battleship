import React from 'react';

function GameOverCard(props) {
  return (
    <div id='gameOverContainer'>
      <div id='gameOverCard'>
        <h1>{props.winner} Wins!</h1>
        <button onClick={() => props.startOver()}>Play Again?</button>
      </div>
    </div>
  );
};

export default GameOverCard;