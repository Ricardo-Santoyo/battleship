import React from 'react';
import Cell from './Cell';

function Board(props) {
  function boardType() {
    if (props.isEnemy) {
      return props.board.map((cell, id) => 
        <Cell key={id} id={id} content={cell} p2={true} listener={() => props.updateCell(id)} ships={props.ships}/>
      );
    } else {
      return props.board.map((cell, id) => 
        <Cell key={id} id={id} content={cell} p2={false} ships={props.ships} axis={props.axis} placeShip={props.placeShip}/>
      );
    }
  }

  return (
    <div className='board'>
      {boardType()}
    </div>
  );
};

export default Board;