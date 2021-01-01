import React, { useState } from 'react';
import './App.css';
import Player from "./factory functions/player";
import AI from "./factory functions/computerAI";
import Board from "./components/Board";

function App() {
  const [players] = useState({1: Player('Player1'), 2: AI()});

  return (
    <div className="App">
      <Board board={players[1].gameboard.board} />
    </div>
  );
}

export default App;
