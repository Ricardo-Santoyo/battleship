import AI from '../factory functions/computerAI';

test('AI makes a random move', () => {
  let COM1 = AI();
  let COM2 = AI();
  let pos = COM1.fire(COM2.gameboard);
  expect(COM2.gameboard.misses).toEqual([pos]);
});

test('AI makes a random legal move(1)', () => {
  let COM1 = AI();
  let COM2 = AI();
  for (let i = 1; i < 100; i++) {
    COM2.gameboard.board[i] = 'hit'
  }
  COM1.fire(COM2.gameboard);
  expect(COM2.gameboard.board[0]).toBe('miss');
});

test('AI makes a random legal move(2)', () => {
  let COM1 = AI();
  let COM2 = AI();
  for (let i = 0; i < 100; i++) {
    COM2.gameboard.board[i] = 'miss'
  };
  COM2.gameboard.placeShip(1, 'x', COM2.gameboard.ships[0]);
  COM1.fire(COM2.gameboard);
  COM1.fire(COM2.gameboard);
  let array = [COM2.gameboard.board[1]]
  array.push(COM2.gameboard.board[2])
  expect(array).toEqual(['hit', 'hit']);
});

test('AI places ships in a random position', () => {
  let COM1 = AI();
  COM1.autoPlaceShips(COM1.gameboard);
  expect(COM1.gameboard.ships[0].boardPosition).not.toEqual([]);
  expect(COM1.gameboard.ships[1].boardPosition).not.toEqual([]);
  expect(COM1.gameboard.ships[2].boardPosition).not.toEqual([]);
  expect(COM1.gameboard.ships[3].boardPosition).not.toEqual([]);
  expect(COM1.gameboard.ships[4].boardPosition).not.toEqual([]);
});