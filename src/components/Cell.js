import React from 'react';
import { useDrop } from 'react-dnd';

function Cell(props) {
  const [, drop] = useDrop({
    accept: 'ship',
    drop: (monitor) => (props.placeShip(props.id, props.axis, monitor.id, monitor.pos))
  });

  let a = [];

  function content() {
    switch (props.content) {
      case 'miss':
        return '⬤';
      case 'hit':
        return '⬤';
      default:
        return '';
    }
  };

  function cellType() {
    switch (props.content) {
      case 'hit':
        let sunk = (isSunk()) ? 'sunk' : 'hit';
        a[0] = sunk;
        break;
      case 'ship':
        let color = props.p2 ? null : shipColor();
        a[0] = color;
        break;
      default:
        let droppable = props.p2 ? null : drop;
        a[1] = droppable
        break;
    }
  };
  cellType();

  function isSunk() {
    return props.ships.filter(ship => ship.isSunk()).some((ship) => (
      ship.boardPosition.includes(props.id)
    ));
  };

  function shipColor() {
    let value;
    for(let i = 0; i < 5; i++) {
      if (props.ships[i].boardPosition.includes(props.id)) {
        value = `ship ${i}`;
        break;
      }
    }
    return value;
  };

  return (
    <span className={a[0]} ref={a[1]} onClick={props.listener}>{content()}</span>
  );
};

export default Cell;