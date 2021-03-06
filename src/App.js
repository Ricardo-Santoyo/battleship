import React, { useState } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import InitializeGame from "./components/InitializeGame";
import GameText from "./components/GameText";
import Board from "./components/Board";
import GameOverCard from "./components/GameOverCard";
import Ships from "./components/Ships";
import ShipPreview from "./components/ShipPreview";
import Animation from "./components/Animation";

let player1;
let COM;
let winner;

function App() {
  const [board, setBoard] = useState(false);
  const [enemyBoard, setEnemyBoard] = useState(false);
  const [displayStartButton, setDisplayStartButton] = useState(false);
  const [allShipsPlaced, setAllShipsPlaced] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [axis, setAxis] = useState('y');
  const [playAnimation, setPlayAnimation] = useState(false);
  const [boardOn, setBoardOn] = useState(true);
  const [gameText, setGameText] = useState(['Place Your Ships','(Drag Ship on to The Board to Place)']);
  const [shipNumArray, setShipNumArray] = useState([]);

  function initializePlayer(name) {
    player1 = Player(name);
    setPlayAnimation(true);
    setTimeout(() => {
      setBoard(player1.gameboard.board);
    }, 200);
  };

  function changeAxis() {
    let newAxis = axis === 'y' ? 'x' : 'y';
    setAxis(newAxis);
  };

  function placeShip(id, axis, ship, shipPos) {
    shipPos = axis === 'x' ? shipPos : shipPos * 10;
    id -= shipPos;
    if (player1.gameboard.placeShip(id, axis, player1.gameboard.ships[ship])) {
      setShipNumArray([...shipNumArray, ship]);
      if (shipNumArray.length === 4) {
        setShipNumArray([]);
        setDisplayStartButton(true);
        setAllShipsPlaced(true);
      }
      setBoard([...player1.gameboard.board]);
    }
  };

  function autoPlace() {
    if (shipNumArray.length === 0) {
      resetPlayer();
      player1.autoPlaceShips(player1.gameboard);
      setAllShipsPlaced(true);
      setDisplayStartButton(true)
      setBoard([...player1.gameboard.board]);
    }
  };

  function startGame() {
    COM = AI();
    COM.autoPlaceShips(COM.gameboard);
    setPlayAnimation(true);
    setTimeout(() => {
      setGameText([`${player1.name}'s Turn`,'']);
      setEnemyBoard([...COM.gameboard.board]);
    }, 200);
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
      setBoardOn(true);
      setGameOver(true);
    } else if (isComputerTurn) {
      setGameText([`${COM.name}'s Turn`,'']);
      setBoardOn(false);
      setTimeout(() => {
        updateCell(null, true);
      }, 400);
    } else {
      setGameText([`${player1.name}'s Turn`,'']);
      setBoardOn(true);
    }
  };

  function resetPlayer() {
    player1 = Player(player1.name);
    setBoard([...player1.gameboard.board]);
  };

  function startOver() {
    resetPlayer();
    setPlayAnimation(true);
    setTimeout(() => {
      setEnemyBoard(false);
      setAllShipsPlaced(false);
      setGameOver(false);
      setGameText(['Place Your Ships','(Drag Ship on to The Board to Place)']);
    }, 200);
  };

  return (
    <div className="App">
      {board === false ? <InitializeGame initializePlayer={initializePlayer}/> : null}
      {board !== false ? <GameText h1={gameText[0]} p={gameText[1]}/> : null}
      <DndProvider options={HTML5toTouch}>
        <div id="boardsContainer">
          {board !== false ? <Board board={board} axis={axis} placeShip={allShipsPlaced ? null : placeShip} isEnemy={false} ships={player1.gameboard.ships}/> : null}
          {enemyBoard !== false ? <Board board={enemyBoard} updateCell={updateCell} isEnemy={true} ships={COM.gameboard.ships} class={boardOn ? null : 'off'}/> : null}
          {board !== false && allShipsPlaced === false ? <Ships axis={axis} changeAxis={changeAxis} shipNumArray={shipNumArray}/> : null}
          <ShipPreview axis={axis}/>
        </div>
      </DndProvider>
      {board !== false && enemyBoard === false ? <button id='autoPlaceButton' onClick={() => autoPlace()}>Auto Place</button> : null}
      {displayStartButton === true ? <button id='startGameButton' onClick={() => {startGame(); setDisplayStartButton(false)}}>Start Game</button> : null}
      {gameOver ? <GameOverCard winner={winner} startOver={startOver}/> : null}
      {playAnimation ? <Animation setPlayAnimation={setPlayAnimation}/> : null}
    </div>
  );
}

export default App;