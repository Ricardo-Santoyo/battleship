import Ship from '../factory functions/ship';

test('accepts a hit', () => {
  let Destroyer = Ship(3, [12,13,14]);
  Destroyer.hit(13);
  expect(Destroyer.hitPosition).toEqual([13]);
});

test('accepts multiple hits', () => {
  let Carrier = Ship(5, [20,30,40,50,60]);
  Carrier.hit(30);
  Carrier.hit(60);
  Carrier.hit(20);
  Carrier.hit(50);
  expect(Carrier.hitPosition).toEqual([30,60,20,50]);
});

test('when ship is sunk it returns true', () => {
  let Battleship = Ship(4, [90,91,92,93]);
  Battleship.hit(91);
  Battleship.hit(92);
  Battleship.hit(90);
  Battleship.hit(93);
  expect(Battleship.isSunk()).toBe(true);
});

test('when ship is not sunk it returns false', () => {
  let Battleship = Ship(4, [90,91,92,93]);
  Battleship.hit(91);
  Battleship.hit(92);
  Battleship.hit(93);
  expect(Battleship.isSunk()).toEqual(false);
});