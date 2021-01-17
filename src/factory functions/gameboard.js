import Ship from './ship';

function Gameboard() {
  let board = new Array(100);
  for (let i = 0; i < 100; i++) {
    board[i] = '';
  };
  let ships = [Ship(2,[]),Ship(3,[]),Ship(3,[]),Ship(4,[]),Ship(5,[])]
  let misses = [];

  function placeShip(pos, axis, ship) {
    let n = axis === 'y' ? 10 : 1;
    if (checkShipPlacementValidity(pos, ship, n)) {
      for(let i = 0; i < (ship.length * n); i += n) {
        board[pos + i] = 'ship';
        ship.boardPosition.push(pos + i);
      }
      return true;
    } else {
      return false;
    }
  };

  function checkShipPlacementValidity(pos, ship, n) {
    let vaild = true;
    if (pos < 0) {
      vaild = false;
    } else if (ship.boardPosition.length !== 0) {
      vaild = false
    } else {
      for(let i = 0; i < (ship.length * n); i += n) {
        if (board[pos + i] === 'ship') {
          vaild = false;
        } else if ((n === 1 && pos % 10 + i > 9) || (n === 10 && pos + (ship.length * 10 - 10) > 99)) {
          vaild = false;
        }
      }
    }
    return vaild;
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