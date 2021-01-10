import Gameboard from './gameboard';
import autoPlaceShips from './autoPlaceShips';

function AI() {
  function fire(enemyBoard) {
    let pos = Math.floor(Math.random() * 100);
    while (enemyBoard.board[pos] !== '' && enemyBoard.board[pos] !== 'ship') {
      pos = Math.floor(Math.random() * 100);
    }
    enemyBoard.receiveAttack(pos);
    return pos;
  };

  return {
    name: 'COM',
    gameboard: Gameboard(),
    autoPlaceShips,
    fire,
  };
};

export default AI;