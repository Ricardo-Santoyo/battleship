import React from 'react';

function Board(props) {
  function boardType() {
    if (props.isEnemy === true) {
      return (
        props.board.map((cell, id) => (
          <span key={id} onClick={() => props.updateCell(id)}>{cell === 'miss' ? '⬤' : ''}</span>
        ))
      );
    } else {
      return (
        props.board.map((cell, id) => (
          <span key={id}>{cell === 'miss' ? '⬤' : ''}</span>
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