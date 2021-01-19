import Gameboard from './gameboard';
import autoPlaceShips from './autoPlaceShips';

function AI() {
  let currentTarget;
  let nextPos;
  let previousTarget;
  let shipTarget;

  function fire(enemyBoard) {
    let pos = currentTarget ? pickNextTarget(enemyBoard) : Math.floor(Math.random() * 100);
    if(!(currentTarget)) {
      while (enemyBoard.board[pos] !== '' && enemyBoard.board[pos] !== 'ship') {
        pos = Math.floor(Math.random() * 100);
      }
    }
    enemyBoard.receiveAttack(pos);
    if (enemyBoard.board[pos] === 'hit') {
      currentTarget = pos;
      if (!(previousTarget)) {
        previousTarget = pos;
        shipTarget = findShip(pos, enemyBoard.ships);
      }
    }
    return pos;
  };

  function findShip(pos, ships) {
    return ships.findIndex((ship) => (
      ship.boardPosition.includes(pos)
    ));
  };

  function setCurrentTarget(pos, ships) {
    currentTarget = pos;
    previousTarget = pos;
    nextPos = undefined;
    shipTarget = findShip(pos, ships);
  };

  function pickNextTarget(enemyBoard) {
    function validPos(pos) {
      if (enemyBoard.board[currentTarget + pos] !== 'miss' && enemyBoard.board[currentTarget + pos] !== 'hit' && currentTarget + pos < 100) {
        if (pos === 1 && currentTarget % 10 + 1 > 9) {
          return false;
        } else if (pos === -1 && currentTarget % 10 - 1 < 0) {
          return false;
        } else if (enemyBoard.board[currentTarget + pos] === 'ship' && !(enemyBoard.ships[shipTarget].boardPosition.includes(currentTarget + pos))) {
          return false;
        } else {
          return true;
        }
      }
    };

    if (isEnemyShipSunk(currentTarget, enemyBoard.ships)) {
      currentTarget = undefined;
      previousTarget = undefined;
      nextPos = undefined;
    } else {
      const possiblePos = [1, -1, 10, -10];
      if (!(enemyBoard.board[currentTarget + nextPos] !== 'miss' && enemyBoard.board[currentTarget + nextPos] !== 'hit' && currentTarget + nextPos < 100 && enemyBoard.ships[shipTarget].boardPosition.includes(currentTarget + nextPos))) {
        if (enemyBoard.board[previousTarget - nextPos] === 'ship' && nextPos && enemyBoard.ships[shipTarget].boardPosition.includes(previousTarget - nextPos)) {
          currentTarget = previousTarget;
          nextPos = -nextPos;
        } else {
          nextPos = possiblePos.find((pos) => (validPos(pos)));
        }
      }

      if (nextPos === undefined) {
        currentTarget = undefined;
        previousTarget = undefined;
      }
      return currentTarget + nextPos
    }
  };

  function isEnemyShipSunk(pos, ships) {
    return ships.filter(ship => ship.isSunk()).some((ship) => (
      ship.boardPosition.includes(pos)
    ));
  };

  return {
    name: 'COM',
    gameboard: Gameboard(),
    autoPlaceShips,
    fire,
    setCurrentTarget,
  };
};

export default AI;