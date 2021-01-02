import React from 'react';

function Board(props) {

  return (
    <div className='board'>
      {props.board.map((cell, id) => (
        <span key={id} onClick={() => props.updateCell(id)}>{cell === 'miss' ? '⬤' : ''}</span>
      ))}
    </div>
  );
};

export default Board;