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

test('when the AI hits a ship, the next attack will be adjacent to the last hit(1)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(0, 'y', COM2.gameboard.ships[0]);
  COM2.gameboard.receiveAttack(10);
  COM1.setCurrentTarget(10, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(11);
  expect(COM1.fire(COM2.gameboard)).toBe(20);
  expect(COM1.fire(COM2.gameboard)).toBe(0);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(2)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(17, 'x', COM2.gameboard.ships[1]);
  COM2.gameboard.receiveAttack(17);
  COM1.setCurrentTarget(17, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(18);
  expect(COM1.fire(COM2.gameboard)).toBe(19);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(3)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(50, 'y', COM2.gameboard.ships[4]);
  COM2.gameboard.receiveAttack(90);
  COM1.setCurrentTarget(90, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(91);
  expect(COM1.fire(COM2.gameboard)).toBe(80);
  expect(COM1.fire(COM2.gameboard)).toBe(70);
  expect(COM1.fire(COM2.gameboard)).toBe(60);
  expect(COM1.fire(COM2.gameboard)).toBe(50);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(4)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(25, 'y', COM2.gameboard.ships[3]);
  COM2.gameboard.receiveAttack(35);
  COM1.setCurrentTarget(35, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(36);
  expect(COM1.fire(COM2.gameboard)).toBe(34);
  expect(COM1.fire(COM2.gameboard)).toBe(45);
  expect(COM1.fire(COM2.gameboard)).toBe(55);
  expect(COM1.fire(COM2.gameboard)).toBe(25);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(5)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(65, 'y', COM2.gameboard.ships[0]);
  COM2.gameboard.placeShip(95, 'x', COM2.gameboard.ships[4]);
  COM2.gameboard.receiveAttack(75);
  COM1.setCurrentTarget(75, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(76);
  expect(COM1.fire(COM2.gameboard)).toBe(74);
  expect(COM1.fire(COM2.gameboard)).toBe(85);
  expect(COM1.fire(COM2.gameboard)).toBe(65);
  COM2.gameboard.receiveAttack(98);
  COM1.setCurrentTarget(98, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(99);
  expect(COM1.fire(COM2.gameboard)).toBe(97);
  expect(COM1.fire(COM2.gameboard)).toBe(96);
  expect(COM1.fire(COM2.gameboard)).toBe(95);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(6)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(49, 'y', COM2.gameboard.ships[2]);
  COM2.gameboard.receiveAttack(69);
  COM1.setCurrentTarget(69, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(68);
  expect(COM1.fire(COM2.gameboard)).toBe(79);
  expect(COM1.fire(COM2.gameboard)).toBe(59);
  expect(COM1.fire(COM2.gameboard)).toBe(49);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(7)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(40, 'y', COM2.gameboard.ships[4]);
  COM2.gameboard.receiveAttack(80);
  COM1.setCurrentTarget(80, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(81);
  expect(COM1.fire(COM2.gameboard)).toBe(90);
  expect(COM1.fire(COM2.gameboard)).toBe(70);
  expect(COM1.fire(COM2.gameboard)).toBe(60);
  expect(COM1.fire(COM2.gameboard)).toBe(50);
  expect(COM1.fire(COM2.gameboard)).toBe(40);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(8)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(1, 'y', COM2.gameboard.ships[3]);
  COM2.gameboard.placeShip(40, 'x', COM2.gameboard.ships[1]);
  COM2.gameboard.receiveAttack(40);
  COM2.gameboard.receiveAttack(41);
  COM2.gameboard.receiveAttack(42);
  COM2.gameboard.receiveAttack(21);
  COM1.setCurrentTarget(21, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(22);
  expect(COM1.fire(COM2.gameboard)).toBe(20);
  expect(COM1.fire(COM2.gameboard)).toBe(31);
  expect(COM1.fire(COM2.gameboard)).toBe(11);
  expect(COM1.fire(COM2.gameboard)).toBe(1);
});

test('when the AI hits a ship, the next attack will be adjacent to the last hit(9)', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(1, 'y', COM2.gameboard.ships[3]);
  COM2.gameboard.placeShip(40, 'x', COM2.gameboard.ships[1]);
  COM2.gameboard.receiveAttack(40);
  COM2.gameboard.receiveAttack(41);
  COM2.gameboard.receiveAttack(42);
  COM2.gameboard.receiveAttack(31);
  COM1.setCurrentTarget(31, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(32);
  expect(COM1.fire(COM2.gameboard)).toBe(30);
  expect(COM1.fire(COM2.gameboard)).toBe(21);
  expect(COM1.fire(COM2.gameboard)).toBe(11);
  expect(COM1.fire(COM2.gameboard)).toBe(1);
});

test('if the AI has no where to shoot it shoots randomly again', () => {
  let COM1 = AI();
  let COM2 = AI();
  COM2.gameboard.placeShip(23, 'y', COM2.gameboard.ships[4]);
  COM2.gameboard.placeShip(54, 'x', COM2.gameboard.ships[1]);
  COM2.gameboard.placeShip(64, 'x', COM2.gameboard.ships[2]);
  COM2.gameboard.placeShip(37, 'y', COM2.gameboard.ships[3]);
  COM2.gameboard.placeShip(76, 'x', COM2.gameboard.ships[0]);
  COM2.gameboard.receiveAttack(63);
  COM1.setCurrentTarget(63, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(62);
  expect(COM1.fire(COM2.gameboard)).toBe(73);
  expect(COM1.fire(COM2.gameboard)).toBe(53);
  expect(COM1.fire(COM2.gameboard)).toBe(43);
  expect(COM1.fire(COM2.gameboard)).toBe(33);
  expect(COM1.fire(COM2.gameboard)).toBe(23);
  COM2.gameboard.receiveAttack(55);
  COM1.setCurrentTarget(55, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(56);
  expect(COM1.fire(COM2.gameboard)).toBe(54);
  COM2.gameboard.receiveAttack(76);
  COM1.setCurrentTarget(76, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(77);
  COM2.gameboard.receiveAttack(67);
  COM1.setCurrentTarget(67, COM2.gameboard.ships);
  expect(COM1.fire(COM2.gameboard)).toBe(68);
  expect(COM1.fire(COM2.gameboard)).toBe(57);
  expect(COM1.fire(COM2.gameboard)).toBe(47);
  expect(COM1.fire(COM2.gameboard)).toBe(37);
});