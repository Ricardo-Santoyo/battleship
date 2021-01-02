import React, { useState } from 'react';
import './App.css';
import Player from "./factory functions/player";
import Board from "./components/Board";
const player1 = Player('player1');

function App() {
  const [board, setBoard] = useState(player1.gameboard.board);

  function updateCell(id) {
    player1.gameboard.receiveAttack(id);
    setBoard([...player1.gameboard.board]);
  };

  return (
    <div className="App">
      <Board board={board} updateCell={updateCell}/>
    </div>
  );
}

export default App;
