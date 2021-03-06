function autoPlaceShips(gameboard) {
  for (let i = 0; i <= 4; i++) {
    let axis = (Math.floor(Math.random() * 2) === 1) ? 'x' : 'y';
    let pos = Math.floor(Math.random() * 100);
    let length = gameboard.ships[i].length;
    let array = [];
    if (axis === 'x') {
      for(let i = 0; i < length; i++) {
        array.push(pos + i);
      }
      while (!(pos % 10 + length <= 9 && array.every((p) => gameboard.board[p] === ''))) {
        pos = Math.floor(Math.random() * 100);
        array = [];
        for(let i = 0; i < length; i++) {
          array.push(pos + i);
        }
      }
    } else {
      for(let i = 0; i < (length * 10); i += 10) {
        array.push(pos + i);
      }
      while (!(pos + (length * 10 - 10) <= 99 && array.every((p) => gameboard.board[p] === ''))) {
        pos = Math.floor(Math.random() * 100);
        array = [];
        for(let i = 0; i < (length * 10); i += 10) {
          array.push(pos + i);
        }
      }
    }
    gameboard.placeShip(pos, axis, gameboard.ships[i]);
  }
};

export default autoPlaceShips;