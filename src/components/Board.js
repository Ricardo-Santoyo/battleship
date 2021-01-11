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
        let d = (isSunk(id)) ? 'sunk' : 'hit';
        return <span className={d} key={id}>⬤</span>;
      case 'ship':
        let c = (isEnemyBoard) ? null : shipColor(id);
        return <span className={c} key={id} onClick={listener}></span>;
      default:
        return <span key={id} onClick={listener}></span>;
    }
  };

  function shipColor(id) {
    let value;
    for(let i = 0; i < 5; i++) {
      if (props.ships[i].boardPosition.includes(id)) {
        value = `ship ${i}`;
        break;
      }
    }
    return value;
  };

  function isSunk(id) {
    return props.ships.filter(ship => ship.isSunk()).some((ship) => (
      ship.boardPosition.includes(id)
    ));
  };

  return (
    <div className='board'>
      {boardType()}
    </div>
  );
};

export default Board;