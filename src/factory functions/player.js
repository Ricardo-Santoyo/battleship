import Gameboard from './gameboard';

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
    fire
  };
};

export default Player;