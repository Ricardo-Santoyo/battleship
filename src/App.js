import React, { useState } from 'react';
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import InitializeGame from "./components/InitializeGame";
import Board from "./components/Board";
import GameOverCard from "./components/GameOverCard";

let player1;
let COM;
let winner;

function App() {
  const [board, setBoard] = useState(false);
  const [enemyBoard, setEnemyBoard] = useState(false);
  const [displayStartButton, setDisplayStartButton] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function initializePlayer(name) {
    player1 = Player(name);
    setBoard(player1.gameboard.board);
  };

  function autoPlace() {
    resetPlayer();
    player1.autoPlaceShips(player1.gameboard);
    setBoard([...player1.gameboard.board]);
  };

  function startGame() {
    COM = AI();
    COM.autoPlaceShips(COM.gameboard);
    setEnemyBoard([...COM.gameboard.board]);
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

  function resetPlayer() {
    player1 = Player(player1.name);
    setBoard([...player1.gameboard.board]);
  };

  function startOver() {
    resetPlayer();
    setEnemyBoard(false);
    setGameOver(false);
  };

  return (
    <div className="App">
      {board === false ? <InitializeGame initializePlayer={initializePlayer}/> : null}
      {board !== false && enemyBoard === false ? <h1 id='shipPlacementTitle'>Place Your Ships</h1> : null}
      <div id="boardsContainer">
        {board !== false ? <Board board={board} isEnemy={false}/> : null}
        {enemyBoard !== false ? <Board board={enemyBoard} updateCell={updateCell} isEnemy={true}/> : null}
      </div>
      {board !== false && enemyBoard === false ? <button id='autoPlaceButton' onClick={() => {autoPlace(); setDisplayStartButton(true)}}>Auto Place</button> : null}
      {displayStartButton === true ? <button id='startGameButton' onClick={() => {startGame(); setDisplayStartButton(false)}}>Start Game</button> : null}
      {gameOver ? <GameOverCard winner={winner} startOver={startOver}/> : null}
    </div>
  );
}

export default App;