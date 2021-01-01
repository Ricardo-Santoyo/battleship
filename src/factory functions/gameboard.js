import Ship from './ship';

function Gameboard() {
  let board = new Array(100);
  for (let i = 0; i < 100; i++) {
    board[i] = '';
  };
  let ships = [Ship(2,[]),Ship(3,[]),Ship(3,[]),Ship(4,[]),Ship(5,[])]
  let misses = [];

  function placeShip(pos, axis, ship) {
    if (axis === 'y') {
      for(let i = 0; i < (ship.length * 10); i += 10) {
        board[pos + i] = 'ship';
        ship.boardPosition.push(pos + i);
      }
    } else {
      for(let i = 0; i < ship.length; i++) {
        board[pos + i] = 'ship';
        ship.boardPosition.push(pos + i);
      }
    }
  };

  function receiveAttack(pos) {
    if (board[pos] === 'ship') {
      let index = ships.findIndex((ship) => ship.boardPosition.includes(pos));
      ships[index].hit(pos);
      board[pos] = 'hit';
    } else {
      misses.push(pos);
      board[pos] = 'miss';
    }
  };

  function areAllSunk() {
    return ships.every((ship) => ship.isSunk() === true);
  }

  return {
    board: board,
    misses: misses,
    ships: ships,
    placeShip,
    receiveAttack,
    areAllSunk
  };
};

export default Gameboard;