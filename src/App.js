import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import InitializeGame from "./components/InitializeGame";
import Board from "./components/Board";
import GameOverCard from "./components/GameOverCard";
import Ships from "./components/Ships";

let player1;
let shipNumber = 0;
let p1Ships;
let COM;
let p2Ships;
let winner;

function App() {
  const [board, setBoard] = useState(false);
  const [enemyBoard, setEnemyBoard] = useState(false);
  const [displayStartButton, setDisplayStartButton] = useState(false);
  const [allShipsPlaced, setAllShipsPlaced] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [axis, setAxis] = useState('y');

  function initializePlayer(name) {
    player1 = Player(name);
    setBoard(player1.gameboard.board);
  };

  function changeAxis() {
    let newAxis = axis === 'y' ? 'x' : 'y';
    setAxis(newAxis);
  };

  function placeShip(id, axis, ship, shipPos) {
    shipPos = axis === 'x' ? shipPos : shipPos * 10;
    id = id - shipPos;
    if (player1.gameboard.placeShip(id, axis, player1.gameboard.ships[ship])) {
      shipNumber += 1
      p1Ships = player1.gameboard.ships;
      if (shipNumber === 5) {
        shipNumber = 0;
        setDisplayStartButton(true);
        setAllShipsPlaced(true);
      }
      setBoard([...player1.gameboard.board]);
    }
  };

  function autoPlace() {
    if (shipNumber === 0) {
      resetPlayer();
      player1.autoPlaceShips(player1.gameboard);
      p1Ships = player1.gameboard.ships;
      setAllShipsPlaced(true);
      setBoard([...player1.gameboard.board]);
    }
  };

  function startGame() {
    COM = AI();
    COM.autoPlaceShips(COM.gameboard);
    p2Ships = COM.gameboard.ships;
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
    setAllShipsPlaced(false);
    setGameOver(false);
  };

  return (
    <div className="App">
      {board === false ? <InitializeGame initializePlayer={initializePlayer}/> : null}
      {board !== false && enemyBoard === false ? <h1 id='shipPlacementTitle'>Place Your Ships</h1> : null}
      <DndProvider backend={HTML5Backend}>
        <div id="boardsContainer">
          {board !== false ? <Board board={board} axis={axis} placeShip={allShipsPlaced ? null : placeShip} isEnemy={false} ships={p1Ships}/> : null}
          {enemyBoard !== false ? <Board board={enemyBoard} updateCell={updateCell} isEnemy={true} ships={p2Ships}/> : null}
        </div>
        {board !== false && allShipsPlaced === false ? <Ships axis={axis} changeAxis={changeAxis}/> : null}
      </DndProvider>
      {board !== false && enemyBoard === false ? <button id='autoPlaceButton' onClick={() => {autoPlace(); setDisplayStartButton(true)}}>Auto Place</button> : null}
      {displayStartButton === true ? <button id='startGameButton' onClick={() => {startGame(); setDisplayStartButton(false)}}>Start Game</button> : null}
      {gameOver ? <GameOverCard winner={winner} startOver={startOver}/> : null}
    </div>
  );
}

export default App;