import AI from '../factory functions/computerAI';

test('AI makes a random move', () => {
  let COM1 = AI();
  let COM2 = AI();
  let pos = COM1.fire(COM2.gameboard);
  expect(COM2.gameboard.misses).toEqual([pos]);
});