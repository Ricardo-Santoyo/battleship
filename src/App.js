import React, { useState } from 'react';
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import InitializeGame from "./components/InitializeGame";
import Board from "./components/Board";
import GameOverCard from "./components/GameOverCard";

let player1;
let COM = AI();
function placeShips() {
  player1.gameboard.placeShip(0, 'y', player1.gameboard.ships[0]);
  player1.gameboard.placeShip(1, 'y', player1.gameboard.ships[1]);
  player1.gameboard.placeShip(2, 'y', player1.gameboard.ships[2]);
  player1.gameboard.placeShip(3, 'y', player1.gameboard.ships[3]);
  player1.gameboard.placeShip(4, 'y', player1.gameboard.ships[4]);
  COM.placeShips(COM.gameboard);
}
let winner;

function App() {
  const [board, setBoard] = useState(false);
  const [enemyBoard, setEnemyBoard] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function startGame(name) {
    player1 = Player(name);
    placeShips();
    setBoard(player1.gameboard.board);
    setEnemyBoard(COM.gameboard.board);
  };

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

  function startOver() {
    player1 = Player(player1.name);
    COM = AI();
    placeShips();
    setBoard([...player1.gameboard.board]);
    setEnemyBoard([...COM.gameboard.board]);
    setGameOver(false);
  };

  return (
    <div className="App">
      {board === false ? <InitializeGame startGame={startGame}/> : null}
      <div id="boardsContainer">
        {board !== false ? <Board board={board} updateCell={updateCell} isEnemy={false}/> : null}
        {enemyBoard !== false ? <Board board={enemyBoard} updateCell={updateCell} isEnemy={true}/> : null}
      </div>
      {gameOver ? <GameOverCard winner={winner} startOver={startOver}/> : null}
    </div>
  );
}

export default App;