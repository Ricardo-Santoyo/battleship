import Gameboard from './gameboard';

function AI() {
  function fire(enemyBoard) {
    let pos = Math.floor(Math.random() * 100);
    while (enemyBoard.board[pos] !== undefined && enemyBoard.board[pos] !== 'ship') {
      pos = Math.floor(Math.random() * 100);
    }
    enemyBoard.receiveAttack(pos);
    return pos;
  };

  return {
    name: 'COM',
    gameboard: Gameboard(),
    fire
  };
};

export default AI;