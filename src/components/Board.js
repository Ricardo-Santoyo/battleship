import React from 'react';

function Board(props) {
  function boardType() {
    if (props.isEnemy) {
      return props.board.map((cell, id) => cellType(cell, id, true, () => props.updateCell(id)));
    } else {
      return props.board.map((cell, id) => cellType(cell, id));
    }
  };

  function cellType(cell, id, isEnemyBoard, listener) {
    switch (cell) {
      case 'miss':
        return <span key={id}>⬤</span>;
      case 'hit':
        return <span className='hit' key={id}>⬤</span>;
      case 'ship':
        let text = (isEnemyBoard) ? '' : 's';
        return <span key={id} onClick={listener}>{text}</span>;
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