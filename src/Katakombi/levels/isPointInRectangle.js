const id = 'isPointInRectangle';
const tests = (f) => [
  {
    name: 'isPointInRectangle({ x: -4, y: 2 }, { x: -5, y: -5, w: 10, h: 10 }) returns true',
    test: () => f({ x: -4, y: 2 }, { x: -5, y: -5, w: 10, h: 10 }) === true,
  },
  {
    name: 'isPointInRectangle({ x: 4, y: 4 }, { x: -5, y: -5, w: 10, h: 10 }) returns true',
    test: () => f({ x: 4, y: 4 }, { x: -5, y: -5, w: 10, h: 10 }) === true,
  },
  {
    name: 'isPointInRectangle({ x: 2, y: -4 }, { x: -5, y: -5, w: 10, h: 10 }) returns true',
    test: () => f({ x: -3, y: -3 }, { x: -5, y: -5, w: 10, h: 10 }) === true,
  },

  {
    name: 'isPointInRectangle({ x: -4, y: 6 }, { x: -5, y: -5, w: 10, h: 10 }) returns false',
    test: () => f({ x: -4, y: 6 }, { x: -5, y: -5, w: 10, h: 10 }) === false,
  },
  {
    name: 'isPointInRectangle({ x: 6, y: 4 }, { x: -5, y: -5, w: 10, h: 10 }) returns false',
    test: () => f({ x: 6, y: 4 }, { x: -5, y: -5, w: 10, h: 10 }) === false,
  },
  {
    name: 'isPointInRectangle({ x: 8, y: -4 }, { x: -5, y: -5, w: 10, h: 10 }) returns false',
    test: () => f({ x: 8, y: -4 }, { x: -5, y: -5, w: 10, h: 10 }) === false,
  },
  {
    name: 'isPointInRectangle({ x: -2, y: -8 }, { x: -5, y: -5, w: 10, h: 10 }) returns false',
    test: () => f({ x: -2, y: -8 }, { x: -5, y: -5, w: 10, h: 10 }) === false,
  },
];

export const isPointInRectangle = {
  id,
  tests,
};
