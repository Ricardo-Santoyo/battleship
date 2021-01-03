import React, { useState } from 'react';
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import Board from "./components/Board";
const player1 = Player('player1');
player1.gameboard.placeShip(0, 'y', player1.gameboard.ships[0]);
player1.gameboard.placeShip(1, 'y', player1.gameboard.ships[1]);
player1.gameboard.placeShip(2, 'y', player1.gameboard.ships[2]);
player1.gameboard.placeShip(3, 'y', player1.gameboard.ships[3]);
player1.gameboard.placeShip(4, 'y', player1.gameboard.ships[4]);
const COM = AI();
COM.gameboard.placeShip(85, 'y', COM.gameboard.ships[0]);
COM.gameboard.placeShip(76, 'y', COM.gameboard.ships[1]);
COM.gameboard.placeShip(77, 'y', COM.gameboard.ships[2]);
COM.gameboard.placeShip(68, 'y', COM.gameboard.ships[3]);
COM.gameboard.placeShip(59, 'y', COM.gameboard.ships[4]);

function App() {
  const [board, setBoard] = useState(player1.gameboard.board);
  const [enemyBoard, setEnemyBoard] = useState(COM.gameboard.board);

  function updateCell(id, isComputer) {
    if (isComputer === true) {
      COM.fire(player1.gameboard);
      setBoard([...player1.gameboard.board]);
    } else {
      player1.fire(id, COM.gameboard);
      setEnemyBoard([...COM.gameboard.board]);
    }
  };

  return (
    <div className="App">
      <Board board={board} updateCell={updateCell} isEnemy={false}/>
      <Board board={enemyBoard} updateCell={updateCell} isEnemy={true}/>
    </div>
  );
}

export default App;
