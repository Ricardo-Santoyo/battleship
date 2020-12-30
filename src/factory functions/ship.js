function Ship(length, boardPosition) {
  let hits = [];

  function hit(pos) {
    hits.push(pos);
  };

  function isSunk() {
    return boardPosition.sort().join('') === hits.sort().join('');
  };

  return {
    length: length,
    boardPosition: boardPosition,
    hitPosition: hits,
    hit,
    isSunk
  };
};

export default Ship;