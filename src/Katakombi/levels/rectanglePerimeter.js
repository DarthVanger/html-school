const id = 'rectanglePerimeter';
const tests = (f) => [
  {
    name: 'rectanglePerimeter({ x: 3, y: 4, w: 5, h: 5 }) returns 20',
    test: () => f({ x: 3, y: 4, w: 5, h: 5 }) == 20,
  },
  {
    name: 'rectanglePerimeter({ x: 0, y: 8, w: 3, h: 7 }) returns 20',
    test: () => f({ x: 0, y: 8, w: 3, h: 7 }) == 20,
  },
  {
    name: 'rectanglePerimeter({ x: 0, y: 0, w: 0, h: 0 }) returns 0',
    test: () => f({ x: 0, y: 0, w: 0, h: 0 }) == 0 
  },
  {
    name: 'rectanglePerimeter({ x: 10, y: 10, w: 15, h: 8 }) returns 46',
    test: () => f({ x: 10, y: 10, w: 15, h: 8 }) == 46
  },
];

export const rectanglePerimeter = {
  id,
  tests,
};
