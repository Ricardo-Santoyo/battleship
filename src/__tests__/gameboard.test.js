import Gameboard from '../factory functions/gameboard';

test('board has the correct number of cells', () => {
  let array = new Array(100);
  for (let i = 0; i < 100; i++) {
    array[i] = '';
  };
  expect(Gameboard().board).toEqual(array);
});

test('places ship on board correctly(1)', () => {
  let board = Gameboard();
  board.placeShip(10, 'y', board.ships[0]);
  let array = [board.board[10], board.board[20]];
  expect(array).toEqual(['ship', 'ship']);
});

test('places ship on board correctly(2)', () => {
  let board = Gameboard();
  board.placeShip(3, 'y', board.ships[4]);
  let array = [board.board[3], board.board[13], board.board[23], board.board[33], board.board[43]];
  expect(array).toEqual(['ship', 'ship', 'ship', 'ship', 'ship']);
});

test('places ship on board correctly(3)', () => {
  let board = Gameboard();
  board.placeShip(44, 'x', board.ships[2]);
  let array = [board.board[44], board.board[45], board.board[46]];
  expect(array).toEqual(['ship', 'ship', 'ship']);
});

test('places ship on board correctly(4)', () => {
  let board = Gameboard();
  board.placeShip(91, 'x', board.ships[3]);
  let array = [board.board[91], board.board[92], board.board[93], board.board[94]];
  expect(array).toEqual(['ship', 'ship', 'ship', 'ship']);
});

test('passes board position to ship(1)', () => {
  let board = Gameboard();
  board.placeShip(3, 'y', board.ships[4]);
  expect(board.ships[4].boardPosition).toEqual([3,13,23,33,43]);
});

test('passes board position to ship(2)', () => {
  let board = Gameboard();
  board.placeShip(47, 'x', board.ships[1]);
  expect(board.ships[1].boardPosition).toEqual([47,48,49]);
});

test('shot that doesnt hit a ship is marked as a miss(1)', () => {
  let board = Gameboard();
  board.receiveAttack(81);
  expect(board.misses).toEqual([81]);
});

test('shot that doesnt hit a ship is marked as a miss(2)', () => {
  let board = Gameboard();
  board.receiveAttack(35);
  expect(board.misses).toEqual([35]);
});

test('multiple shots that dont hit a ship are marked as a miss', () => {
  let board = Gameboard();
  board.receiveAttack(50);
  board.receiveAttack(93);
  board.receiveAttack(7);
  board.receiveAttack(31);
  expect(board.misses).toEqual([50,93,7,31]);
});

test('shot that hits a ship is marked as a hit(1)', () => {
  let board = Gameboard();
  board.placeShip(91, 'x', board.ships[3]);
  board.receiveAttack(92);
  expect(board.ships[3].hitPosition).toEqual([92]);
});

test('shot that hits a ship is marked as a hit(2)', () => {
  let board = Gameboard();
  board.placeShip(35, 'y', board.ships[2]);
  board.receiveAttack(55);
  expect(board.ships[2].hitPosition).toEqual([55]);
});

test('multiple shots that hit a ship are marked as a hit', () => {
  let board = Gameboard();
  board.placeShip(0, 'y', board.ships[4]);
  board.receiveAttack(0);
  board.receiveAttack(30);
  board.receiveAttack(10);
  board.receiveAttack(20);
  expect(board.ships[4].hitPosition).toEqual([0,30,10,20]);
});

test('when all ships are not sunk it returns false', () => {
  let board = Gameboard();
  board.placeShip(0, 'y', board.ships[0]);
  board.placeShip(1, 'y', board.ships[1]);
  board.placeShip(2, 'y', board.ships[2]);
  board.placeShip(3, 'y', board.ships[3]);
  board.placeShip(4, 'y', board.ships[4]);
  board.receiveAttack(0);
  board.receiveAttack(10);
  board.receiveAttack(1);
  board.receiveAttack(11);
  board.receiveAttack(21);
  board.receiveAttack(2);
  board.receiveAttack(12);
  board.receiveAttack(22);
  expect(board.areAllSunk()).toBe(false);
});

test('when all ships are sunk it returns true', () => {
  let board = Gameboard();
  board.placeShip(0, 'y', board.ships[0]);
  board.placeShip(1, 'y', board.ships[1]);
  board.placeShip(2, 'y', board.ships[2]);
  board.placeShip(3, 'y', board.ships[3]);
  board.placeShip(4, 'y', board.ships[4]);
  board.receiveAttack(0);
  board.receiveAttack(10);
  board.receiveAttack(1);
  board.receiveAttack(11);
  board.receiveAttack(21);
  board.receiveAttack(2);
  board.receiveAttack(12);
  board.receiveAttack(22);
  board.receiveAttack(3);
  board.receiveAttack(13);
  board.receiveAttack(23);
  board.receiveAttack(33);
  board.receiveAttack(4);
  board.receiveAttack(14);
  board.receiveAttack(24);
  board.receiveAttack(34);
  board.receiveAttack(44);
  expect(board.areAllSunk()).toBe(true);
});