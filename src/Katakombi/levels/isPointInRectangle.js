const id = 'isPointInRectangle';
const tests = (f) => [
  {
    name: 'isPointInRectangle({ x: 0, y: 0 }, { x: -5, y: -5, w: 10, h: 10 }) returns true',
    test: () => f({ x: 0, y: 0 }, { x: -5, y: -5, w: 10, h: 10 }) === true,
  },
  {
    name: 'isPointInRectangle({ x: 15, y: 15 }, { x: -5, y: -5, w: 10, h: 10 }) returns false',
    test: () => f({ x: 15, y: 15 }, { x: -5, y: -5, w: 10, h: 10 }) === false,
  },
  {
    name: 'isPointInRectangle({ x: 0, y: 0 }, { x: -5, y: -5, w: 10, h: 10 }) returns true',
    test: () => f({ x: 0, y: 0 }, { x: -5, y: -5, w: 10, h: 10 }) === true,
  },
  {
    name: 'isPointInRectangle({ x: -6, y: 7 }, { x: -5, y: -5, w: 10, h: 10 }) returns false',
    test: () => f({ x: -6, y: 7 }, { x: -5, y: -5, w: 10, h: 10 }) === false,
  },
];

export const isPointInRectangle = {
  id,
  tests,
};
