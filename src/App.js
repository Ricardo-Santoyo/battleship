import React, { useState } from 'react';
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import Board from "./components/Board";
const player1 = Player('player1');
const COM = AI();

function App() {
  const [board] = useState(player1.gameboard.board);
  const [enemyBoard, setEnemyBoard] = useState(COM.gameboard.board);

  function updateCell(id) {
    player1.fire(id, COM.gameboard);
    setEnemyBoard([...COM.gameboard.board]);
  };

  return (
    <div className="App">
      <Board board={board} updateCell={updateCell} isEnemy={false}/>
      <Board board={enemyBoard} updateCell={updateCell} isEnemy={true}/>
    </div>
  );
}

export default App;
