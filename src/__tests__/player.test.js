import Player from '../factory functions/player';

test('player can fire a shot at another player(1)', () => {
  let p1 = Player('bob');
  let p2 = Player('tim');
  p1.fire(11, p2.gameboard)
  expect(p2.gameboard.misses).toEqual([11]);
});

test('player can fire a shot at another player(2)', () => {
  let p1 = Player('bob');
  let p2 = Player('tim');
  p1.gameboard.placeShip(33, 'y', p1.gameboard.ships[0]);
  p2.fire(43, p1.gameboard);
  expect(p1.gameboard.ships[0].hitPosition).toEqual([43]);
});

test('player cant fire a shot at the same cell more than once(1)', () => {
  let p1 = Player('bob');
  let p2 = Player('tim');
  p1.fire(11, p2.gameboard);
  expect(p1.fire(11, p2.gameboard)).toEqual(false);
});

test('player cant fire a shot at the same cell more than once(2)', () => {
  let p1 = Player('bob');
  let p2 = Player('tim');
  p1.gameboard.placeShip(33, 'y', p1.gameboard.ships[0]);
  p2.fire(43, p1.gameboard);
  expect(p2.fire(43, p1.gameboard)).toEqual(false);
});