const id = 'rectangleIntersection';
const tests = (f) => [
  {
    name: 'rectangleIntersection({ x: 0, y: 0, w: 10, h: 10 }, { x: 5, y: 5, w: 10, h: 10 }) returns true',
    test: () => f({ x: 0, y: 0, w: 10, h: 10 }, { x: 5, y: 5, w: 10, h: 10 }) === true,
  },
  {
    name: 'rectangleIntersection({ x: 0, y: 0, w: 10, h: 10 }, { x: 15, y: 15, w: 10, h: 10 }) returns false',
    test: () => f({ x: 0, y: 0, w: 10, h: 10 }, { x: 15, y: 15, w: 10, h: 10 }) === false,
  },
  {
    name: 'rectangleIntersection({ x: -10, y: 0, w: 10, h: 10 }, { x: -20, y: -5, w: 20, h: 20 }) returns true',
    test: () => f({ x: -10, y: 0, w: 10, h: 10 }, { x: -20, y: -5, w: 20, h: 20 }) === true,
  },
  {
    name: 'rectangleIntersection({ x: -10, y: -10, w: 10, h: 10 }, { x: -20, y: -40, w: 20, h: 20 }) returns false',
    test: () => f({ x: -10, y: -10, w: 10, h: 10 }, { x: -20, y: -40, w: 20, h: 20 }) === false,
  },
];

export const rectangleIntersection = {
  id,
  tests,
};
