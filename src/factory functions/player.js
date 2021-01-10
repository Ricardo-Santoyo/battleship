import Gameboard from './gameboard';
import autoPlaceShips from './autoPlaceShips';

function Player(name) {
  function fire(pos, enemyBoard) {
    let cell = enemyBoard.board[pos]
    if (cell === '' || cell === 'ship') {
      enemyBoard.receiveAttack(pos);
    } else {
      return false;
    }
  };

  return {
    name,
    gameboard: Gameboard(),
    autoPlaceShips,
    fire
  };
};

export default Player;