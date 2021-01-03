import React from 'react';

function Board(props) {
  function boardType() {
    if (props.isEnemy === true) {
      return (
        props.board.map((cell, id) => (
          <span key={id} onClick={() => {props.updateCell(id); props.updateCell(null, true);}}>{cell === 'miss' ? '⬤' : cell}</span>
        ))
      );
    } else {
      return (
        props.board.map((cell, id) => (
          <span key={id}>{cell === 'miss' ? '⬤' : cell}</span>
        ))
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