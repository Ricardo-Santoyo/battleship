import React, { useState } from 'react';
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import Board from "./components/Board";
import GameOverCard from "./components/GameOverCard";

let player1 = Player('player1');
player1.gameboard.placeShip(0, 'y', player1.gameboard.ships[0]);
player1.gameboard.placeShip(1, 'y', player1.gameboard.ships[1]);
player1.gameboard.placeShip(2, 'y', player1.gameboard.ships[2]);
player1.gameboard.placeShip(3, 'y', player1.gameboard.ships[3]);
player1.gameboard.placeShip(4, 'y', player1.gameboard.ships[4]);
let COM = AI();
COM.gameboard.placeShip(85, 'y', COM.gameboard.ships[0]);
COM.gameboard.placeShip(76, 'y', COM.gameboard.ships[1]);
COM.gameboard.placeShip(77, 'y', COM.gameboard.ships[2]);
COM.gameboard.placeShip(68, 'y', COM.gameboard.ships[3]);
COM.gameboard.placeShip(59, 'y', COM.gameboard.ships[4]);
let winner;

function App() {
  const [board, setBoard] = useState(player1.gameboard.board);
  const [enemyBoard, setEnemyBoard] = useState(COM.gameboard.board);
  const [gameOver, setGameOver] = useState(false);

  function updateCell(id, isComputer) {
    if (isComputer === true) {
      COM.fire(player1.gameboard);
      setBoard([...player1.gameboard.board]);
      gameLoop();
    } else {
      player1.fire(id, COM.gameboard);
      setEnemyBoard([...COM.gameboard.board]);
      gameLoop(true);
    }
  };

  function gameLoop(isComputerTurn) {
    if (player1.gameboard.areAllSunk() || COM.gameboard.areAllSunk()) {
      winner = (COM.gameboard.areAllSunk()) ? player1.name : COM.name;
      setGameOver(true);
    } else if (isComputerTurn) {
      updateCell(null, true);
    }
  };

  function renderGameOverCard() {
    if (gameOver) {
      return <GameOverCard winner={winner} startOver={startOver}/>
    }
  };

  function startOver() {
    player1 = Player(player1.name);
    player1.gameboard.placeShip(0, 'y', player1.gameboard.ships[0]);
    player1.gameboard.placeShip(1, 'y', player1.gameboard.ships[1]);
    player1.gameboard.placeShip(2, 'y', player1.gameboard.ships[2]);
    player1.gameboard.placeShip(3, 'y', player1.gameboard.ships[3]);
    player1.gameboard.placeShip(4, 'y', player1.gameboard.ships[4]);
    COM = AI();
    COM.gameboard.placeShip(85, 'y', COM.gameboard.ships[0]);
    COM.gameboard.placeShip(76, 'y', COM.gameboard.ships[1]);
    COM.gameboard.placeShip(77, 'y', COM.gameboard.ships[2]);
    COM.gameboard.placeShip(68, 'y', COM.gameboard.ships[3]);
    COM.gameboard.placeShip(59, 'y', COM.gameboard.ships[4]);
    setBoard([...player1.gameboard.board]);
    setEnemyBoard([...COM.gameboard.board]);
    setGameOver(false);
  };

  return (
    <div className="App">
      <Board board={board} updateCell={updateCell} isEnemy={false}/>
      <Board board={enemyBoard} updateCell={updateCell} isEnemy={true}/>
      {renderGameOverCard()}
    </div>
  );
}

export default App;