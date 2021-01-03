import React from 'react';

function Board(props) {
  function boardType() {
    if (props.isEnemy === true) {
      return props.board.map((cell, id) => cellType(cell, id, () => {props.updateCell(id); props.updateCell(null, true);}));
    } else {
      return props.board.map((cell, id) => cellType(cell, id));
    }
  };

  function cellType(cell, id, listener) {
    switch (cell) {
      case 'miss':
        return <span key={id}>⬤</span>;
      case 'hit':
        return <span className='hit' key={id}>⬤</span>;
      case 'ship':
        return <span key={id} onClick={listener}>s</span>;
      default:
        return <span key={id} onClick={listener}></span>;
    }
  };

  return (
    <div className='board'>
      {boardType()}
    </div>
  );
};

export default Board;